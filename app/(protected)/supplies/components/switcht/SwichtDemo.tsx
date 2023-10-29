// 'use client'
// import React from 'react'
// import { Label } from "@/components/ui/label"
// import { Switch } from "@/components/ui/switch"
// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { useEffect } from 'react'
// import { Supply } from '../../models/supply.models'
// import { UpdateStatusSupply, urlSupply } from '../../services/supply.services'
// import { buffer } from 'stream/consumers'
// import { Button } from '@/components/ui/button'
// import { useSWRConfig } from 'swr'

// export default function SwitchDemo({id_supply, supply, onUpdateStatus}: {id_supply:string, supply: Supply, onUpdateStatus: (id_supply:string, newStatus:boolean)=>void}) {
//   const [state, setState] = useState(true)
//   const router = useRouter()
//   const { mutate } = useSWRConfig()

//   useEffect(()=>{
//     if(supply){
//         setState(supply.status)
//     }
// }, [supply]);

//   async function onSubmit() {
//     try{
//       const res = await UpdateStatusSupply(id_supply)
//       if (res.status !== undefined){
//         setState(res.status)
//         onUpdateStatus(id_supply, res.status)
//       }
//   }catch(error){
//       console.log(error)
//   }
//   mutate(`${urlSupply}`)
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