'use client'
import React, { useState } from 'react'
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { HeadTable } from '..'
import { Report } from '../report'
import { AdjustmentsHorizontalIcon, ChevronRightIcon, ChevronLeftIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import {ColumnDef,flexRender,ColumnFiltersState,getFilteredRowModel,VisibilityState,getCoreRowModel,getPaginationRowModel,useReactTable,SortingState, getSortedRowModel} from "@tanstack/react-table"
import {DropdownMenu,DropdownMenuContent,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@mui/material"
import {
  Tooltip
} from "@mui/material"
import Link from 'next/link'
import { Routes } from "@/models/routes.models";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  isLoading: boolean
  error: any
}

export function DataTable<TData, TValue>({columns, data, isLoading, error}: DataTableProps<TData, TValue>){
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
 
  const table = useReactTable({
    data, columns, getCoreRowModel: getCoreRowModel(), getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
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
            placeholder="Filtrar por proveedor..."
            value={(table.getColumn("provider")?.getFilterValue() as string)  ?? "" }
            onChange={(event) =>
              table.getColumn("provider")?.setFilterValue(event.target.value)
            }
            className="w-full md:max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <>
                <Tooltip placement="top" title="Ver manual de usuario." arrow>
                  <Link href={`${Routes.CREATEPURCHASE}/manual`} >
                      <Button variant='outline' className="w-full md:w-fit ml-auto flex items-center gap-2">
                          <BookOpenIcon className=" h-4 w-4"/>
                      </Button>
                  </Link>
                </Tooltip>
              </>
            </DropdownMenuTrigger>
            <DropdownMenuTrigger asChild>
              <Tooltip placement="top" title="Aqui podrás ocultar las columnas de la tabla." arrow>
                <Button variant="outline" className="w-full md:w-fit ml-auto flex items-center gap-2">
                  <AdjustmentsHorizontalIcon className='w-4 h-4' />
                  <span>Columnas</span>
                </Button>
              </Tooltip>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='start'>
            {table
                .getAllColumns()
                .filter(
                  (column) =>  typeof column.accessorFn !== "undefined" && column.getCanHide()
                  )
                  .map((column) => {
                    return (
                      <div  key={column.id} className="text-sm">
                        <Checkbox
                        checked={column.getIsVisible()}
                        onChange={(event) =>{
                          column.toggleVisibility(event.target.checked);
                        }}
                        color="primary"
                        />
                      {
                        column.id === 'invoice_number' ? 'Recibo':
                        column.id === 'purchase_date' ? 'Fecha' :
                        column.id === 'amount_order' ? 'Ordenes' :
                        column.id === 'provider' ? 'Proveedor' :
                        column.id === 'total' ? 'Total' :
                        column.id === 'actions' ? 'Operaciones' : column.id

                      }
                    </div>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Report data={data}/>
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
              data.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length} className='h-24 text-center'>
                    No se encontraron resultados
                  </TableCell>
                </TableRow>
              ): table.getRowModel().rows?.length ? (
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
                    No se encontraron resultados.
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