
import React from 'react'
import { InfoPurchase, TableOrders } from './components'
import { HeaderModule } from '../components'
import { Order } from '../models/purchase.models'
import { getOrdersByPurchaseId } from '../services/purchase.services'

async function fetchOrderByPurchaseId(id: string) {
  return await getOrdersByPurchaseId(id)
}

function getTotalOrders(orders:Order[]) {
  let total:number = 0
  orders.forEach((order) => {
    total += order.subtotal
  })
  return total
}

export default async function Page({params}:{params: {id: string}}) {
  const orders = await fetchOrderByPurchaseId(params.id)
  return (
    <div className="mx-auto max-w-7xl p-4">
      <HeaderModule />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
        <div className='relative w-full bg-white col-span-12 md:col-start-1 md:col-end-4 border rounded'>
          <InfoPurchase total={getTotalOrders(orders)} id={params.id} />
        </div>
        <div className='w-full bg-white col-span-12 md:col-start-4 md:col-end-13'>
          <TableOrders orders={orders}/>
        </div>
      </div>
    </div>
  )
}
