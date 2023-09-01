'use client'

import React from 'react'
import { SWRConfig } from 'swr'

interface Props {
  children: React.ReactNode
}

function localStorageProvider() {
  // When initializing, we restore the data from `localStorage` into a map.
  const map = new Map<any, any>(JSON.parse(localStorage.getItem('sales-cache') || '[]'))
 
  // Before unloading the app, we write back all the data into `localStorage`.
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()))
    localStorage.setItem('app-cache', appCache)
  })
 
  // We still use the map for write & read for performance.
  return map
}

export default function SalesSWRProvider({children}: Props) {
  return (
    <SWRConfig value={{provider: localStorageProvider}}>
      {children}
    </SWRConfig>
  )
}