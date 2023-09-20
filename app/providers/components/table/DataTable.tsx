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
import { Provider } from "../../models/provider.models"
import { createProvider } from "../../services/provider.services"
// import HeadTable from "@/app/users/components/head-table/HeadTable"
import { HeadTable } from ".."
import { AdjustmentsHorizontalIcon, DocumentChartBarIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { Select,
SelectContent,
SelectGroup,
SelectItem,
SelectLabel,
SelectTrigger,
SelectValue } from "@/components/ui/select"

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

interface DataTableProps<TData, TValue>{
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({columns, data}: DataTableProps<TData, TValue>){
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] =React.useState<VisibilityState>({})
    
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
                <div className="w-full flex flex-col md:flex-row items-center gap-3">
                    <Input
                        placeholder="Filtrar por Proveedor..."
                        value={(table.getColumn("company")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("company")?.setFilterValue(event.target.value)}
                            className="w-full md:max-w-sm" 
                    />

            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full md:w-fit ml-auto flex items-center gap-2">
                    <AdjustmentsHorizontalIcon className="w-4 h-4"/>
                    <span>Columnas</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
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
            <Button variant='outline' className="flex items-center w-full md:w-fit gap-2">
                <DocumentChartBarIcon className="w-4 h-4" />
                <span>Reporte</span>
            </Button>
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
                                    <TableCell colSpan={columns.length} className="h-24" text-center>
                                        No resultados
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </div>

            <div className="flex items-center justify-end space-x-2 py-4">
                <Button 
                variant='outline'
                onClick={() => table.previousPage()}
                className="flex items-center gap-2"
                disabled={!table.getCanPreviousPage()}>
                    <ChevronLeftIcon className="w-4 h-4"/>
                    <span>Anterior</span>
                </Button>
                <Button
                variant={"outline"}
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="flex items-center gap-2"
                >
                    <span>Próxima</span>
                    <ChevronRightIcon className="w-4 h-4"/>
                
                </Button>
                <select
                className="w-fit flex h-9 items-center justify-between rounded-md border-input bg-transparent px-3 py-2 text-sm"
                value={table.getState().pagination.pageSize}
                onChange={e =>{
                    table.setPageSize(Number(e.target.value))
                }}>
                {[10, 20,30,40,50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                        Mostrar {pageSize}
                    </option>
                ))}
                </select>
                <p>Página {table.getState().pagination.pageIndex +1 } de {table.getPageCount()} </p>

            </div>

        </div>
    )
}

