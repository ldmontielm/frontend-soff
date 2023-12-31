'use client'
import React, { useState } from 'react'
import {Table,TableBody,TableHead,TableHeader,TableRow, TableCell} from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { HeadTable } from '..'
import { AdjustmentsHorizontalIcon, ChevronRightIcon, ChevronLeftIcon,  BookOpenIcon } from '@heroicons/react/24/outline'
import {Select, SelectContent, SelectTrigger, SelectItem, SelectValue} from "@/components/ui/select"
import {ColumnDef, flexRender, ColumnFiltersState, getFilteredRowModel, VisibilityState, getCoreRowModel, getPaginationRowModel, useReactTable, SortingState, getSortedRowModel } from "@tanstack/react-table"
import { DropdownMenu,DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Checkbox } from "@mui/material"
import {Tooltip} from "@mui/material"
import { Routes } from "@/models/routes.models";
import Link from 'next/link'
import {BookOpen, Columns} from 'lucide-react'


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[],
  data: TData[],
  isLoading: boolean,
  error: any,
  setActive:React.Dispatch<React.SetStateAction<boolean>>,
  consult: boolean
}

export function DataTable<TData, TValue>({columns, data, isLoading, error, setActive, consult}: DataTableProps<TData, TValue>){
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
              <>
              <Tooltip placement="top" title="Ver manual de usuario." arrow>
              <Link href={`${Routes.CREATEPRODUCT}/manual`} >
                  <Button variant='outline' size='icon'>
                      <BookOpen size={16} color='#6f6f6f'/>
                  </Button>
              </Link>
            </Tooltip>
              </>
            </DropdownMenuTrigger>
            <DropdownMenuTrigger asChild>

              <Tooltip placement="top" title="Ocultar columnas" arrow>
              <Button variant="outline" className="w-full md:w-fit ml-auto flex items-center gap-2">
              <Columns size={16} color='#6f6f6f'  />
                <span>Columnas</span>
              </Button>
              </Tooltip>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='start'>
            {table
                .getAllColumns()
                .filter(
                  (column) => typeof column.accessorFn !== "undefined" && column.getCanHide()
                  )
                  .map((column) => {
                    return (
                      <div  key={column.id} className="text-sm pr-3">
                        <Checkbox
                        checked={column.getIsVisible()}
                        onChange={(event) =>{
                          column.toggleVisibility(event.target.checked);
                        }}
                        color="primary"
                        />
                        { 
                          column.id === 'name' ? 'Nombre' :
                          column.id === 'price' ? 'Costo' :
                          column.id === 'sale_price' ? 'Precio de venta' :
                          column.id === 'register_date' ? 'Fecha registro' : 
                          column.id === 'status' ? 'Estado' : column.id
                        }
                      </div>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Tooltip placement="top" title={`Ver productos ${consult === true ? 'Inactivos' : 'Activos'}`} arrow>
                <Button variant="outline" className=" text-sm hover:bg-gray-100 w-full md:w-fit flex items-center gap-2" 
                  onClick={() => {setActive(!consult)
                    }}>
                      {consult === !true ? "Activos" : "Inactivos"}
                </Button>
            </Tooltip>
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
              ):
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
                  <TableCell colSpan={columns.length} className='h-24 text-center'>
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