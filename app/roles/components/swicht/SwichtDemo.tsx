'use client'
import React from 'react'
import { Switch } from "@/components/ui/switch"
import { useState } from 'react'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { RoutesApi } from '@/models/routes.models'
import { fetcherPut } from '@/context/swr-context-provider/SwrContextProvider'
import { Role } from '../../models/roles.models'
import { mutate } from 'swr'

const UpdateStateRoleFecht= async(url:string, args:Role)=>{
  return await fetcherPut(url, args)
}

interface Props{
  id_role:string
  role: Role
}

export default function SwitchDemo({id_role, role}:Props) {
  const [state, setState] = useState(true)


  useEffect(()=>{
    if(role){
        setState(role.status)
    }
}, [role]);

  async function onSubmit() {
    try{
      const res = await UpdateStateRoleFecht(`${RoutesApi.ROLES}/${id_role}/status-update-role`,role)
      if (res.status !== undefined){
        setState(res.status === 1)
    }
  }catch(error){
      console.log(error)
  }
  mutate(`${RoutesApi.ROLES}/get-role`)
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
  )
}
