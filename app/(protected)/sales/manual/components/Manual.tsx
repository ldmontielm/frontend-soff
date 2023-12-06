import React from 'react'
import Image from 'next/image'

export default function Manual() {
    return (
      <div className="mx-auto max-w-7xl p-4">
        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">1. Botón del menú</p>
            <p className="text-justify text-md mr-9 mb-9">Pulsar con el botón izquierdo del mouse el icono de menú, se desplegará el listado de todos los módulos a los que tiene acceso.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/5840604d-1804-4f8d-88de-336d4ac14040/a0721503-08fc-4a53-9e6f-6a726c2c5710.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=12&mark-y=20&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MCZoPTQwJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            width={1500}  height={0} alt="Botón del menú" />
          </div>
        </div>
        
        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/5a7eafe4-7046-4bb2-bcfb-4b9cf01d8c95/7cdc84cf-404e-4b73-b9c6-f2e8cbf6bb69.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=18&mark-y=133&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0zMDgmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
            width={1500}  height={0} alt="Módulo de ventas" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">2. Módulo de ventas</p>
            <p className="text-justify text-md">En el momento que se despliegue el menú con todos los módulos a los que tiene acceso, debe elegir el modulo al que desea ir, en este caso <strong>"Ventas"</strong>.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">3. Portada de ventas</p>
            <p className="text-justify pr-7 text-md">Después de pulsar <strong>"Ventas"</strong>, te llevará a la portada principal del módulo donde tiene la tabla con todas las ventas realizadas, el <strong>buscador</strong>, botón de <strong>"Columnas"</strong>, botón de <strong>"Reporte"</strong>, botón de <strong>"Registrar venta"</strong> y las <strong>"Acciones"</strong>.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/2c094b1c-6c96-419a-a888-2b0345bb86c7/24e2f85a-1860-4119-8519-a8cedf5c5730.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" 
            width={1500}  height={0} alt="Portada de ventas" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/65b1201d-6474-42b4-88dd-4cd7468e49b3/06606557-f58a-4867-a8cc-07188ece3e0e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1758&fp-y=0.2595&fp-z=1.6843&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=59&mark-y=313&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01OTQmaD02NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
              width={1500}  height={0} alt="Buscador" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">4. Buscador</p>
            <p className="text-justify text-md">El buscador filtra la información de las ventas con su número único de recibo.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">5. Botón de columnas</p>
            <p className="text-justify pr-7 text-md">Al pulsar el botón de <strong>"Columnas"</strong>, se despliega una lista con todas las columnas de la tabla, las cuales puedes ocultar y mostrar a tu gusto.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/09188fd6-61fd-4466-8d2c-54c02ad568fd/4e8b9303-5c2e-4021-97dc-eae9903de2c9.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5956&fp-y=0.3684&fp-z=1.5006&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=643&mark-y=237&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xODAmaD01OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
             width={1500}  height={0} alt="Botón Columnas" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/f2f8b0a8-5f5d-43f0-b35e-f93b9004f92e/21744cf5-b388-4a49-8a01-9b812a5cadea.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=748&mark-y=378&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00NiZoPTQ2JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            width={1500}  height={0} alt="Lista de columnas" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">6. Lista de columnas</p>
            <p className="text-justify text-md">En esta lista desplegable debe quitar la marca de verificación <strong>(✓)</strong> al pulsar una vez sobre ella, para las columnas que no quiere mostrar, y las que si quiere que se muestren en la tabla deberán tener la marca de verificación.</p>
          </div>
        </div>


        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">7. Botón de Reporte</p>
            <p className="text-justify pr-7 text-md">Al pulsar el botón <strong>"Generar en Excel"</strong>, automáticamente se guardará un archivo Excel en la computadora con todas las ventas registradas en el aplicativo.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/aadc7ca4-5d1b-4d59-9c6c-a5a6aa76d61c/c61ea8d7-8e95-4f39-93ea-b36fec7d67ee.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6356&fp-y=0.3876&fp-z=1.3816&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=744&mark-y=229&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xOTkmaD01NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Botón de Reporte" />     
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">         
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/41de4759-bd32-41d3-a20a-3a998c448cf9/1aef911e-d757-482f-9653-86f546800e7f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3182&fp-y=0.3926&fp-z=1.6115&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=296&mark-y=275&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNjAmaD02NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Ordenador de columnas" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">8. Ordenador de columnas</p>
            <p className="text-justify text-md">Al lado de las columnas <strong>"Cliente"</strong>, <strong>"Fecha"</strong>, <strong>"Ordenes"</strong>, <strong>"Metodos", "Tipo", "Total" y "Estado"</strong> hay un icono de orden, y al pulsarlo el ordenará la columna de manera ascendente y descendente, pulsando varias veces sobre él.</p>
          </div>    
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">9. Icono de Acciones</p>
            <p className="text-justify pr-7 text-md">En cada registro de las ventas habrá un botón de <strong>"Acciones"</strong>, y al pulsarlo se desplegará las acciones permitidas para cada venta.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/7a051c9e-efe9-4206-8442-45f59cf1c46d/c09de65e-9c88-42c8-94e5-a27114d295f7.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7600&fp-y=0.4140&fp-z=1.8578&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=928&mark-y=303&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz03MyZoPTczJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            width={1500}  height={0} alt="Icono de Acciones" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">          
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/478abeff-6090-4581-acc5-30a84925f374/09945a98-58d1-4a9f-a07d-0e7341c511c4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7103&fp-y=0.4767&fp-z=1.7190&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=751&mark-y=344&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNTgmaD02MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
            width={1500}  height={0} alt="Acciones en estado Pagada" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">10. Acciones en estado "Pagada"</p>
            <p className="text-justify text-md">Después de pulsar el icono aparecerá las acciones, la primera opción <strong>"Ver detalle"</strong>, muestra una lista con toda la información relacionada a esa venta.</p><p><strong>NOTA:</strong> En las ventas que tiene estado <strong>"Pagada"</strong>, se visualizará en las acciones <strong>"Ver detalle"</strong> y <strong>"Descargar detalle"</strong> únicamente.</p>
           </div>
        </div> 

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">11. Ver detalle</p>
            <p className="text-justify pr-7 text-md">La primera opción de las acciones mostrará el detalle de la venta como:<strong> Producto</strong>, <strong>Cantidad</strong> y <strong>Total</strong>.</p>
          </div>
          <div className="w-full">
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/8c95ed10-b0d3-46e9-a97d-cc12cb9442c0/187a0403-5b70-4a36-9d6f-5a245d09b8c3.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.4992&fp-z=1.4614&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=315&mark-y=174&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01NjkmaD00NDUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            width={1500}  height={0} alt="Ver detalle" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/80b1246e-cac7-485c-9a8e-34580f4b4e5f/2cdf218e-e0a6-48fd-82a7-e885a88b1ee7.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6359&fp-y=0.4849&fp-z=1.3250&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=847&mark-y=303&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMTEmaD0xMzcmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            width={1500}  height={0} alt="Lista de acciones" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">12. Lista de acciones</p>
            <p className="text-justify text-md">La segunda opción de la lista de acciones es <strong>"Descargar detalle"</strong>, al pulsar este botón automáticamente de descargará un archivo PDF con el detalle de la venta.</p>           
          </div>
        </div>
 
        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">13. Registrar venta</p>
            <p className="text-justify pr-7 text-md">Al pulsar el botón azul <strong>"Registrar venta"</strong> de la parte superior derecha de la pantalla, se creará una nueva venta y abrirá una nueva pestaña para rellenar todos los campos de la venta.</p>
          </div>
          <div className="w-full">  
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/5dccb1c1-ca66-430a-977c-73973c1e5b08/15d38ef9-5263-490f-be95-126a63dec2f6.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7482&fp-y=0.3317&fp-z=1.8578&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=855&mark-y=253&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yODEmaD03MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Registrar venta" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/297a553f-e82d-4792-a324-3ff74891957a/e8467133-a4bc-44fb-aa64-590d3ace483f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n"
            width={1500}  height={0} alt="Ordenes de la venta" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">14. Ordenes de la venta</p>
            <p className="text-justify text-md">Esta es la pestaña donde puede rellenar todos los campos de la venta.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">15. Seleccionar un producto</p>
            <p className="text-justify pr-7 text-md">Al pulsar el recuadro de <strong>"Seleccionar producto"</strong> se desplegará una lista de todos los productos registrados en el aplicativo y puede elegir uno.</p>
          </div>
          <div className="w-full">             
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/c68b799e-439e-4dd9-a749-07c85b72ca6f/21931830-d494-479e-ba9b-c03e04a35523.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4061&fp-y=0.4586&fp-z=1.2329&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=36&mark-y=291&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMTkmaD00NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Seleccionar un producto" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/ba7d1a03-c4b8-47dd-a476-f6e461382dde/0ec82845-5204-40a7-b06f-8feed6e24800.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3169&fp-y=0.3294&fp-z=2.1194&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=244&mark-y=267&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MzcmaD04NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Cantidad del producto" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">16. Cantidad del producto</p>
            <p className="text-justify text-md">Para continuar debe ingresar la <strong>cantidad</strong> del producto.</p><p><strong>NOTA:</strong> Este campo solo recibe números positivos.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">17. Botón Agregar</p>
            <p className="text-justify pr-7 text-md">Cuando haya completado todos los campos correctamente debe pulsar el botón <strong>"+ Agregar"</strong> para que la orden se guarde satisfactoriamente.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/327eeeb7-d466-43ce-b7c1-180f9bd4be06/8c94e974-ca89-49d1-bebc-21af7a59bb0b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6099&fp-y=0.3588&fp-z=1.5713&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=652&mark-y=241&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNjgmaD02MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Botón Agregar" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">          
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/f634662f-fda5-4175-b73f-392c99944292/e4fb0d3e-c657-462b-b432-4a3ebaef3001.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=18&mark-y=170&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04NjcmaD01NTAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            width={1500}  height={0} alt="Ordenes" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">18. Ordenes</p>
            <p className="text-justify text-md">En el recuadro rojo se podrá visualizar todas las ordenes registrados y puede<em>,</em><strong><em> editar</em></strong> la cantidad del producto y <strong><em>eliminar</em></strong> las ordenes con los botones que hay en cada una de las ordenes en el apartado <strong>"Acciones".</strong></p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">19. Editar la cantidad del producto</p>
            <p className="text-justify pr-7 text-md">Si luego de agregar la orden a la venta, quiere cambiar la cantidad del producto, debe pulsar el botón del lápiz que esta seleccionado en el recuadro rojo.</p>
            </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/e7bbdfc9-e62e-463f-beed-b50c76c4fe85/b6899491-eab4-4b51-a6ce-34950addb4c2.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6213&fp-y=0.4188&fp-z=1.8578&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=669&mark-y=308&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz03MyZoPTczJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            width={1500}  height={0} alt="Editar la cantidad del producto" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/9ba50f83-6fff-42e3-b0ce-652da557bdf8/8838ba3c-c165-41a8-9100-b42764471ca3.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5272&fp-z=1.7044&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=307&mark-y=362&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01ODYmaD02NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Editar la cantidad del producto" />          
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">20. Editar la cantidad del producto</p>
            <p className="text-justify text-md">Después de pulsar el botón del lápiz, podrás ingresar la nueva cantidad del producto como el recuadro rojo lo indica.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">21. Editar la cantidad del producto</p>
            <p className="text-justify pr-7 text-md">Para guardar la nueva cantidad asignada al producto debe pulsar el botón <strong>"Actualizar cambios"</strong>.</p>
          </div>
          <div className="w-auto">           
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/f50ed9de-7967-49c7-9441-6e85d405130e/33bcc636-e976-4745-a06e-541ff4732a97.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5378&fp-y=0.5475&fp-z=1.3536&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=567&mark-y=426&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMDMmaD01NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Editar la cantidad del producto" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">     
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/1647971c-e504-4425-a7e6-14f455ef8987/b9caec83-4601-4418-beb6-bba656d16c0c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6450&fp-y=0.4188&fp-z=1.8578&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=690&mark-y=308&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz03MyZoPTczJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            width={1500}  height={0} alt="Eliminar orden" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">22. Eliminar orden</p>
            <p className="text-justify text-md">Si quiere eliminar una de las ordenes de la venta, puede hacerlo pulsando el botón rojo <strong>"basura"</strong>, ubicado en cada una de las ordenes del apartado<strong> "Acciones".</strong></p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">23. Eliminar orden</p>
            <p className="text-justify pr-7 text-md">Luego de pulsar el botón de <strong>"basura"</strong>, se abrirá un mensaje de confirmación para validar que si esté seguro de eliminar la orden, podrá eliminarla al pulsar el botón rojo <strong>"Eliminar"</strong>.</p>
          </div>
          <div className=" w-auto">           
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/8b0ec9ff-fb8b-4c9b-a89b-b93fd5a85c76/51e487dc-24d3-4875-ac52-6cce1dfb60bc.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4982&fp-y=0.5390&fp-z=1.7032&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=821&mark-y=381&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNDMmaD02NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Eliminar orden" />
          </div>         
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">       
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/a91b01d6-5662-4e28-a3af-ac168ecd8414/04c7c3ef-9121-42d6-bd55-acf9272b4add.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6651&fp-y=0.5759&fp-z=1.4891&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=745&mark-y=386&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zNTUmaD01NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Tipo de venta" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">24. Tipo de venta</p>
            <p className="text-justify text-md">Al pulsar el recuadro rojo debe elegir el tipo de venta, ya sea <strong>"Física"</strong> o <strong>"Pedido".</strong></p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">25. Tipo de venta</p>
            <p className="text-justify pr-7 text-md">Sí la venta es <strong>"Física"</strong> puede continuar, pero si la venta es <strong>"Pedido"</strong>, debe registrar la información del cliente para posteriormente realizar el domicilio, para agregar dicha información presione el recuadro rojo "Añadir información del cliente".</p>
          </div>
          <div className="w-auto">        
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/42c32d75-64fe-4ecc-9dbd-7b8898ef540a/5bcb76e4-98e4-436e-8232-185fe9b397d0.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6599&fp-y=0.5000&fp-z=1.4646&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=751&mark-y=362&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zNjAmaD01OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Tipo de venta" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">        
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/7ca99842-f033-4dcc-950b-44d406aa2f77/4f4c8ae5-2283-469e-b631-d1b849da90ae.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&fp-z=1.2519&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=356&mark-y=100&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00ODgmaD01OTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            width={1500}  height={0} alt="Registrar cliente" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">26. Registrar cliente</p>
            <p className="text-justify text-md">Después de pulsar el botón de "Añadir la información del cliente", se abrirá el apartado donde puede rellenar todos los campos del cliente.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">27. Registrar cliente</p>
            <p className="text-justify pr-7 text-md">Cuando toda la información del cliente este diligenciada correctamente, debe pulsar el botón "Añadir cliente".</p>
          </div>
          <div className="w-auto">   
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/f70f754b-7c99-4f56-863f-c465a1299be2/d76a4516-2362-4192-aa99-51c2bb30293b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5048&fp-y=0.5073&fp-z=1.5069&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=533&mark-y=650&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNzkmaD02MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Registrar cliente" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">   
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/be935d42-dd46-47c6-83b4-e802efa00972/00751f88-0adc-438f-8daa-322f2f9c3cdc.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6651&fp-y=0.6980&fp-z=1.4891&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=748&mark-y=564&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zNTUmaD01NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Método de pago" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">28. Método de pago</p>
            <p className="text-justify text-md">Ahora debe seleccionar el método de pago, al pulsar el recuadro rojo se desplegarán dos opciones de pago, "Efectivo" y "Transferencia", debe elegir uno.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">29. Consolidar venta</p>
            <p className="text-justify pr-7 text-md">Cuando toda la información de la venta y las ordenes este completa, pulse el botón <strong>"Consolidar venta"</strong> y automáticamente guardará la venta con la información anteriormente diligenciada.</p>
          </div>
          <div className="w-auto">      
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/95272924-0a48-4d85-8933-e3cd15a5cbfc/9f2c6ede-d7fb-4a33-841f-04ffa242cbb7.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8467&fp-y=0.8192&fp-z=3.9102&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=120&mark-y=319&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NjEmaD0xNTUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            width={1500}  height={0} alt="Consolidar venta" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">           
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/0432f268-59c5-4c59-ad52-e56df76133fa/0baf97a5-693b-4de7-84c5-0559c5c7df9b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6599&fp-y=0.6892&fp-z=1.4646&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=751&mark-y=622&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zNjAmaD01OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
             width={1500}  height={0} alt="Cancelar venta" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">30. Cancelar venta</p>
            <p className="text-justify text-md">Y si por el contrario ya no desea registrar la venta, pulse el botón de <strong>"Cancelar venta"</strong> y automaticamente la venta se eliminará y no quedará registro alguno de la información relacionada a esta venta.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">31. Portada de ventas</p>
            <p className="text-justify pr-7 text-md">Como se muestra en la imagen la venta que se acabo de registrar aparece de primera, y su estado es <strong>"Pendiente"</strong>, debido a que su método de pago fue <strong>"Transferencia"</strong>, por ende para que esta venta pase de <strong>"Pendiente"</strong> a <strong>"Pagada"</strong> debe subir al sistema el comprobante de pago.</p>
          </div>
          <div className="w-auto">         
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/83cd8780-73e1-4f8b-840f-f0422936a6e5/586a83c3-3e1b-4ad1-8859-ee14647354b4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n"
            width={1500}  height={0} alt="Portada de ventas" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">           
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/782fc4f9-3832-4f6f-8487-92ea0ab68d8e/6c4fc44c-bda7-48c7-8f87-7a442678d18f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7679&fp-y=0.4140&fp-z=1.8578&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=980&mark-y=303&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz03MyZoPTczJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
             width={1500}  height={0} alt="Comprobante de pago" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">32. Comprobante de pago</p>
            <p className="text-justify text-md">Para subir al sistema el comprobante de pago de la venta, debe pulsar las acciones de la venta con estado <strong>"Pendiente"</strong>.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">33. Confirmar pedido</p>
            <p className="text-justify pr-7 text-md">Como se visualiza en la imagen, las acciones de ventas <strong>"Pendiente"</strong> son las misma que las de ventas <strong>"Pagada"</strong>, excepto la primero, esta solo se puede ver el las ventas <strong>"Pendiente"</strong>, pulsando sobre <strong>"Confirmar pedido"</strong> podrá cambiar el estado de la venta a <strong>"Pagada"</strong>.</p>
          </div>
          <div className="w-auto">           
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/fc7132b6-9120-4a6e-8d4b-773a62806f64/fc319548-be79-4c68-b5a9-44d625bbf770.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7368&fp-y=0.4742&fp-z=1.8918&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=755&mark-y=343&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yODMmaD02OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Confirmar pedido" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/0c42cdd8-2222-4d3a-8755-652771ee26d1/8cb66f11-7068-4b57-b58f-198d47edcfa0.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5008&fp-z=1.5150&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=305&mark-y=180&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01OTAmaD00MzImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            width={1500}  height={0} alt="Confirmar pedido" />          
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">34. Confirmar pedido</p>
            <p className="text-justify text-md">Después de pulsar <strong>"Confirmar pedido"</strong>, se abrirá un apartado donde puede subir la foto del comprobante de pago.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">35. Confirmar pedido</p>
            <p className="text-justify pr-7 text-md">Cuando ya haya seleccionado la foto del comprobante de pago que le envió el cliente, debe pulsar el botón <strong>"Subir recibo"</strong>, para que la venta cambie de estado a <strong>"Pagada"</strong>.</p><p><strong>NOTA: </strong>El comprobante de pago debe ser único por lo tanto no puede subir el mismo comprobante dos veces.</p>
          </div>
          <div className="w-auto">           
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/eaa7bc29-7bb5-4ce0-9bf1-3c5a34776b6e/3806eba0-5c91-4adb-88d5-549b9e221150.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5908&fp-z=1.7044&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=307&mark-y=362&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01ODYmaD02NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Confirmar pedido" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">            
            <Image src="https://images.tango.us/workflows/41c6f688-33fa-45e0-b61e-25773cfc60e7/steps/98e2ebda-1d94-4348-849a-aaf750ffc867/2bc56b03-5a8a-4b67-9d21-4011e3891985.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7276&fp-y=0.4138&fp-z=1.8265&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=749&mark-y=314&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMjkmaD01OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Estado de la venta" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">36. Estado de la venta</p>
            <p className="text-justify text-md">Automaticamente después de subir el comprobante de pago al sistema la venta cambiará su estado de <strong>"Pendiente"</strong> a <strong>"Pagada"</strong>, y en las acciones ya no aparecerá <strong>"Confirmar pedido"</strong>.</p>
          </div>
        </div>
      </div>   
    )
  }