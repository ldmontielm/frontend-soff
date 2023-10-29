'use client'
import React from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import useSWR from 'swr'
import { convertDate } from '../../utils'
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline'
import { Order } from '../../models/sale.models'
import { RoutesApi } from '@/models/routes.models'
interface Props {
  id: string
}

interface OrderInvoice {
  product: string
  amount: number
  price: number
  total: number
}
export default function Receipt({id}:Props) {
  const {data:orders} = useSWR<Order[]>(`${RoutesApi.SALES}/${id}/orders`)
  const {data:sale} = useSWR(`${RoutesApi.SALES}/${id}`)

  const generateReceipt = () => {
    const doc = new jsPDF()
    doc.text('Factura de Venta', 15, 20);

    // Datos del cliente y fecha
    doc.text(`Cliente: ${sale !== undefined ? sale.client : "No hay cliente"}`, 150, 20);
    doc.text(`${sale !== undefined ? convertDate(sale.sale_date) : "No hay fecha"}`, 150, 30, ).setFontSize(10);

    // Datos de la tabla de productos
    const columns = ['Producto', 'Cantidad', 'Precio Unitario', 'Total'];
    const data:any[] = [];
    Array.isArray(orders) && orders.map((order) => {
      data.push([order.product, order.amount_product, order.price, order.total])
    })

    // Generar la tabla de productos
    autoTable(doc, {
      head: [columns],
      body: data,
      startY: 50
    });

    // Calcular el total
    // const total = data.reduce((sum, [, , , total]) => sum + total, 0);

    doc.save(`receipt-${id}.pdf`);
  }

  return (
    <div>
      <div onClick={() => generateReceipt()} className='flex items-center px-2 cursor-default rounded hover:bg-neutral-100 select-none text-sm py-1.5 transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'>
          <ArrowDownOnSquareIcon className="w-4 h-4 mr-2"/> Descargar factura
      </div>
    </div>
  )
}