'use client'
import React, {useState} from 'react'
import useSWR from 'swr'
import { getPermissions } from '../sales/services/sale.services'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function FormPermissions() {
  const {data, isLoading} = useSWR('http://localhost:8000/user/get-permision', getPermissions)
  console.log(isLoading ? "cargando info..." : data)
  return (
    <div className='border rounded p-4 flex flex-col gap-2'>
      {isLoading ? "Cargando la información": Array.isArray(data) && data.map((permission:any) => (
          <div key={permission.id} className="flex items-center space-x-2">
            <Label htmlFor="airplane-mode">{permission.name}</Label>
            <Switch id="airplane-mode" />
          </div>
        ))}
      
    </div>  
  )
}
