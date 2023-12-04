'use client'

import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import {DocumentChartBarIcon, ChartBarIcon} from '@heroicons/react/24/outline'
import { useToast } from "@/components/ui/use-toast"
import {
  Tooltip
} from "@mui/material"
import ReportPdf from './ReportPdf'
import { generateExcelReport } from '../../utils'
import { ColumnDef, flexRender, ColumnFiltersState, getFilteredRowModel, VisibilityState, getCoreRowModel, getPaginationRowModel, useReactTable, SortingState, getSortedRowModel } from "@tanstack/react-table"
import { Sale } from '../../models/sale.models'
interface DataTableProps<TData, TValue> {
  data: TData[]
}

export default function Report<TData, TValue>({data}: DataTableProps<TData, TValue>) {
  const { toast } = useToast()

  return (
    <Popover>
        <PopoverTrigger asChild>
          <Tooltip placement="top" title="Aqui podrás generar reporte de todas las ventas" arrow>
           <Button
            variant='outline'
            className="flex items-center w-full md:w-fit gap-2">
             <DocumentChartBarIcon className='w-4 h-4' />
             <span>Reporte</span>
           </Button>
         </Tooltip>
        </PopoverTrigger>
        <PopoverContent align='end' className='dark:bg-neutral-900 w-fit text-sm'>
            <div className='flex items-center'>
              <div>
                <span>
                  <ReportPdf/>
                </span>
                <Tooltip placement="top" title="Se generará un reporte en excel." arrow>
                  <Button variant='outline' className='flex items-center w-full mt-2 md:w-fit gap-2' 
                  onClick={() => {generateExcelReport(data as Array<Sale>)
                      toast({variant: 'default', title: "Generando reporte excel", description: "Se ha generado un nuevo informe de ventas."})
                  }}>
                    <ChartBarIcon className='w-4 h-4'/>
                    <span>Generar en Excel</span>
                  </Button>
                </Tooltip>
              </div>
            </div>
        </PopoverContent>
    </Popover>
  )
}