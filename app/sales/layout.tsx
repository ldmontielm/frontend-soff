import React from 'react'
import { SalesSWRProvider } from './context'


interface Props {
  children: React.ReactNode
}

export default function layout({children}: Props) {
  return (
    <SalesSWRProvider>
      <div>
        {children}
      </div>
    </SalesSWRProvider>
  )
}
