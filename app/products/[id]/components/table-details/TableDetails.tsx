'use client'
import { DetailsRecipe } from "@/app/products/models/product.models"
import { convertToCOP } from "@/app/sales/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrashIcon } from "@heroicons/react/24/outline"
import { HeadTable } from ".."
import useSWR from 'swr'
import { getDetailsByProductId} from "@/app/products/services/products.services"
import DetailUpdateForm from "../detail-update-form/DetailUpdateForm"
import DetailDeleteForm from "../datails-delete-form/DetailsDeleteForm"


interface Props {
  details: DetailsRecipe[]
}

export default function TableDetails({details}:Props) {
// const {data: details, isLoading, isValidating, error} = useSWR(urlSupply, getDetailsByProductId)
  return (
    <div>
      <HeadTable />
      <div className="mt-2">
      <Table className="border rounded">
            <TableHeader>
              <TableRow>
                <TableHead>Insumo</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead>Unidad de medida</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Subtotal</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                Array.isArray(details) && details.map((detail) => (
                  <TableRow key={detail.supply_id}>
                    <TableCell className="font-medium capitalize">{detail.supply}</TableCell>
                    <TableCell>{detail.amount_supply}</TableCell>
                    <TableCell>{detail.unit_measure}</TableCell>
                    <TableCell>${convertToCOP(detail.supply_price)}</TableCell>
                    <TableCell>${convertToCOP(detail.subtotal)}</TableCell>
                    <TableCell className="flex items-center gap-2 justify-end">
                      <DetailUpdateForm detail={detail} />
                      <DetailDeleteForm detail={detail} /> 
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
