'use client'

import axios from 'axios'
import React, {useEffect} from 'react'
import { RoutesApi } from '@/models/routes.models'
import { getInLocalStorage, LocalStorageKeys, saveInLocalStorage } from '@/utilities/local-storage-manage'


async function retrieveAccessToken(refresh_token: string){
    return await axios.post(`${RoutesApi.AUTH}/refresh-token`, undefined, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${refresh_token}`
        }
    }).then(
        (response) => {
            return response.data
        }
    ).catch((error) => {
        console.log("error:", error.message)
    })
}


interface Props {
    children: React.ReactNode
}

export default function RefreshComponent({children}:Props) {
    
    
    useEffect(() => {
        const minutes =  1000 * 60 * 5
        setInterval(async ()=> {
            const refresh_token = getInLocalStorage(LocalStorageKeys.REFRESH_TOKEN) 
            if(refresh_token){
                console.log("Token anterior: " + getInLocalStorage(LocalStorageKeys.TOKEN) )
                const res = await retrieveAccessToken(JSON.parse(refresh_token!))
                saveInLocalStorage(LocalStorageKeys.TOKEN, JSON.stringify(res.access_token))
                console.log("Token nuevo: " + getInLocalStorage(LocalStorageKeys.TOKEN) )
                console.log("Cargamos un nuevo token")
            }else{
                console.log("Todavía no hay session")
            }
        }, 5000)
    }, [])

  return (
    <div>
        {children}
    </div>
  )
}
