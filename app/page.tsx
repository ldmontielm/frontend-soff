import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/utilities/authOptions"

export default async function Home() {
  const session = await getServerSession(authOptions)

  if(!session){
    redirect("api/auth/signin")
  }

  return redirect('/dashboard')
}
