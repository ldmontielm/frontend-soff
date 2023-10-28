'use client'
import { convertToCOP } from "@/app/purchases/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { HeadTablep } from ".."
import useSWR from "swr"
import { RoutesApi } from "@/models/routes.models"
import OrderUpdateForm from "../order-update-form/OrderUpdateForm"
import OrderDeleteForm from "../order-delete-form/OrderDeleteForm"


interface Props {
  id:string
}

export default function TableOrders({id}:Props) {
  const {data:OrdersContext} = useSWR(`${RoutesApi.PURCHASES}/${id}/orders`)

  return (
    <div>
      <HeadTablep id={id}/>
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
                Array.isArray(OrdersContext) && OrdersContext.map((order) => (
                  <TableRow key={order.id_order}>
                    <TableCell className="font-medium capitalize">{order.supply}</TableCell>
                    <TableCell>{order.amount_supplies}</TableCell>
                    <TableCell>${convertToCOP(order.price_supplies)}</TableCell>
                    <TableCell>${convertToCOP(order.subtotal)}</TableCell>
                    <TableCell className="flex items-center gap-2 justify-end">
                      <OrderUpdateForm order={order} id_purchase={id}/>
                      <OrderDeleteForm order={order} id_purchase={id}/>
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
