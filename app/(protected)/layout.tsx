import React from 'react'
import {SheetNavbar} from '@/components/page-components'
import Content from './Content'

interface Props {
    children: React.ReactNode
}

export default function layout({children}: Props) {
  return (
    <div className='flex w-full'>
      <div className='flex w-full'>
        <div className='flex w-full'>
          <SheetNavbar />
          <Content>
            {children}
          </Content>
        </div>
      </div>
    </ div>
  )
}
