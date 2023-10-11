'use client'

import React from 'react'
import { SWRConfig } from 'swr'
import axios from 'axios'
import { swrMiddleware } from '../../middleware'
import { AxiosInterceptors } from '@/app/sales/interceptors/axios.interceptors'

interface Props {
  children: React.ReactNode
}

export default function SalesSWRProvider({children}: Props) {
  AxiosInterceptors()
  return (
    <SWRConfig value={{
      fetcher: (url: string) => axios.get(url).then(res => res.data)
    }}> 
      {children}
    </SWRConfig>
  )
}