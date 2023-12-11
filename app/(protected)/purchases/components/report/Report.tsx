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
import { Purchase } from '../../models/purchase.models'
import { Presentation, FileSpreadsheet } from 'lucide-react'



interface DataTableProps<TData, TValue> {
  data: TData[]
}

export default function Report<TData, TValue>({data}: DataTableProps<TData, TValue>) {
  const { toast } = useToast()

  return (
    <Popover>
        <PopoverTrigger asChild>
          <Tooltip placement="top" title="Aqui podrás generar reporte de todas las compras" arrow>
           <Button
            variant='outline'
            className="flex items-center w-full md:w-fit gap-2">
             <Presentation size={16} color='#6f6f6f' />
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
                  onClick={() => {generateExcelReport(data as Array<Purchase>)
                      toast({variant: 'default', title: "Generando reporte excel", description: "Se ha generado un nuevo informe de compras."})
                  }}>
                    <FileSpreadsheet size={16} color='#6f6f6f' />
                    <span>Generar en Excel</span>
                  </Button>
                </Tooltip>
              </div>
            </div>
        </PopoverContent>
    </Popover>
  )
}
