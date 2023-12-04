import { HeaderModule, TableComponent } from "./components"
import { getServerSession } from "next-auth"
import { authOptions } from "@/utilities/authOptions"
import { redirect } from "next/navigation"

export default async function Page(){
  const session = await getServerSession(authOptions)

  if(!session){
    redirect('/api/auth/signin')
  }

  if(!session.user?.permissions.includes("ventas")){
    redirect('/dashboard')
  }
  return (
    <main className="mx-auto lg:max-w-7xl p-4">
      <HeaderModule />
      <TableComponent />
    </main>
  )
}