import React from 'react'
import Image from 'next/image'

export default function Manual() {
    return (
      <div className="mx-auto max-w-7xl p-4">
        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">1. Ingreso a insumos</p>
            <p className="text-justify text-md mr-9 mb-9">Primero debe Deslizar el puntero del mouse sobre el menú de opciones, luego debe pulsar con el botón izquierdo del mouse sobre el recuadro del menú ubicado en la parte superior izquierda de la pantalla como se muestra en la imagen.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/6a49475a-d0bd-437d-a4a6-c6fab7d4333f/b3dc461c-ac3f-4e8b-aaab-51ca669ead8c.png?mark-x=15&mark-y=26&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01MCZoPTUwJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" 
            width={1500}  height={0} alt="Ingreso a insumos" />
          </div>
        </div>
        
        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/ca01925a-6714-4296-88e9-beb59a69c4c2/10a7d48d-995d-4dfa-aa44-ba272ba54869.png?mark-x=23&mark-y=275&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0zODYmaD02MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
            width={1500}  height={0} alt="Ingreso a productos" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">2. Ingreso a insumos</p>
            <p className="text-justify text-md">En el momento que se despliegue el menú con todos los módulos a los que tiene acceso, debe elegir el modulo al que desea ir, en este caso <strong>{`"Insumos"`}</strong>.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">3. Portada de insumos</p>
            <p className="text-justify pr-7 text-md">Al entrar al modulo de <strong>{`"Insumos"`}</strong> te saldrá la pagina principal de Insumos una lista con todos los Insumos registrados, el <strong>{`"Buscador"`}</strong>, botón de <strong>{`"Columnas"`}</strong>, botón de <strong>{`"Inactivos"`}</strong>, botón de <strong>{`"Registrar insumo"`}</strong> y las <strong>{`"Acciones"`}</strong>.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/a37bd581-10c0-46ca-9f25-dd989fb92ed6/ca5b7c5e-989a-4e9b-8b6e-343cbd965506.png?mark-x=5&mark-y=97&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNDQ5Jmg9ODM2JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" 
            width={1500}  height={0} alt="Portada de productos" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/2b14ec1c-d3a2-4279-9651-ceb6ba06034a/1b237b93-bfc5-4a29-ad94-41de223af2f6.png?mark-x=26&mark-y=250&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00NDEmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
              width={1500}  height={0} alt="Buscador de productos" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">4. Buscador del insumo</p>
            <p className="text-justify text-md">Sobre este apartado puedes filtrar por el nombre del insumo deslizando el puntero del mouse sobre la barra de búsqueda como se muestra en la imagen. pulsa con el lado izquierdo del mouse y luego podrás ingresar con el teclado el nombre del insumo que deseas buscar.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">5. Botón Columnas</p>
            <p className="text-justify pr-7 text-md">En el botón de <strong>{`"Columnas"`}</strong> aquí podrás ocultar información que te parezca irrelevante de tabla de insumos. desliza el puntero del mouse sobre el botón <strong>{`"Columnas"`}</strong> y pulsas con el lado izquierdo del mouse.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/360e88a6-3e8a-4457-988a-358e82bcf50e/3826bbf8-cc47-4698-b587-b58cb1d3d395.png?mark-x=938&mark-y=250&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNTImaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
             width={1500}  height={0} alt="Botón Columnas" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/b70a2f60-0d0c-46a0-9a95-c9f1f9bc6653/1ad01808-c205-4157-a0bf-f4a577075744.png?mark-x=909&mark-y=537&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01NiZoPTU2JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            width={1500}  height={0} alt="Lista de columnas" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">6. Lista de columnas</p>
            <p className="text-justify text-md">Al pulsar sobre el botón <strong>{`"Columnas"`}</strong> se te desplegara unas opciones con los nombres de las columnas, En esta lista desplegable deberás quitar la marca de verificación (✓) al pulsar una vez sobre ella, para las columnas de no deseas visualizar, y las que si quieres que se muestren en la tabla deberán tener la marca de verificación.</p>
          </div>
        </div>


        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">7. Ordenador de columnas</p>
            <p className="text-justify pr-7 text-md">Al lado de las columnas Nombre, Precio, Cantidad, Unidad de medida y Total hay un icono de orden, y al pulsarlo el ordenará la columna de manera ascendente y descendente pulsando con el botón izquierdo del mouse sobre él.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/2e919685-61b4-49d9-b92f-d1ff9cd4f017/1af8f981-7474-4e25-94a4-3d90008ab0eb.png?mark-x=906&mark-y=329&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMTAmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
            width={1500}  height={0} alt="Registrar producto" />     
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">         
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/35c892c7-f5ab-4a5e-ae12-397f35c428dd/1ef39281-988b-45fc-a22e-ee4abb8143ba.png?mark-x=1252&mark-y=381&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01MCZoPTUwJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" 
            width={1500}  height={0} alt="Detalle del producto" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">8. Acciones para el insumo</p>
            <p className="text-justify text-md">En cada registro de Insumo habrá un icono de <strong>{`"Acciones"`}</strong>, y al pulsarlo se desplegará las acciones permitidas para cada Insumo.</p>
          </div>    
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">9. Lista de Acciones</p>
            <p className="text-justify pr-7 text-md">Al pulsar el icono con el botón izquierdo del mouse aparecerá las acciones, la primera opción <strong>{`"Editar"`}</strong>, te mostrará un formulario, debes pulsar con el lado izquierdo del mouse el botón de <strong>{`"Editar"`}</strong> que esta seleccionado en el recuadro rojo</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/d01dd81a-2da9-4e58-968c-f129856d803a/5af9b400-1d40-4af5-8be3-2f0266882696.png?mark-x=1216&mark-y=528&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMTcmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Seleccionar Insumo" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">          
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/8e5bdacf-bde5-468a-aa1d-c7ef00276c98/baf8de0e-95ae-42f6-a6a6-153aa8b1f652.png?mark-x=488&mark-y=221&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00ODcmaD00OTcmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            width={1500}  height={0} alt="Seleccionar insumo" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">10. Editar información de un insumo</p>
            <p className="text-justify text-md">Si luego de registrar un Insumo al modulo, quieres cambiar el NOMBRE, PRECIO, CANTIDAD EN STOCK o la UNIDAD DE MEDIDA, podrás ingresar la nueva información del <strong>{`"Insumo"`}</strong> como el recuadro rojo lo indica.</p>
           </div>
        </div> 

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">11. Botón Actualizar cambios</p>
            <p className="text-justify pr-7 text-md">Para guardar los nuevos cambios asignados al insumo debes pulsar con el botón izquierdo del mouse el botón <strong>{`"Actualizar cambios"`}</strong>.</p>
          </div>
          <div className="w-full">
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/ab5817e0-82c2-40d0-9222-6775d8732bfe/3a9056f7-d39c-469a-a596-2adeee5c0303.png?mark-x=757&mark-y=639&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xOTEmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Seleccionar Insumo" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/ccb6ab69-b047-4fec-990c-1c7446e7ca1e/55e262a7-36f8-48f3-9f4d-c6154b43ac3b.png?mark-x=1216&mark-y=686&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMzMmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Cantidad del insumo" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">12. Accion eliminar</p>
            <p className="text-justify text-md">En acciones del Insumo también habrá un icono de <strong>{`"Eliminar"`}</strong>. aquí podrás eliminar permanentemente los datos del insumo.</p>           
          </div>
        </div>
 
        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">13. Eliminar insumo</p>
            <p className="text-justify pr-7 text-md">Luego de pulsar el botón de <strong>{`"Eliminar"`}</strong>, se abrirá un mensaje de confirmación para validar que si estés seguro de eliminar el insumo, podrás eliminarla al pulsar con el botón izquierdo del mouse el botón rojo <strong>{`"Eliminar"`}</strong>. por otro lado pulse sobre el botón <strong>{`"Cancelar"`}</strong> para deshacer dicha acción.</p>
          </div>
          <div className="w-full">  
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/f26a8716-d276-4656-9273-65f832ce8f8d/27ea65fa-0fff-4d34-a97d-1f5ae2eeab2e.png?mark-x=891&mark-y=495&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMDYmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Botón Agregar" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/2b4dc160-8a31-458f-9334-970a4e06c1e0/61f5784b-ce82-49ae-aa7a-bbfb07b1f1d6.png?mark-x=1153&mark-y=386&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMDAmaD00MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Detalles" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">14. Botón activos</p>
            <p className="text-justify text-md">En esta parte, puedes cambiar el estado de un Insumo, dependiendo del estado actual este cambia, por ejemplo, si está activo, al pulsar sobre el con el botón izquierdo del mouse, cambia su color a rojo y cambia el texto a Inactivo, y viceversa.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">15. Botón Inactivos</p>
            <p className="text-justify pr-7 text-md">Al pulsar el botón de <strong>{`"Inactivos/Activos"`}</strong>, puede ver los insumos activos o inactivos según sea el caso.</p>
          </div>
          <div className="w-full">             
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/7ecad3c9-84a5-45ac-ad85-d9be658e3945/e14d8cc5-1d99-4261-8043-aafe59e3a475.png?mark-x=1095&mark-y=250&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMTcmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Editar la cantidad del insumo" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/0ee0d1c2-41db-4fbd-b707-425e116d850e/ede2e862-1815-4ce8-8705-b138e8fe9f69.png?mark-x=1218&mark-y=426&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNTMmaD0xMDEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            width={1500}  height={0} alt="Editar la cantidad del insumo" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">16. Inactivos</p>
            <p className="text-justify text-md">Al pulsar el botón <strong>{`"Inactivos"`}</strong>, va a ver la lista de los Insumos con el estado Inactivo, estos no tendrán ninguna acción disponible, como se ve en la imagen. Si desea ver sus acciones debe cambiar su estado a Activo.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">17. Registrar insumo</p>
            <p className="text-justify pr-7 text-md">Al pulsar el botón azul <strong>{`"Registrar insumo"`}</strong> de la parte superior derecha de la pantalla, abrirá un nuevo formulario para rellenar todos los datos necesarios del insumo.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/9e92af4d-0f81-46aa-8592-c4362851d77a/446f43dc-4237-4727-bb5d-976753d303ab.png?mark-x=1216&mark-y=250&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yMTImaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Registrar Proveedor" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">          
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/98469cce-d804-4d64-b87c-78bab7515e41/3af2a1e2-1068-41eb-9d96-3a72f963c105.png?mark-x=440&mark-y=144&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01ODUmaD02NTAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            width={1500}  height={0} alt="Formulario de un nuevo Proveedor" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">18. Formulario de un nuevo insumo</p>
            <p className="text-justify text-md">Este es el formulario donde podrás rellenar todos los campos del insumo. Podrás ingresar el NOMBRE, PRECIO, CANTIDAD EN STOCK, y la UNIDAD DE MEDIDA del insumo que deseas registrar.</p>
            <p><strong>NOTA</strong>: El Nombre es un campo único, por lo tanto no se puede repetir.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">19. Botón Registrar insumo</p>
            <p className="text-justify pr-7 text-md">Para hacer el registro del insumo exitoso, debes asegurarte que todos los campos estén completos para luego pulsar el botón de <strong>{`"registrar insumo"`}</strong>.</p>
            </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/8f13e57b-c8c9-4c54-9566-14e9dc9a003d/84bef1d0-bf22-4743-a276-6ff3d2d37c19.png?mark-x=821&mark-y=639&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNzYmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Botón Registrar proveedor" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/84cffbbd-d165-4af6-965b-cdfb53a594e1/56cdcf81-a5f7-4b9a-83b4-fb552f1bcfc7.png?mark-x=684&mark-y=642&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMjEmaD00OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Botón cancelar proveedor" />          
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">20. Botón cancelar insumo</p>
            <p className="text-justify text-md">Y si por el contrario de arrepientes de guardar esta insumo, pulsa el botón de <strong>{`"Cancelar"`}</strong> y automáticamente desaparecerá el formulario y no quedará registro alguno de la información que acabas de ingresar.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">21. Paginación</p>
            <p className="text-justify pr-7 text-md">Al exceder un registro de 10 insumos, en la tabla principal se activará la parte de paginación para una mejor visibilidad de la información.</p>
            <p><strong>NOTA</strong>: Si desea ver más de 10 registros, lo puede hacer desplegando la lista para ver la cantidad que desea, como se ve en la imagen..</p>
          </div>
          <div className="w-auto">           
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/052ba8ca-f212-46b9-88f9-816e29be15fd/a1c2d147-d4dd-43b9-b094-a73e8c6671a9.png?mark-x=294&mark-y=792&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNDkmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="paginacion" />
          </div>
        </div>
      </div>   
    )
  }

  