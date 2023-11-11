'use client'
import React from 'react'
import { Switch } from "@/components/ui/switch"
import { useState } from 'react'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { RoutesApi } from '@/models/routes.models'
import { User } from '../../models/users.models'
import { fetcherPut } from '@/context/swr-context-provider/SwrContextProvider'
import { mutate } from 'swr'

interface Props{
  id_user:string
  user:User
}

const UpdateStateUserFecht = async(url :string, args: User)=>{
  return await fetcherPut(url, args)
}


export default function SwitchDemo({id_user, user}:Props) {
  const [state, setState] = useState(true)

  useEffect(()=>{
    if(user){
        setState(user.status)
    }
}, [user]);

  async function onSubmit() {
    try{
      const res = await UpdateStateUserFecht(`${RoutesApi.USERS}/${id_user}/status-update`,user)
      if (res.status !== undefined){
        setState(res.status === 1)
      }
  }catch(error){
      console.log(error)
  }
  mutate(`${RoutesApi.USERS}/get-users`)
}

  return (
    <Button 
    variant='ghost'
    onClick={onSubmit}>
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
