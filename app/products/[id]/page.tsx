import React from 'react'
import { TableDetails, InfoProduct } from './components'
import { HeaderModule} from '../components'
import { DetailsRecipe } from '../models/product.models'
import { getDetailsByProductId } from '../services/products.services'
import { DetailContextProvider } from './context/detail-context/DetailContext'

async function fetchDetailsByProductId(id: string) {
  return await getDetailsByProductId(id)
}

function getSubtotalDetail(details:DetailsRecipe[]) {
  let subtotal:number = 0
  details.forEach((detail) => {
    subtotal += detail.subtotal
  })
  return subtotal
}

export default async function Page({params}:{params: {id: string}}) {
  
  const details = await fetchDetailsByProductId(params.id)
  console.log(details)
  return (
    <DetailContextProvider>
      <div className="mx-auto max-w-7xl p-4">
        <HeaderModule />
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
          <div className='w-full bg-white col-span-12 md:col-span-9'>
            <TableDetails details={details}/>
          </div>
          <div className='relative w-full bg-white col-span-12 md:col-start-10 md:col-end-13 border rounded'>
            <InfoProduct subtotal={getSubtotalDetail(details)} id={params.id} />
          </div>
        </div>
      </div>
    </DetailContextProvider>
    
  )
}
