import React from 'react'
import { InfoSale, TableOrders } from './components'
import { HeaderModule } from '../components'

export default function Page({params}:{params: {id: string}}) {

  return (
      <div className="mx-auto max-w-7xl p-4">
        <HeaderModule />
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
          <div className='w-full bg-white col-span-12 md:col-span-9'>
            <TableOrders  id={params.id}/>
          </div>
          <div className='relative w-full bg-white col-span-12 md:col-start-10 md:col-end-13 border rounded'>
            <InfoSale id={params.id} />
          </div>
        </div>
      </div>
  )
}
