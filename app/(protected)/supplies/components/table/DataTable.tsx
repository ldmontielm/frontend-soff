'use client'
import React, {useState} from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

// import { Check, ChevronRight, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Routes } from "@/models/routes.models"
import { Supply } from "../../models/supply.models"
import { createSupply } from "../../services/supply.services"
// import HeadTable from "@/app/users/components/head-table/HeadTable"
import { HeadTable } from ".."
import { AdjustmentsHorizontalIcon, BookOpenIcon, DocumentChartBarIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { Checkbox } from "@mui/material"
import {Tooltip} from "@mui/material"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    ColumnDef,
    SortingState,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    VisibilityState,
    ColumnFiltersState,
    useReactTable,
    getFilteredRowModel
  } from "@tanstack/react-table"



  import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { number } from "zod"
import {Columns, BookOpen} from "lucide-react"


interface DataTableProps<TData, TValue>{
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  isLoading: boolean
  error: any
  setActive:React.Dispatch<React.SetStateAction<boolean>>,
  consult: boolean
}

export function DataTable<TData, TValue>({columns, data,isLoading, error, setActive, consult}: DataTableProps<TData, TValue>){
  const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    
    const table = useReactTable({
        data,columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        state: {
          sorting,
          columnFilters,
          columnVisibility,
        },
      })


    return(
        <div>
            <div className="w-full flex flex-col md:flex-row items-center py-4 gap-3 justiry-between">
            <div className="w-full md:w-screen flex flex-col md:flex-row items-center py-4 gap-3 justify-between">
                    <Input
                        placeholder="Filtrar por Insumo..."
                        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("name")?.setFilterValue(event.target.value)}
                            className="w-full md:max-w-sm" 
                    />

            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <>
              <Tooltip placement="top" title="Ver manual de usuario." arrow>
              <Link href={`${Routes.SUPPLIES}/manual`} >
                  <Button variant='outline' size='icon'>
                    <BookOpen size={16} color='#6f6f6f'  />
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
            <DropdownMenuContent align="center">
                {table
                .getAllColumns()
                .filter(
                    (column) => typeof column.accessorFn !== "undefined" && column.getCanHide()
                )
                .map((column) => {
                    return (
                    <div key={column.id} className="capitalize">
                    <Checkbox
                      checked={column.getIsVisible()}
                      onChange={(event) => {
                        column.toggleVisibility(event.target.checked);
                      }}
                      color="primary"
                      />
                      { 
                        column.id === 'name' ? 'Nombre' :
                        column.id === 'price' ? 'Precio' :
                        column.id === 'quantity_stock' ? 'Cantidad' :
                        column.id === 'unit_measure' ? 'Unidad de medida' :
                        column.id === 'status' ? 'Estado' :
                        column.id === 'actions' ? 'Acciones' :                        
                        column.id
                    }
                  </div>
                    )
                })}
            </DropdownMenuContent>
            </DropdownMenu>
            
          <Tooltip placement="top" title={`Click para ver los insumos ${consult === true ? "Inactivos" : "Activos"}`} arrow>
          <Button variant="outline" className=" text-sm bg-white hover:bg-gray-100" 
                  onClick={() => {setActive(!consult)
                    }}>
                      {consult === true ? "Inactivos" : "Activos"}</Button>
        </Tooltip>
          </div>
              <HeadTable/>
            </div>

            <div className="rounden-md border">
                <Table>
                    <TableHeader>
                    {
                        table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {
                                    headerGroup.headers.map((header) => {
                                        return(
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
                                    <TableCell colSpan={columns.length} className="h-24 text-center" >
                                        No resultados
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
      </div>

        </div>
    )
}

