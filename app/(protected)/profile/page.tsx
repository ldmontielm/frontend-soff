import React from 'react'
import { CardComponent, CardForm } from './components'

export default function page() {
    
    return (
      <div className='w-full mx-auto max-w-7xl p-4'>
          <div className='mt-5'>  
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
              <div className='md:col-span-3'>
                <CardForm />
              </div>
              <div className='md:col-start-4 md:col-end-13'>
              <CardComponent />
              </div>
          </div>
          </div>
      </div>
    )
}