
import React from 'react'
import { InfoSale, TableOrders } from './components'
import { HeaderModule } from '../components'
import { Order } from '../models/sale.models'
import { getOrdersBySaleId } from '../services/sale.services'

async function fetchOrderBySaleId(id: string) {
  return await getOrdersBySaleId(id)
}

function getTotalOrders(orders:Order[]) {
  let total:number = 0
  orders.forEach((order) => {
    total += order.total
  })
  return total
}

export default async function Page({params}:{params: {id: string}}) {
  const orders = await fetchOrderBySaleId(params.id)
  return (
    <div className="mx-auto max-w-7xl p-4">
      <HeaderModule />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
        <div className='w-full bg-white col-span-12 md:col-span-9'>
          <TableOrders orders={orders}/>
        </div>
        <div className='relative w-full bg-white col-span-12 md:col-start-10 md:col-end-13 border rounded'>
          <InfoSale total={getTotalOrders(orders)} id={params.id} />
        </div>
      </div>
    </div>
  )
}
