'use client'
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { cn } from '@/lib/utils'


export default function Sidebar() {
  const [expanded, setExpanded] = useState(false)
  return (
    <div onClick={() => setExpanded(!expanded)} className={`${expanded ? 'w-[400px]' : 'w-24'} transition-all min-h-screen bg-blue-700`}>
      <div className='w-full flex items-center justify-center h-20 p-2'>
        <div className={`${expanded ? 'w-full flex items-center gap-2' : ''} `}>
          <div className='w-10 h-10 rounded bg-white text-blue-700 font-extrabold text-xl flex items-center justify-center'  >
            S
          </div>
          <div className={cn({
            hidden: expanded === false
          })}>
            <p className='text-white font-bold'>SOFF</p>
          </div>
        </div>
      </div>
    </div>
  )
}
