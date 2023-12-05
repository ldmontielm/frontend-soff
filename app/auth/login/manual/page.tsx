import React from 'react'
import Image from 'next/image'
import { Tooltip } from "@mui/material"
import Link from "next/link"
import { Button } from '@/components/ui/button'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'

export default function Manual() {
    return (
      <div className="mx-auto max-w-7xl p-4">
        <div className='w-full flex justify-between items-center'>
      <div className='mb-5'>
        <p className='scroll-m-20 text-3xl font-extrabold tracking-tight transition-colors first:mt-0'>Manual de usuario</p>
        <p className="leading-7 [&:not(:first-child)]:mt-1 text-gray-500">Este manual le guiará en la navegación del inicio de sesión y recuperación de contraseña.</p>
      </div>
      <div className='flex justify-end mr-5'>
        <Tooltip placement="top" title="Volver a inicio de sesión" arrow>
          <Link href='/auth/login'>  
            <Button variant="outline">
              <ArrowSmallLeftIcon className='w-5 h-5'/>
            </Button>
          </Link>
        </Tooltip>
      </div>
    </div>
        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">1. Inicio de sesión</p>
            <p className="text-justify text-md mr-9 mb-9">Una vez ingrese al aplicativo SOFF, lo primero que verá es la vista para iniciar sesión.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/255773f0-dffb-46da-9aec-669b6d5404be/steps/6bb4d451-439e-4e5d-92b1-4d913eeef4b6/4071fe54-1463-49c7-b0b0-91709fcef5c8.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=14&mark-y=98&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTMlMkNGRjc0NDImdz0xMTY3Jmg9NTg0JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            width={1500}  height={0} alt="Inicio de sesión" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/255773f0-dffb-46da-9aec-669b6d5404be/steps/60e02bed-d462-491a-bd78-98b48cba3d2b/e9ee2c30-b3d4-4083-80cf-5aab99ae0d92.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4916&fp-y=0.4712&fp-z=1.4883&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=268&mark-y=321&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02NjQmaD03OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Ingresar correo" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">2. Ingresar correo</p>
            <p className="text-justify text-md">Para iniciar sesión en el aplicativo, lo primero que debe hacer es ingresar su correo electrónico.</p>
            <p><strong>NOTA: </strong>Tenga en cuanta que, para iniciar sesión debe tener una cuenta anteriormente creada y asignada por el Administrador.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">3. Ingresar contraseña</p>
            <p className="text-justify pr-7 text-md">También debes ingresar la contraseña de tu cuenta.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/255773f0-dffb-46da-9aec-669b6d5404be/steps/51f181fc-14b6-426e-bb94-2f52d5e89cec/e6f68cbe-aca2-49f7-9346-cc90c9262b8b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4916&fp-y=0.6227&fp-z=1.4883&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=268&mark-y=321&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02NjQmaD03OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
            width={1500}  height={0} alt="Ingresar contraseña" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/255773f0-dffb-46da-9aec-669b6d5404be/steps/246fc844-cd87-4287-b93c-fc1d0f098133/223c1fb2-011d-4934-8377-0135c9cc4b5a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4916&fp-y=0.8007&fp-z=1.4883&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=268&mark-y=468&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02NjQmaD03OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Iniciar sesión" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">4. Iniciar sesión</p>
            <p className="text-justify text-md">Luego de haber ingresado las credenciales, debe pulsar sobre el botón <strong>{`"Iniciar sesión"`}</strong> con el botón izquierdo del mouse.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">5. ¿Has olvidado tu contraseña?</p>
            <p className="text-justify pr-7 text-md">Si se le olvido la contraseña, puede dirigirse a la parte que dice, <strong><em>¿Has olvidado tu contraseña?</em></strong> y recuperarla pulsando sobre <strong>{`"contraseña"`}</strong> con el botón izquierdo del mouse, como se muestra en la imagen.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/255773f0-dffb-46da-9aec-669b6d5404be/steps/8824d34e-76d0-4928-ac86-4de7749703ab/046b3508-b16a-4886-9384-9294ad8ed5ff.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5831&fp-y=0.7125&fp-z=2.0453&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=368&mark-y=327&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00NjQmaD02NiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
             width={1500}  height={0} alt="¿Has olvidado tu contraseña?" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/255773f0-dffb-46da-9aec-669b6d5404be/steps/1a19eddb-b0cb-4d23-b636-afcd57c7346e/d5819a6e-7b64-4767-bf1c-1ff8ae4c49a4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5005&fp-y=0.5239&fp-z=1.4883&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=268&mark-y=321&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02NjQmaD03OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Recuperar contraseña" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">6. Recuperar contraseña</p>
            <p className="text-justify text-md"> Al pulsar sobre <strong>{`"contraseña"`}</strong> se dirigirá a esta vista, donde debe ingresar su correo electrónico, para enviarle un código de verificación y pueda continuar con la recuperación.</p>
          </div>
        </div>


        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">7. Enviar Código</p>
            <p className="text-justify pr-7 text-md">Una vez haya ingresado el correo en el cual recibirá el código, debe pulsar sobre el botón <strong>{`"Enviar código"`}</strong>.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/255773f0-dffb-46da-9aec-669b6d5404be/steps/0a93473f-26d8-46a8-9d8d-633a042749c3/627d98ce-1d23-44f2-be4c-1828361d8880.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5005&fp-y=0.6227&fp-z=1.4883&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=268&mark-y=321&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02NjQmaD03OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Enviar Código" />     
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">         
            <Image src="https://images.tango.us/workflows/255773f0-dffb-46da-9aec-669b6d5404be/steps/a75714a1-beb3-4d41-9c4f-50900fa82c93/2716d11d-42fd-4401-b14d-c4af161cd5cb.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.7125&fp-z=2.0371&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=367&mark-y=328&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00NjcmaD02NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Regresar a Inicio de sesión" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">8. Regresar a Inicio de sesión</p>
            <p className="text-justify text-md">Si ya no desea recuperar la contraseña, puede regresar al inicio de sesión dirigiendose a, <strong><em>¡Ya me acuerdo!</em></strong> pulsando sobre <strong>{`"Iniciar sesión"`}</strong> con el botón izquierdo del mouse.</p>
          </div>    
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">9. Verificación del código</p>
            <p className="text-justify pr-7 text-md">Continuando con la recuperación de contraseña, luego de pulsar sobre el botón <strong>{`"Enviar código"`}</strong>, automáticamente se enviará un código de seguridad a la cuenta que ingresó anteriormente, el cuál debe ingresar en esta parte, como se muestra en la imagen.</p>
            <p><strong>NOTA: </strong>Ingrese el código igual a como le llegó al correo.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/255773f0-dffb-46da-9aec-669b6d5404be/steps/1e4bd09d-c342-441a-9c9d-d64b896e3099/99d27350-f6ae-461a-b10d-62d97715453c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5005&fp-y=0.4185&fp-z=1.4883&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=268&mark-y=321&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02NjQmaD03OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Verificación del código" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7"> 
            <Image src="https://images.tango.us/workflows/255773f0-dffb-46da-9aec-669b6d5404be/steps/49a77f02-ff02-4714-a71a-305c74f16a1b/4ac5240d-762a-4e8f-9418-54a867d270a7.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5005&fp-y=0.5173&fp-z=1.4883&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=268&mark-y=321&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02NjQmaD03OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Confirmar Código" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">10. Confirmar Código</p>
            <p className="text-justify text-md">Luego de ingresar el código, debe pulsar sobre el botón <strong>{`"Confirmar código"`}</strong> con el botón izquierdo del mouse.</p>
           </div>
        </div> 

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">11. Reenviar código</p>
            <p className="text-justify pr-7 text-md">Si por alguna razón no recibe el código de verificación, puede reenviarlo dirigiendose a, <strong><em>¡No me ha llegado un código!</em></strong> pulsando sobre <strong>{`"Volver a intentar"`}</strong> con el botón izquierdo del mouse.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/255773f0-dffb-46da-9aec-669b6d5404be/steps/e701e1e2-ccbd-4dff-bcc6-80a124fb5e46/ac27f926-7854-4665-93b5-e92e90492a5a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.6071&fp-z=1.6730&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=301&mark-y=333&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01OTgmaD01NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Reenviar código" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/255773f0-dffb-46da-9aec-669b6d5404be/steps/ad1166ed-790d-46d5-b691-7cfa3bcddcc1/1a022005-36b0-4f55-be42-e7db9a897993.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4934&fp-y=0.5463&fp-z=2.0000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=149&mark-y=418&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04OTMmaD0xMDQmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            width={1500}  height={0} alt="Contraseña nueva" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">12. Contraseña nueva</p>
            <p className="text-justify text-md">Cuando se confirme el código, podrá ingresar la contraseña nueva, como se muestra en la imagen y también debe confirmar la contraseña.</p>           
          </div>
        </div>
 
        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">13. Mostrar contraseñas</p>
            <p className="text-justify pr-7 text-md">Si no está seguro de la contraseña que ha ingresado, puede pulsar sobre el check <strong>(✓) {`"Mostrar contraseñas"`}</strong>, para que pueda tener visibilidad de lo que está escribiendo.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/255773f0-dffb-46da-9aec-669b6d5404be/steps/837f29f2-f775-4872-9afc-5363b6dce32a/3d770c86-45b8-4483-857a-9822f6268596.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3175&fp-y=0.7051&fp-z=3.0889&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=556&mark-y=316&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04OCZoPTg4JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            width={1500}  height={0} alt="Mostrar contraseñas" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
          <Image src="https://images.tango.us/workflows/255773f0-dffb-46da-9aec-669b6d5404be/steps/ea738232-2ecf-401a-ac06-aef2a1e74e81/c4f46ee5-0162-41c4-b0f4-11ed74646546.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4916&fp-y=0.7875&fp-z=1.4883&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=268&mark-y=454&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02NjQmaD03OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Cambiar contraseña" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">14. Cambiar contraseña</p>
            <p className="text-justify text-md">Cuando esté seguro de la contraseña, pulse en el botón <strong>{`"Cambiar contraseña"`}</strong>, el cual automáticamente guardará su nueva contraseña. Luego de esto, volverá al login para que pueda iniciar sesión.</p>
          </div>
        </div>
      </div>
    )
  }