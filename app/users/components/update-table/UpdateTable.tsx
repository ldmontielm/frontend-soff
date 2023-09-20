// 'use client'
// import {
//   Dialog,
//   DialogFooter,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// import toast from "react-hot-toast"
// import React, {useState} from "react"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Button } from "@/components/ui/button";
// import * as z from 'zod'
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Value } from "@radix-ui/react-select"
// import useSWR, {useSWRConfig} from 'swr'
// import { getRole, updateUser } from "@/app/roles/services/roles.services"
// import { urlRoles } from "@/app/roles/services/roles.services"
// import {createUser, urlUser, getUsers, getUser, UpdateUser } from "../../services/users.services"
// import { useRouter } from "next/navigation"
// import { Pencil } from "lucide-react"
// import { User } from "../../models/users.models"



// const formSchema = z.object({
//   id:z.string(),
//   name: z.string().min(2, { message: 'El nombre debe de tener mas de dos caracteres' }),
//   document_type: z.string().min(2, { message: 'El tipo de documento debe de tener mas de dos caracteres' }),
//   document: z.string().min(2, { message: 'El documento debe de tener mas de dos caracteres' }),
//   phone: z.string().min(2, { message: 'El numero de telefono debe de tener mas de dos caracteres' }),
//   email: z.string().email({ message: 'El email no es valido' }),
//   password: z.string(),
//   // password: z.string().regex(/^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[@$!%?&#])[A-Za-z0-9@$!%?&#]{8,}$/g, {message: 'Contraseña Invalida'}),
//   id_role : z.string().uuid()
// })

// // interface Props{
// //   user: User
// //   id_user: string
// // }


// export default function UpdateTable({id_user}:{id_user:string}) {
//   const [open, setOpen]= useState(false)
//   const router = useRouter()

//   // const {data:user}= useSWR(`${urlUser}/${id_user}/get-user`)
//   const { data: user, error: fetchError } = useSWR(`${urlUser}/${id_user}/get-user`);
   
//   if (fetchError) {
//     console.log(fetchError)
//   }else{
//     console.log(id_user)
//     // console.log(user.name)

//   }
  



// const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name:"",
//       document_type:"",
//       document:"",
//       phone:"",
//       email:"",
//       password:"",
//       id_role:""
//     }
//   })

//   function onSubmitOne(){
//     console.log(id_user)
//   }

//   const { mutate } = useSWRConfig()


// function onSubmit(id_user:string, values: z.infer<typeof formSchema>){
//   toast.promise(UpdateUser(id_user,values),{
//     loading: "La informacion esta cargando",
//     success: "Usuario actualizado correctamente",
//     error: "El usuario no se pudo actualizar"
// })
// const {data:user}= useSWR(`${urlUser}/${id_user}`,updateUser)


// router.refresh()
//         setOpen(false)
//         mutate(`${urlUser}/get-users`)
//       }
//       const {data: role, isLoading, isValidating, error} = useSWR(`${urlRoles}/get-role`, getRole)

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>  
//       <Button className="ml-2" variant='outline' size='icon'><Pencil className="w-4 h-4"/></Button>

//       </DialogTrigger>

//           <DialogContent  className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Editar usuario</DialogTitle>
//       {
//         Array.isArray(user) && user.map((user)=>(
//           <DialogDescription key={user.id}>
//             Puedes cambiar la informacion del usuario <span className="capitalize font-semibold text-gray-600">{user.name}</span>
//           </DialogDescription>
//         ))
// }
//         </DialogHeader>
//         <Form {...form}>
//           {/* <form onSubmit={form.handleSubmit(onSubmitOne)}>  */}
//           <form> 
//           {/* <form onSubmit={(e) => form.handleSubmit(() => onSubmit(user.id))}> */}
//             <FormField 
//             // key={user.id}
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Nombre</FormLabel>
//                   <FormControl>
//                     <Input id="name" type="string" placeholder="" {...field} className="col-span-3" />
//                   </FormControl>
//                   <FormMessage />
//               </FormItem>
//               )}
//               />
//             <FormField 
//               control={form.control}
//               name="document_type"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Tipo de Documento</FormLabel>
//                   <FormControl>
//                     <Input id="document_type" type="string" placeholder="" {...field} className="col-span-3" />
//                   </FormControl>
//                   <FormMessage />
//               </FormItem>
//               )}
//               />
//             <FormField 
//               control={form.control}
//               name="document"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Numero de documento</FormLabel>
//                   <FormControl>
//                     <Input id="document" type="string" placeholder="" {...field} className="col-span-3" />
//                   </FormControl>
//                   <FormMessage />
//               </FormItem>
//               )}
//               />
            
//             <FormField 
//               control={form.control}
//               name="phone"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Numero de telefono</FormLabel>
//                   <FormControl>
//                     <Input id="phone" type="string" placeholder="" {...field} className="col-span-3" />
//                   </FormControl>
//                   <FormMessage />
//               </FormItem>
//               )}
//               />

//             <FormField 
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Correo</FormLabel>
//                   <FormControl>
//                     <Input id="email" type="string" placeholder="" {...field} className="col-span-3" />
//                   </FormControl>
//                   <FormMessage />
//               </FormItem>
//               )}
//               />
           
