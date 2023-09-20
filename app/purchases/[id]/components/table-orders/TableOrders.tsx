'use client'
import { Order } from "@/app/purchases/models/purchase.models"
import { convertToCOP } from "@/app/purchases/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrashIcon } from "@heroicons/react/24/outline"
import { HeadTable } from ".."
import { Supply } from "@/app/purchases/models/supply.models"
import OrderUpdateForm from "../order-update-form/OrderUpdateForm"
import OrderDeleteForm from "../order-delete-form/OrderDeleteForm"


interface Props {
  orders: Order[]
}

export default function TableOrders({orders}:Props) {
  console.log(orders)
  return (
    <div>
      <HeadTable />
      <div className="mt-2">
      <Table className="border rounded">
            <TableHeader>
              <TableRow>
                <TableHead>Insumo</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Subtotal</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                Array.isArray(orders) && orders.map((order) => (
                  <TableRow key={order.id_order}>
                    <TableCell className="font-medium capitalize">{order.supply}</TableCell>
                    <TableCell>{order.amount_supplies}</TableCell>
                    <TableCell>${convertToCOP(order.price_supplies)}</TableCell>
                    <TableCell>${convertToCOP(order.subtotal)}</TableCell>
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
