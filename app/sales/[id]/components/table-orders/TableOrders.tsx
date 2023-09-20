'use client'
import { getOrdersBySaleId, urlSales } from "@/app/sales/services/sale.services"
import { convertToCOP } from "@/app/sales/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useParams } from "next/navigation"
import useSWR from "swr"
import { HeadTable } from ".."
import OrderDeleteForm from "../order-delete-form/OrderDeleteForm"
import OrderUpdateForm from "../order-update-form/OrderUpdateForm"

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
                      <OrderUpdateForm order={order} id_sale={params.id} />
                      <OrderDeleteForm order={order} id_sale={params.id} />
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
