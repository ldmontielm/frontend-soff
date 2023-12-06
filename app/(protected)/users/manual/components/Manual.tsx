import React from 'react'
import Image from 'next/image'

export default function Manual() {
    return (
      <div className="mx-auto max-w-7xl p-4">
        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">1. Ingreso a proveedores</p>
            <p className="text-justify text-md mr-9 mb-9">Primero debe Deslizar el puntero del mouse sobre el menú de opciones, luego debe pulsar con el botón izquierdo del mouse sobre el recuadro del menú ubicado en la parte superior izquierda de la pantalla como se muestra en la imagen.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/2e0277ff-6fd1-4673-ad0d-9c10ce6478b4/steps/6a49475a-d0bd-437d-a4a6-c6fab7d4333f/b3dc461c-ac3f-4e8b-aaab-51ca669ead8c.png?mark-x=15&mark-y=26&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01MCZoPTUwJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" 
            width={1500}  height={0} alt="Ingreso a productos" />
          </div>
        </div>
        
        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/9cdea3bb-a8dd-4132-87c6-96dbcb351c5f/2322d976-6fb8-446e-8f69-7dafb205825d.png?mark-x=23&mark-y=329&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0zODYmaD02MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
            width={1500}  height={0} alt="Ingreso a productos" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">2. Ingreso a proveedores</p>
            <p className="text-justify text-md">En el momento que se despliegue el menú con todos los módulos a los que tiene acceso, debe elegir el modulo al que desea ir, en este caso <strong>{`"Proveedores"`}</strong>.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">3. Portada de proveedores</p>
            <p className="text-justify pr-7 text-md">Al entrar al modulo de <strong>{`"Proveedores"`}</strong> te saldrá la pagina principal de proveedores una lista con todos los proveedores registrados, el <strong>{`"Buscador"`}</strong>, botón de <strong>{`"Columnas"`}</strong>, botón de <strong>{`"Inactivos"`}</strong>, botón de <strong>{`"Registrar proveedor"`}</strong>, y las acciones.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/8ae3a1e8-e198-4db7-932d-c2b703badd06/9d76daaa-948b-4297-ae9a-d70429df98f2.png?mark-x=5&mark-y=97&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNDQ5Jmg9ODM2JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" 
            width={1500}  height={0} alt="Portada de productos" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/e76062be-cbb0-41c3-b77c-db1acc2c7988/d9375aa4-a1ef-409b-a346-77330da53c58.png?mark-x=26&mark-y=232&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00NDEmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
              width={1500}  height={0} alt="Buscador de productos" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">4. Buscador de proveedores</p>
            <p className="text-justify text-md">Sobre este apartado puedes filtrar por el nombre de la empresa deslizando el puntero del mouse sobre la barra de búsqueda como se muestra en la imagen. pulsa con el boton izquierdo del mouse y luego podrás ingresar con el teclado el nombre de la empresa que deseas buscar.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">5. Botón Columnas</p>
            <p className="text-justify pr-7 text-md">En el botón de <strong>{`"Columnas"`}</strong> aquí podrás ocultar información que te parezca irrelevante de tabla de proveedores. desliza el puntero del mouse sobre el botón <strong>{`"Columnas"`}</strong> y pulsas con el lado izquierdo del mouse.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/685fcaf2-1b43-47bc-9b48-611b485b58f8/e296163c-869b-48a7-bf29-a0d67ef8ea7c.png?mark-x=951&mark-y=232&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNDUmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
             width={1500}  height={0} alt="Botón Columnas" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/76a92ac8-309f-4ac7-bd16-96e358427997/5adf20b1-4813-4c46-8606-ac7c69b3a39a.png?mark-x=952&mark-y=566&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01NiZoPTU2JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
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
            <p className="text-justify pr-7 text-md">Al lado de las columnas Nombre, Precio, Cantidad, Unidad de medida y Total hay un icono de orden, y al pulsarlo el ordenará la columna de manera ascendente y descendente pulsando con el boton izquierdo del mouse sobre él.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/6ac19096-2561-41c8-b7f3-a8a133f58f56/b2797e92-2435-4b88-96d0-b001a728a4a8.png?mark-x=6&mark-y=98&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNDQ5Jmg9ODM3JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" 
            width={1500}  height={0} alt="Registrar producto" />     
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">         
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/81fa4a61-9623-40bf-85c2-b4fb551a9db7/f4d54265-18c2-413d-b1d8-d9e25af41c86.png?mark-x=1347&mark-y=345&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01MCZoPTUwJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" 
            width={1500}  height={0} alt="Detalle del producto" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">8. Acciones para el proveedor</p>
            <p className="text-justify text-md">En cada registro de proveedores habrá un icono de <strong>{`"Acciones"`}</strong>, y al pulsarlo se desplegará las acciones permitidas para cada proveedor.</p>
          </div>    
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">9. Lista de Acciones</p>
            <p className="text-justify pr-7 text-md">Al pulsar el icono con el botón izquierdo del mouse aparecerá las acciones, la primera opción <strong>{`"Editar"`}</strong>, te mostrará un formulario, debes pulsar con el lado izquierdo del mouse el botón de <strong>{`"Editar"`}</strong> que esta seleccionado en el recuadro rojo</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/cda39641-be2a-4fc4-995c-a06980f4bfc2/4037642b-d228-41cc-8d8e-8633cab92382.png?mark-x=1249&mark-y=432&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMTQmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Seleccionar Insumo" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">          
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/b3acf7b6-46eb-497d-ad1e-66942eed9939/11b6205f-2444-4c8e-9107-0031b1a557ee.png?mark-x=516&mark-y=351&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MzEmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Seleccionar insumo" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">10. Editar información de un proveedor</p>
            <p className="text-justify text-md">Si luego de agregar un proveedor al modulo, quieres cambiar el NIT, NOMBRE, EMPRESA, DIRECCIÓN, TELEFONO o la CIUDAD podrás ingresar la nueva información del <strong>{`"Proveedor"`}</strong> como el recuadro rojo lo indica.</p>
           </div>
        </div> 

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">11. Botón Actualizar cambios</p>
            <p className="text-justify pr-7 text-md">Para guardar los nuevos cambios asignados al proveedor debes pulsar con el lado izquierdo del mouse el botón <strong>{`"Actualizar cambios"`}</strong></p>
          </div>
          <div className="w-full">
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/4f0e23dc-f287-40a6-9bc6-84e9de4b2913/3fa7d784-9d66-4b9d-ab4c-4643e9101f58.png?mark-x=766&mark-y=716&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xODEmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Seleccionar Insumo" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/3e7ea243-3cec-442b-82d8-ae9f4154b3f2/12870f76-cb9d-4108-a71b-b5f67c4c3e75.png?mark-x=1239&mark-y=829&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMjkmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Cantidad del insumo" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">12. Accion eliminar</p>
            <p className="text-justify text-md">En acciones del proveedor también habrá un icono de <strong>{`"Eliminar"`}</strong>. aquí podrás eliminar permanentemente los datos de un proveedor.</p>           
          </div>
        </div>
 
        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">13. Eliminar proveedor</p>
            <p className="text-justify pr-7 text-md">Luego de pulsar el botón de <strong>{`"Eliminar"`}</strong>, se abrirá un mensaje de confirmación para validar que si estés seguro de eliminar el proveedor, podrás eliminarla al pulsar con el botón izquierdo del mouse el botón rojo <strong>{`"Eliminar"`}</strong> por otro lado pulse sobre el botón <strong>{`"Cancelar"`}</strong> para deshacer dicha acción.</p>
          </div>
          <div className="w-full">  
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/7f6d85a7-4e26-4d2d-9035-572b80c02a53/480d1bcb-25c4-4ff2-9251-1c7da77b9dad.png?mark-x=894&mark-y=495&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMDImaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Botón Agregar" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/5adffbfb-5ca1-423d-9c68-20575adce498/6b2a1006-24d9-44c7-bb44-7a8c733679b2.png?mark-x=1199&mark-y=354&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz05OSZoPTMyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            width={1500}  height={0} alt="Detalles" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">14. Botón activos</p>
            <p className="text-justify text-md">En esta parte, puedes cambiar el estado de un proveedor, dependiendo del estado actual este cambia, por ejemplo, si está activo, al pulsar sobre el con el botón izquierdo del mouse, cambia su color a rojo y cambia el texto a Inactivo, y viceversa.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">15. Botón Inactivos</p>
            <p className="text-justify pr-7 text-md">Al pulsar el botón de <strong>{`"Inactivos/Activos"`}</strong>, puede ver los proveedores activos o inactivos según sea el caso.</p>
          </div>
          <div className="w-full">             
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/dc1c9617-e1c2-4935-8c43-4410da9a1d26/ff2c592d-ccf5-4640-99e8-be4140b8ef5b.png?mark-x=1110&mark-y=232&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMTMmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Editar la cantidad del insumo" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/249ae21a-87ef-4cc6-a766-0be00dd3c8cc/20386126-ca78-4faa-8aec-20368d58ab4f.png"
            width={1500}  height={0} alt="Editar la cantidad del insumo" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">16. Inactivos</p>
            <p className="text-justify text-md">Al pulsar el botón <strong>{`"Inactivos"`}</strong>, va a ver la lista de los proveedores con el estado Inactivo, estos no tendrán ninguna acción disponible, como se ve en la imagen. Si desea ver sus acciones debe cambiar su estado a Activo.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">17. Registrar Proveedor</p>
            <p className="text-justify pr-7 text-md">Al pulsar el botón azul <strong>{`"registrar proveedor"`}</strong> de la parte superior derecha de la pantalla, abrirá un nuevo formulario para rellenar todos los datos necesarios del proveedor.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/5833ab4f-c89d-4275-8d1c-33bc7277429f/a71e0f14-fac3-478a-bd40-abcbf4089f22.png?mark-x=1216&mark-y=232&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yMTImaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Registrar Proveedor" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">          
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/98469cce-d804-4d64-b87c-78bab7515e41/3af2a1e2-1068-41eb-9d96-3a72f963c105.png?mark-x=440&mark-y=144&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01ODUmaD02NTAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            width={1500}  height={0} alt="Formulario de un nuevo Proveedor" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">18. Formulario de un nuevo Proveedor</p>
            <p className="text-justify text-md">Este es el formulario donde podrás rellenar todos los campos del proveedor. Podrás ingresar el NIT, NOMBRE, EMPRESA, DIRECCIÓN, TELEFONO y la CIUDAD del proveedor que deseas registrar.</p>
            <p><strong>NOTA</strong>: El NIT es un campo único, por lo tanto no se puede repetir.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">19. Botón Registrar proveedor</p>
            <p className="text-justify pr-7 text-md">Para hacer el registro del proveedor exitoso, debes asegurarte que todos los campos estén completos para luego pulsar el botón de <strong>{`"registrar proveedor"`}</strong>.</p>
            </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/da904862-04a8-4d5c-b5b3-e1a243bec1b2/2da5e968-bedf-4eb9-a1a6-174a305ed873.png?mark-x=804&mark-y=716&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xOTImaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Botón Registrar proveedor" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/99ea603a-010f-442c-aefe-3634fce8ae75/3897d0d7-4af1-4686-93c9-475c007aecc7.png?mark-x=669&mark-y=715&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMjEmaD01MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Botón cancelar proveedor" />          
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">20. Botón cancelar proveedor</p>
            <p className="text-justify text-md">Y si por el contrario de arrepientes de guardar esta proveedor, pulsa el botón de <strong>{`"Cancelar"`}</strong> y automáticamente desaparecerá el formulario y no quedará registro alguno de la información que acabas de ingresar.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">21. Paginación</p>
            <p className="text-justify pr-7 text-md">Al exceder un registro de 10 proveedores, en la tabla principal se activará la parte de paginación para una mejor visibilidad de la información.</p>
            <p><strong>NOTA</strong>: Si desea ver más de 10 registros, lo puede hacer desplegando la lista para ver la cantidad que desea, como se ve en la imagen..</p>
          </div>
          <div className="w-auto">           
            <Image src="https://images.tango.us/workflows/2cc6ad67-25a6-442c-b5d4-1abdbdb0589f/steps/87341d22-de5d-4042-8229-7c75e515cae6/4d9cee5a-a625-49cc-8356-0f0f1832b635.png"
            width={1500}  height={0} alt="paginacion" />
          </div>
        </div>
      </div>   
    )
  }