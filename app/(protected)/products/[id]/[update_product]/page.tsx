
import React from 'react'
import { InfoProduct } from './components'
import { HeaderModuleDetail } from '../../components/header-module/HeaderModule'
import { TableDetails } from '../components'

export default async function Page({params}:{params: {id: string}}) {
  return (
    <div className="mx-auto max-w-7xl p-4">
      <HeaderModuleDetail />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
        <div className='w-full bg-white col-span-12 md:col-span-9'>
          <TableDetails id={params.id}/>
        </div>
        <div className='relative w-full bg-white col-span-12 md:col-start-10 md:col-end-13 border rounded'>
          <InfoProduct id={params.id}/>
        </div>
      </div>
    </div>    
  )
}
