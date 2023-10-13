'use client'
import React, { useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { convertToCOP, convertDate } from '../../utils'
import Link from 'next/link'
import { Routes } from '@/models/routes.models'
import { Sale } from '../../models/sale.models'
import { createSala } from '../../services/sale.services'
import { HeadTable } from '..'
import { AdjustmentsHorizontalIcon, DocumentChartBarIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ColumnDef, flexRender, ColumnFiltersState, getFilteredRowModel, VisibilityState, getCoreRowModel, getPaginationRowModel, useReactTable, SortingState, getSortedRowModel } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

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
            placeholder="Filtrar por cliente..."
            value={(table.getColumn("client")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("client")?.setFilterValue(event.target.value)
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
                        }>
                      {
                        column.id  === 'client' ? 'Cliente' : 
                        column.id === 'sale_date' ? 'Fecha' :
                        column.id === 'amount_order' ? 'Ordenes' :
                        column.id === 'payment_method' ? 'Método' :
                        column.id === 'type_sale' ? 'Tipo' :
                        column.id === 'total' ? 'Total' :
                        column.id === 'status' ? 'Estado' : 
                        column.id === 'actions' ? 'Operaciones' : column.id

                      }
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
              data.length === 0 ? (
                  <TableRow>
                      <TableCell colSpan={columns.length} className='h-24 text-center' text-center>
                      No se encontraron resultados.
                    </TableCell>
                  </TableRow>
              ) : table.getRowModel().rows?.length ? (
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
        <Select 
          defaultValue={table.getState().pagination.pageSize.toString()}
          onValueChange={(e) => table.setPageSize(Number(e))}
          >
          <SelectTrigger className="w-fit">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            {[10, 20, 30, 40, 50].map(pageSize => (
              <SelectItem key={pageSize} value={pageSize.toString()}>Mostrar {pageSize}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p>Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}</p>
      </div>
    </div>
  )
}