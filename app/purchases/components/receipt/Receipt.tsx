'use client'
import React from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { urlPurchases, getOrdersByPurchaseId, getPurchaseById } from '../../services/purchase.services'
import useSWR from 'swr'
import { convertDate } from '../../utils'
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline'
import { Order, Purchase } from '@/app/purchases/models/purchase.models'

interface OrderInvoice {
  supply: string
  amount: number
  price: number
  subtotal: number
}
interface Props {
    purchaseId: string
    purchase: Purchase
  }
export default function Receipt({purchaseId, purchase}:Props) {
  const {data:orders} = useSWR(`${urlPurchases}/${purchaseId}/orders`, getOrdersByPurchaseId)
  const generateReceipt = () => {
    const doc = new jsPDF()
    doc.text('Factura de Compra', 15, 20);

    // Datos del cliente y fecha
    doc.text(`Proveedor: ${purchase !== undefined ? purchase?.provider : "No hay Proveedor"}`, 150, 20);
    doc.text(`${purchase !== undefined ? convertDate(purchase?.purchase_date) : "No hay fecha"}`, 150, 30, ).setFontSize(10);

    // Datos de la tabla de productos
    const columns = ['Insumo', 'Cantidad', 'Precio Unitario', 'Subtotal'];
    const data:any[] = [];
    Array.isArray(orders) && orders.map((order) => {
      data.push([order.supply, order.amount_supplies, order.price_supplies, order.subtotal])
    })

    // Generar la tabla de productos
    autoTable(doc, {
      head: [columns],
      body: data,
      startY: 50
    });

    // Calcular el total
    // const total = data.reduce((sum, [, , , total]) => sum + total, 0);

    // Guardar o mostrar el PDF (puedes personalizar esta parte según tus necesidades)
    doc.save(`receipt-${purchaseId}.pdf`);
  }

  return (
    <div>
      
      {/* <button onClick={() => generateReceipt()}>Descargar pdf</button> */}
      <div onClick={() => generateReceipt()} className='flex items-center px-2 cursor-default rounded hover:bg-neutral-100 select-none text-sm py-1.5 transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'>
          <ArrowDownOnSquareIcon className="w-4 h-4 mr-2"/> Descargar factura
      </div>
    </div>
  )
  }
