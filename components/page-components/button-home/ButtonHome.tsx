'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'


export default function ButtonHome() {
  const router = useRouter()
  return (
    <div>
        <Button variant='outline' onClick={() => router.push('/auth/login')}>Iniciar sesión</Button>
    </div>
  )
}
