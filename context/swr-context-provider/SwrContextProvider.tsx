'use client'

import axios, { AxiosRequestConfig } from 'axios'
import React from 'react'
import { SWRConfig } from 'swr'
import { AxiosInterceptors } from '@/interceptors/axios.interceptors'

interface Props {
  children: React.ReactNode
}

export default function SwrContextProvider({children}: Props) {
  AxiosInterceptors()
  return (
    <SWRConfig value={{
      refreshInterval: 3000,
      fetcher: (url: string) => axios.get(url).then(res => res.data)
    }}> 
      {children}
    </SWRConfig>
  )
}
