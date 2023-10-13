import React from 'react'
import { Toaster } from "@/components/ui/toaster"

interface Props {
  children: React.ReactNode
}

export default function layout({children}: Props){
  return (
      <div>
        {children}
        <Toaster />
      </div>
  )
}