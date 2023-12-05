'use client'
import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  SortingState,
  getCoreRowModel,
  VisibilityState,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HeadTable } from "../components"
import UpdateTable from "../components/update-table/UpdateTable"
import {  ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { Checkbox } from "@mui/material"
import { AdjustmentsHorizontalIcon,BookOpenIcon} from "@heroicons/react/24/outline"
import { Tooltip } from "@mui/material"
import Link from "next/link"
import { Routes } from "@/models/routes.models";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[],
  consult:boolean,
  setActive:React.Dispatch<React.SetStateAction<boolean>>
}



export function DataTable<TData, TValue>({
  columns,
  data,
  consult,
  setActive
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )

  const [columnVisibility, setColumnVisibility] =
  React.useState<VisibilityState>({}) 

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    
  })

  return (
    <div>
      <div className="flex  justify-between items-center pb-8">
        <Input
          placeholder="Filtro nombre..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <Tooltip placement="top" title="Ver manual de usuario." arrow>
              <Link href={`${Routes.USERS}/manual`} >
                  <Button variant='outline' className="w-full md:w-fit ml-auto flex items-center gap-2 ml-2">
                      <BookOpenIcon className=" h-4 w-4"/>
                  </Button>
              </Link>
        </Tooltip>

<DropdownMenu>
          <DropdownMenuTrigger asChild>
          <Tooltip title="Quitar columnas de la tabla" arrow placement="top">
                <Button variant="outline" className="w-full md:w-fit ml-auto flex items-center mr-2">
                    <AdjustmentsHorizontalIcon className="w-4 h-4"/>
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
                      {column.id == "name"? "Nombre" :( column.id == "document_type" ? "Tipo":(column.id == "document" ? "Documento":(column.id == "phone" ? "Telefono": (column.id == "email" ? "Correo":(column.id == "role" ? "Rol": (column.id == "status" ? "Estado": (column.id == "phone" ? "Telefono": null)))))))}
                  </div>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>

        <Tooltip title={`Ver los usuarios ${consult === true ? 'Inactivos' : 'Activos'}`}arrow placement="top">
          <Button
          variant="outline" className="text-sm gb-white hover:bg-gray-100 mr-2"
          onClick={()=>{setActive(!consult)} }>
            {consult === true ?  "Inactivos" :"Activos"}
          </Button>
        </Tooltip>


      <HeadTable/>
      </div>
    <div className="rounded-md border">
      <div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
            ) : (
              <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
</div>
    {/* ------------------------paginado---------------------------- */}
    <div className="flex items-center justify-lingth space-x-2 py-4">
    <Button
      variant="outline"
      size="sm"
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
    >
          <ChevronLeftIcon className='w-4 h-4' />

      Anterior
    </Button>
    <Button
      variant="outline"
      size="sm"
      onClick={() => table.nextPage()}
      disabled={!table.getCanNextPage()}
    >
      Proxima 
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
