'use client'
import { RoutesApi } from "@/models/routes.models"
import { convertToCOP } from "@/app/(protected)/sales/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import useSWR from "swr"
import { HeadTable } from ".."
import OrderDeleteForm from "../order-delete-form/OrderDeleteForm"
import OrderUpdateForm from "../order-update-form/OrderUpdateForm"


interface Props {
  id: string
}

export default function TableOrders({id}: Props) {
 const {data:OrdersContext} = useSWR(`${RoutesApi.SALES}/${id}/orders`)

  return (
    <div>
      <HeadTable id={id}/>
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
                      <OrderUpdateForm order={order} id_sale={id} />
                      <OrderDeleteForm order={order} id_sale={id} />
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
