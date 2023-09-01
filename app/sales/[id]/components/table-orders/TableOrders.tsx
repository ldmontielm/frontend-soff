'use client'
import { Order } from "@/app/sales/models/sale.models"
import { convertToCOP } from "@/app/sales/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrashIcon } from "@heroicons/react/24/outline"
import { HeadTable } from ".."
import OrderUpdateForm from "../order-update-form/OrderUpdateForm"
import OrderDeleteForm from "../order-delete-form/OrderDeleteForm"
import { urlSales, getOrdersBySaleId } from "@/app/sales/services/sale.services";
import useSWR from "swr"
import { useParams } from "next/navigation"

export default function TableOrders() {
 const params = useParams()
 const {data:OrdersContext,} = useSWR(`${urlSales}/${params.id}/orders`, getOrdersBySaleId)
  return (
    <div>
      <HeadTable />
      <div className="mt-2">
      <Table className="border rounded">
            <TableHeader>
              <TableRow>
                <TableHead>Producto</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead>Total</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                Array.isArray(OrdersContext) && OrdersContext.map((order) => (
                  <TableRow key={order.product_id}>
                    <TableCell className="font-medium capitalize">{order.product}</TableCell>
                    <TableCell>${convertToCOP(order.price)}</TableCell>
                    <TableCell>{order.amount_product}</TableCell>
                    <TableCell>${convertToCOP(order.total)}</TableCell>
                    <TableCell className="flex items-center gap-2 justify-end">
                      <OrderUpdateForm order={order} />
                      <OrderDeleteForm order={order} />
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
      </div>
    </div>
  )
}
