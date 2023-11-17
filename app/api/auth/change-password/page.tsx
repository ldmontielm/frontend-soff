
import { FormChange } from "./components"



export default function page() {

    


    return (
        <div className="flex items-center justify-center py-10">
            <div className="w-full md:w-[400px] p-4">
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-neutral-900 text-center">¡ya estamos aquí! 💎</h2>
                    <p className="text-sm text-neutral-500 text-center mb-5">Ingresa la nueva contraseña para tu cuenta y no se te olvide verificarla.</p>
                </div>
                <FormChange />
            </div>
        </div>
    )
}
