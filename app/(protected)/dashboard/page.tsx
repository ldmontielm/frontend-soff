import { HeaderModule } from "@/components/page-components"
import { ContentTargets, BarSales, PieSales } from "./components"
import { getServerSession } from "next-auth"
import { authOptions } from "@/utilities/authOptions"
import { redirect } from "next/navigation"


export default function page() {
  const session = getServerSession(authOptions)

  if(!session){
    redirect('/auth/login')
  }

  return (
        <main className="w-full mx-auto max-w-7xl p-4">
          <HeaderModule />
          <ContentTargets />
          <div className="my-10 gap-4 grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-6 bg-neutral-100 rounded p-4">
              <PieSales />
            </div>
            <div className="col-span-6">
              <PieSales />
            </div>
          </div>
        </main>
    )
}
