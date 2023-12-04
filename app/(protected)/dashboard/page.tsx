import { HeaderModule } from "@/components/page-components"
import { ContentTargets, BarSales, PieSales } from "./components"
import { getServerSession } from "next-auth"
import { authOptions } from "@/utilities/authOptions"
import { redirect } from "next/navigation"


export default async function page() {
  const session = await getServerSession(authOptions)

  if(!session){
    redirect('/auth/login')
  }

  return (
        <main className="w-full mx-auto max-w-7xl p-4">
          <HeaderModule />
          <ContentTargets />
          <div className="my-10 gap-4 grid grid-cols-1">
              <PieSales />
          </div>
        </main>
    )
}
