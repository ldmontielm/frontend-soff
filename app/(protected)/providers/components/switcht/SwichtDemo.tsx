// 'use client'
// import React from 'react'
// import { Label } from "@/components/ui/label"
// import { Switch } from "@/components/ui/switch"
// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { useEffect } from 'react'
// // import { User } from '../../models/users.models'
// import { Provider } from '../../models/provider.models'
// // import { UpdateStatus,urlUser } from '../../services/users.services'
// // import { UpdateStatusProvider, urlProvider } from '../../services/provider.services'
// import { RoutesApi } from '@/models/routes.models'
// import { buffer } from 'stream/consumers'
// import { Button } from '@/components/ui/button'
// import { useSWRConfig } from 'swr'

// export default function SwitchDemo({id_provider, provider, onUpdateStatus}: {id_provider:string, provider: Provider, onUpdateStatus: (id_provider:string, newStatus:boolean)=>void}) {
//   const [state, setState] = useState(true)
//   const router = useRouter()
//   const { mutate } = useSWRConfig()

//   useEffect(()=>{
//     if(provider){
//         setState(provider.status)
//     }
// }, [provider]);

//   async function onSubmit() {
//     try{
//       const res = await UpdateStatusProvider(id_provider)
//       if (res.status !== undefined){
//         setState(res.status)
//         onUpdateStatus(id_provider, res.status)
//       }
//   }catch(error){
//       console.log(error)
//   }
//   mutate(`${RoutesApi.PROVIDERS}`)
// }

//   return (
//     <Button variant='ghost'onClick={onSubmit}>
//       <Switch id="airplane-mode" className='mr-2'
//       checked={state}
//       onCheckedChange={(newStatus)=>{
//           setState(newStatus);
//       }}
//       />
//       <span>Cambiar estado</span>
//     </Button>
//     // <div className="flex items-center space-x-2">
//     // </div>
//   )
// }