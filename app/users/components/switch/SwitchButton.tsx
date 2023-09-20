'use client'
import React from 'react'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { User } from '../../models/users.models'
import { UpdateStatus,urlUser } from '../../services/users.services'
import { buffer } from 'stream/consumers'
import { Button } from '@/components/ui/button'
import { useSWRConfig } from 'swr'

export default function SwitchDemo({id_user, user, onUpdateStatus}: {id_user:string, user: User, onUpdateStatus: (id_user:string, newStatus:boolean)=>void}) {
  const [state, setState] = useState(true)
  const router = useRouter()
  const { mutate } = useSWRConfig()

  useEffect(()=>{
    if(user){
        setState(user.status)
    }
}, [user]);

  async function onSubmit() {
    try{
      const res = await UpdateStatus(id_user)
      if (res.status !== undefined){
        setState(res.status)
        onUpdateStatus(id_user, res.status)
      }
  }catch(error){
      console.log(error)
  }
  mutate(`${urlUser}/get-users`)
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