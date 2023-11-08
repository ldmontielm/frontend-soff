import { FormREcovery } from "./components"
export default function page() {


    return (
        <div className="flex items-center justify-center py-10">
            <div className="w-full md:w-[400px] p-4">
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-neutral-900 text-center">¡Hey! Vamos a recuperar tu contraseña 🔐</h2>
                    <p className="text-sm text-neutral-500 text-center mb-5">Ingresa tu correo electrónico y te ayudaremos a recuperar tu contraseña en un abrir y cerrar de ojos.</p>
                </div>
                <FormREcovery />
            </div>
        </div>
    )
}
