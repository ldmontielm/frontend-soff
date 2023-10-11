import React from 'react'
import { SalesSWRProvider } from './context/providers'
import { Toaster } from "@/components/ui/toaster"


interface Props {
  children: React.ReactNode
}

export default function layout({children}: Props){
  return (
    <SalesSWRProvider>
      <div>
        {children}
        <Toaster />
      </div>
    </SalesSWRProvider>
  )
}