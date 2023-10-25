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
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  ColumnDef,
  flexRender,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel
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
  isLoading: boolean
  error: any
}

export function DataTable<TData, TValue>({columns, data, isLoading, error}: DataTableProps<TData, TValue>){

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
            {/* <TooltipProvider>
              <Tooltip>
                  <TooltipTrigger asChild> */}
              <Button variant="outline" className="w-full md:w-fit ml-auto flex items-center gap-2">
                <AdjustmentsHorizontalIcon className='w-4 h-4' />
                <span>Columnas</span>
              </Button>
              {/* </TooltipTrigger>
                        <TooltipContent className="bg-gray-500">
                        <p className="text-xs font-semibold">Aquí puedes ocultar las columnas que no necesites.</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent align='start'>
            {table
                .getAllColumns()
                .filter(
                  (column) => typeof column.accessorFn !== "undefined" && column.getCanHide()
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
                      { 
                        column.id === 'name' ? 'Nombre' :
                        column.id === 'price' ? 'Costo' :
                        column.id === 'sale_price' ? 'Precio de venta' :
                        column.id === 'register_date' ? 'fecha registro' : 
                        column.id === 'status' ? 'Estado' : column.id
                      }
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
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