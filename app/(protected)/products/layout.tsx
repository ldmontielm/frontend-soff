import React from 'react'
// import { SalesSWRProvider } from './context'


interface Props {
  children: React.ReactNode
}

export default function layout({children}: Props) {
    return (
        <div>
          {children}
        </div>
    )
  }