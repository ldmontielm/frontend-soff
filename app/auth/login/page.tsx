import { FormLogin } from "./components"
import { Tooltip } from "@mui/material"
import Link from "next/link"
import { Button } from '@/components/ui/button'
import { BookOpenIcon} from "@heroicons/react/24/outline"
export default function page() {

  return (
    <>
        <div className="flex items-center justify-center py-10">
            <div className="w-full md:w-[400px] p-4">
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-neutral-900 text-center">¡Hola, Bienvenido de Nuevo! 👋</h2>
                    <p className="text-sm text-neutral-500 text-center mb-5">Es un placer tenerte de nuevo por acá, te deseo suerte con las ventas de hoy</p>
                </div>
                <FormLogin />
            </div>
        </div>
        <div className="flex items-end justify-end mt-0">
            <Tooltip placement="top" title="Ver manual de usuario." arrow>
                <Link href='login/manual'>
                    <Button variant='outline' className="mr-10">
                        <BookOpenIcon className=" h-4 w-4"/>
                    </Button>
                </Link>
            </Tooltip>
        </div>
    </>
  )
}
