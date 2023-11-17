import { HeaderModule, TableComponent } from "./components"
import { getServerSession } from "next-auth"
import { authOptions } from "@/utilities/authOptions"
import { redirect } from "next/navigation"

export default async function Page(){
    const session = await getServerSession(authOptions)

    if(!session){
      redirect('/auth/login')
    }
  
    if(!session.user?.permissions.includes("insumos")){
      redirect('/dashboard')
    }
    return (
        <div className="mx-auto max-w-7xl p-4">
            <HeaderModule/>
            <TableComponent/>
        </div>
    )
}