'use client'

import { convertToCOP } from "../../../utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { HeadTable } from ".."
import useSWR from 'swr'
import DetailUpdateForm from "../detail-update-form/DetailUpdateForm"
import DetailDeleteForm from "../datails-delete-form/DetailsDeleteForm"
import { RoutesApi } from "@/models/routes.models"

interface Props {
  id:string
}

export default function TableDetails({id}:Props) {
const {data:DetailsContext} = useSWR(`${RoutesApi.PRODUCTS}/${id}/details`)
  return (
    <div>
      <HeadTable id={id} />
      <div className="mt-2">
      <Table className="border rounded">
            <TableHeader>
              <TableRow>
                <TableHead>Insumo</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead>Unidad de medida</TableHead>
                <TableHead>Precio Unitario</TableHead>
                <TableHead>Subtotal</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                Array.isArray(DetailsContext) && DetailsContext.map((detail) => (
                  <TableRow key={detail.supply_id}>
                    <TableCell className="font-medium capitalize">{detail.supply}</TableCell>
                    <TableCell>{detail.amount_supply}</TableCell>
                    <TableCell>{detail.unit_measure}</TableCell>
                    <TableCell>${convertToCOP(detail.supply_price)}</TableCell>
                    <TableCell>${convertToCOP(detail.subtotal)}</TableCell>
                    <TableCell className="flex items-center gap-2 justify-end">
                    <DetailUpdateForm detail={detail} id_product={id}/>
                      <DetailDeleteForm detail={detail} id_product={id}/>
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