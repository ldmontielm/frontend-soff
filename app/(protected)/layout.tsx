import React from 'react'
import { Navbar } from '@/components/page-components'

interface Props {
    children: React.ReactNode
}

export default function layout({children}: Props) {
  return (
    <>
    <Navbar />
    {children}
    </>
  )
}
