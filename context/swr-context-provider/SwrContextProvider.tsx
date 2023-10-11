'use client'

import axios, { AxiosRequestConfig } from 'axios'
import React from 'react'
import { SWRConfig } from 'swr'



interface Props {
  children: React.ReactNode
}

export default function SwrContextProvider({children}: Props) {
  return (
    <SWRConfig value={{
      refreshInterval: 3000,
      fetcher: (url: string) => axios.get(url).then(res => res.data)
    }}> 
      {children}
    </SWRConfig>
  )
}
