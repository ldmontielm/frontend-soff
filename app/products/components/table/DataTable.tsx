// 'use client'
// import React from 'react'
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"

// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { convertToCOP, convertDate } from '../../utils'
// import Link from 'next/link'
// import { Routes } from '@/models/routes.models'
// import { Purchase } from '../../models/purchase.models'
// import { Provider } from '../../models/provider.models'
// import { createPurchase } from '../../services/purchase.services'
// import { getPurchases, urlPurchases } from '../../services/purchase.services'
// import { HeadTable } from '..'
// import useSWR from 'swr'


// export default function TableComponent() {
//   const {data: purchases, isLoading, error} = useSWR(urlPurchases, getPurchases)
//   return (
//     <div >
//       <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between md:space-x-2 space-y-2 md:space-y-0 mb-5">
//         <HeadTable />
//       </div>
//       {isLoading ? "Cargando información...": <></>}
//       <div className='border rounded'>
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Fecha</TableHead>
//               <TableHead>Ordenes</TableHead>
//               <TableHead>Proveedor</TableHead>
//               <TableHead>Total</TableHead>
//               <TableHead className="text-right">Estado</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {Array.isArray(purchases) && purchases.map((purchase) =>(
//               <TableRow key={purchase.id}>
//               <TableCell>{convertDate(purchase.purchase_date)}</TableCell>
//               <TableCell>{purchase.amount_order}</TableCell>
//               <TableCell className='text-left'>{purchase.provider}</TableCell>
//               <TableCell>${convertToCOP(purchase.total)}</TableCell>
//               <TableCell className='text-right'><Badge>{purchase.status ? "Activo": "Inactivo"}</Badge></TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   )}


'use client'
import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { convertToCOP} from '../../utils'
import Link from 'next/link'
import { Routes } from '@/models/routes.models'
import { Product } from '../../models/product.models'
import { createProduct } from '../../services/products.services'
import { HeadTable } from '..'
import { AdjustmentsHorizontalIcon, DocumentChartBarIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  ColumnDef,
  flexRender,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState
} from "@tanstack/react-table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({columns, data}: DataTableProps<TData, TValue>){

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [value, SetValue] = useState("")
  const table = useReactTable({
    data, columns, getCoreRowModel: getCoreRowModel(), getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    state: {
      sorting,
      columnFilters,
      columnVisibility
    }
  })

  return (
    <div>
      <div className='w-full flex flex-col md:flex-row items-center py-4 gap-3 justify-between'>
        <div className='w-full flex flex-col md:flex-row items-center gap-3'>
          <Input
            placeholder="Filtrar por nombre..."
            value={(table.getColumn("name")?.getFilterValue() as string)  ?? ""}
            onChange={(event) =>{
              table.getColumn("name")?.setFilterValue(event.target.value)
              SetValue(event.target.value)
             }
              
            }
            className="w-full md:max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full md:w-fit ml-auto flex items-center gap-2">
                <AdjustmentsHorizontalIcon className='w-4 h-4' />
                <span>Columnas</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='start'>
            {table
                .getAllColumns()
                .filter(
                  (column) => column.getCanHide()
                  )
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant='outline' className='flex items-center w-full md:w-fit gap-2'>
            <DocumentChartBarIcon className='w-4 h-4' />
            <span>Reporte</span>
          </Button>
        </div>
        <HeadTable />
      </div>

      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            {
              table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {
                    headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {
                            header.isPlaceholder ? null : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                              )
                            }
                        </TableHead>
                      )
                    })
                  }
                </TableRow>
              ))
            }
          </TableHeader>
          <TableBody>
            {
              table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                    {
                      row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {
                            flexRender(cell.column.columnDef.cell, cell.getContext())
                          }
                        </TableCell>
                      ))
                    }
                  </TableRow>
                ))
                ) : (
                  <TableRow>
                  <TableCell colSpan={columns.length} className='h-24 text-center' text-center>
                    No se encontró {value}
                  </TableCell>
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center jusitfy-end space-x-2 py-4'>
        <Button 
          variant='outline'
          onClick={() => table.previousPage()}
          className='flex items-center gap-2'
          disabled={!table.getCanPreviousPage()}
          >
          <ChevronLeftIcon className='w-4 h-4' />
          <span>Anterior</span>
          </Button>
        <Button
          variant="outline"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className='flex items-center gap-2'
        >
          <span>Próxima</span>
          <ChevronRightIcon className='w-4 h-4' />
        </Button>
        <select
          className='w-fit flex h-9 items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 '
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Mostrar {pageSize}
            </option>
          ))}
        </select>
        <p>Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}</p>
      </div>
    </div>
  )
}