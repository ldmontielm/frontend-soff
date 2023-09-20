'use client'
import React from 'react'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Role } from '../../models/roles.models'
import { UpdateStatusRole, urlRoles } from '../../services/roles.services'
import { buffer } from 'stream/consumers'
import { Button } from '@/components/ui/button'
import { useSWRConfig } from 'swr'

export default function SwitchDemo({id_role, role, onUpdateStatus}: {id_role:string, role: Role, onUpdateStatus: (id_role:string, newStatus:boolean)=>void}) {
  const [state, setState] = useState(true)
  const router = useRouter()
  const { mutate } = useSWRConfig()
  console.log(id_role)

  useEffect(()=>{
    if(role){
        setState(role.status)
    }
}, [role]);

  async function onSubmit() {
    try{
      const res = await UpdateStatusRole(id_role)
      if (res.status !== undefined){
        setState(res.status)
        onUpdateStatus(id_role, res.status)
      }
  }catch(error){
      console.log(error)
  }
  mutate(`${urlRoles}/get-role`)
}

  return (
    <Button variant='ghost'onClick={onSubmit}>
      <Switch id="airplane-mode" className='mr-2'
      checked={state}
      onCheckedChange={(newStatus)=>{
          setState(newStatus);
      }}
      />
      <span>Cambiar estado</span>
    </Button>
    // <div className="flex items-center space-x-2">
    // </div>
  )
}