//             <FormField 
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Contraseña</FormLabel>
//                   <FormControl>
//                     <Input id="passwor" type="string" placeholder="" {...field} className="col-span-3" />
//                   </FormControl>
//                   <FormMessage />
//               </FormItem>
//               )}
//               />
           
            
//          <FormField
//           control={form.control}
//           name="id_role"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Rol</FormLabel>
//               <Select onValueChange={field.onChange}>
//                 <FormControl>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Seleciones un rol" />
//                   </SelectTrigger>
//                 </FormControl>
//                 <SelectContent placeholder="Seleciones un rol">
//                   {
//                     Array.isArray(role) && role.map((roles) => (
//                       <SelectItem key={roles.id} value={roles.id}>{roles.name}</SelectItem>
//                     ))
//                   }
//                   </SelectContent>
//               </Select>
//               <FormMessage />
//             </FormItem>
//           )}
//           />
            
//             <DialogFooter>
//               <Button className="mt-4 w-full" type="submit" onClick={() => onSubmitOne()}>Actualizar</Button>

//             </DialogFooter>
//           </form>
//         </Form>
//       </DialogContent>
//     </Dialog>
//   )
// }
'use client'
import {
  Dialog,
  DialogFooter,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import toast from "react-hot-toast"
import React, {useState} from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Value } from "@radix-ui/react-select"
import useSWR, {useSWRConfig} from 'swr'
import { getRole } from "@/app/roles/services/roles.services"
import { urlRoles } from "@/app/roles/services/roles.services"
import {createUser, urlUser, getUsers, getUser, UpdateUser } from "../../services/users.services"
import { useRouter } from "next/navigation"
import { Pencil } from "lucide-react"
import { UserCre } from "../../models/users.models"



const formSchema = z.object({
  id:z.string(),
  name: z.string().min(2, { message: 'El nombre debe de tener mas de dos caracteres' }),
  document_type: z.string().min(2, { message: 'El tipo de documento debe de tener mas de dos caracteres' }),
  document: z.string().min(2, { message: 'El documento debe de tener mas de dos caracteres' }),
  phone: z.string().min(2, { message: 'El numero de telefono debe de tener mas de dos caracteres' }),
  email: z.string().email({ message: 'El email no es valido' }),
  password: z.string(),
  // password: z.string().regex(/^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[@$!%?&#])[A-Za-z0-9@$!%?&#]{8,}$/g, {message: 'Contraseña Invalida'}),
  id_role : z.string().uuid()
})

interface Props{
  user: UserCre
  id_user: string
}


export default function UpdateTable({user, id_user}: Props) {
  console.log(id_user)
  const [open, setOpen]= useState(false)
  const router = useRouter()
  // const {data:userDos}= useSWR(`${urlUser}/${id_user}`,getUser)


  console.log(id_user)


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id:user.id,
      name: user.name,
      document_type: user.document_type,
      document: user.document,
      phone: user.phone,
      email: user.email,
      password: user.password,
      id_role:user.role
    }
  })
  const { mutate } = useSWRConfig()

function onSubmit(values: z.infer<typeof formSchema>){
  values.id = user.id
  toast.promise(UpdateUser(id_user,values),{
    loading: "La informacion esta cargando",
    success: "Usuario actualizado correctamente",
    error: "El usuario no se pudo actualizar"
})
router.refresh()
        setOpen(false)
        mutate(`${urlUser}/get-users`)
      }
      const {data: role, isLoading, isValidating, error} = useSWR(`${urlRoles}/get-role`, getRole)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>  
      <Button className="ml-2" variant='outline' size='icon'><Pencil className="w-4 h-4"/></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex justify-center pb-2">Editar usuario</DialogTitle>
          <DialogDescription>
          Ya puedes actualizar la información del usuario, <span className="capitalize font-semibold text-gray-600 pr-2 pl-2" >{user.name}</span>
           recuerda que todos los campos a continuación son requeridos.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}> 
            <FormField 
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input id="name" type="string" placeholder="" {...field} className="col-span-3" />
                  </FormControl>
                  <FormMessage />
              </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="document_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de Documento</FormLabel>
                  <FormControl>
                    <Input id="document_type" type="string" placeholder="" {...field} className="col-span-3" />
                  </FormControl>
                  <FormMessage />
              </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="document"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numero de documento</FormLabel>
                  <FormControl>
                    <Input id="document" type="string" placeholder="" {...field} className="col-span-3" />
                  </FormControl>
                  <FormMessage />
              </FormItem>
              )}
            />
            
            <FormField 
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numero de telefono</FormLabel>
                  <FormControl>
                    <Input id="phone" type="string" placeholder="" {...field} className="col-span-3" />
                  </FormControl>
                  <FormMessage />
              </FormItem>
              )}
            />

            <FormField 
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo</FormLabel>
                  <FormControl>
                    <Input id="email" type="string" placeholder="" {...field} className="col-span-3" />
                  </FormControl>
                  <FormMessage />
              </FormItem>
              )}
            />
           
            <FormField 
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input id="passwor" type="string" placeholder="" {...field} className="col-span-3" />
                  </FormControl>
                  <FormMessage />
              </FormItem>
              )}
            />
           
            
         <FormField
          control={form.control}
          name="id_role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rol</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleciones un rol" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent placeholder="Seleciones un rol">
                  {
                  Array.isArray(role) && role.map((roles) => (
                    <SelectItem key={roles.id} value={roles.id}>{roles.name}</SelectItem>
                    ))
                  }
                  </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
            
            <DialogFooter>
              <Button className="mt-4 w-full" type="submit">Actualizar</Button>

            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}