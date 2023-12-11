import { FormLogin } from "./components"
import { getServerSession } from "next-auth"
import { authOptions } from "@/utilities/authOptions"
import { redirect } from "next/navigation"
import Link from "next/link"

interface Params {
    error: string
}

export default async function page({error}: Params) {
  const session = await getServerSession(authOptions)
  
  if(session){
    redirect("/")
  }

  return (
    <>
    <div className="flex items-center justify-center py-10">
        <div className="w-full md:w-[400px] p-4">
            <div className="space-y-3">
                <h2 className="text-2xl font-bold text-neutral-900 text-center">¡Hola, Bienvenido de Nuevo! 👋</h2>
                <p className="text-sm text-neutral-500 text-center mb-5">Es un placer tenerte de nuevo por acá, te deseo suerte con las ventas de hoy</p>
            </div>
            {JSON.stringify(error)}
            <FormLogin />
            <div className="my-2">
                <Link href='/api/auth/signin/manual' className="text-sm">Visitar <span className="font-bold">manual de usuario</span> de autenticación.</Link>
            </div>
        </div>
    </div>
 </>
  )
}
