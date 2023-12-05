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
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/13c25dda-4d10-4812-8f48-d01167e3d63c/c40395ce-548f-4a02-b069-b209372b86ec.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=12&mark-y=20&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MCZoPTQwJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            width={1500}  height={0} alt="Botón del menú" />
          </div>
        </div>
        
        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/e5146c52-34c1-44fe-a79a-7ce5cbbfe03e/b1e643db-2522-448f-a892-1c9acdd38ef9.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=19&mark-y=188&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0zMjgmaD01NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
            width={1500}  height={0} alt="Módulo de compras" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">2. Módulo de compras</p>
            <p className="text-justify text-md">En el momento que se despliegue el menú con todos los módulos a los que tiene acceso, debe elegir el modulo al que desea ir, en este caso <strong>{`"Compras"`}</strong>.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">3. Portada de compras</p>
            <p className="text-justify pr-7 text-md">Después de pulsar el módulo <strong>{`"Compras"`}</strong>, te llevará a la portada principal del módulo donde tiene la tabla con todas las compras realizadas, el <strong>{`"buscador"`}</strong>, botón de <strong>{`"columnas"`}</strong>, botón de <strong>{`"Reporte"`}</strong>, botón de <strong>{`"Registrar compra"`}</strong> y las <strong>{`"Acciones"`}</strong>.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/993046f6-a431-40fc-933b-a2e44e72d3c8/a35340d7-e8cc-43d1-8493-e4da6d119578.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" 
            width={1500}  height={0} alt="Portada de compras" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/d958c3dd-aef7-42b9-ade8-a00a880bcb88/d55da201-3572-4b50-bc93-2c2f2309e3f2.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=778&mark-y=189&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMjEmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
              width={1500}  height={0} alt="Botón de Columnas" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">4. Botón de columnas</p>
            <p className="text-justify text-md">Al pulsar el botón de <strong>{`"Columnas"`}</strong>, se despliega una lista con todas las columnas de la tabla, las cuales puedes ocultar y mostrar a tu gusto.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">5. Lista de columnas</p>
            <p className="text-justify pr-7 text-md">En esta lista desplegable debe quitar la marca de verificación <strong>(✓)</strong> al pulsar una vez sobre ella, para las columnas que no quiere mostrar, y las que si quiere que se muestren en la tabla deberán tener la marca de verificación.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/9939a6b7-117b-42de-9d56-f04c343c3ca7/9fc85803-6f96-4b4d-86bd-26a9d9d9d1fb.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=783&mark-y=230&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00NiZoPTQ2JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
             width={1500}  height={0} alt="Botón Columnas" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/ed7a0f85-37b6-4729-81c5-0a2f6ebde64b/47734442-6969-4202-a530-da2ecf074cd9.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=903&mark-y=189&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMDgmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Botón de Reporte" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">6. Botón de Reporte</p>
            <p className="text-justify text-md">El botón de<strong>{`"Reporte"`}</strong> generará un informe de todas las compras registradas en el aplicativo, pero antes muestra la opción de elegir como generarlo.</p>
          </div>
        </div>


        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">7. Opciones de reporte</p>
            <p className="text-justify pr-7 text-md">Obtendrás dos opciones de reporte, la primer opción es el botón <strong>{`"Generar en PDF"`}</strong>, al pulsar sobre él, automáticamente se guardará un archivo PDF en la computadora con todas las compras registradas en el aplicativo.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/ccd6ebed-cf47-4f50-8947-39c36289c122/2386b39c-c709-455c-bc2a-1709a13f7303.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=830&mark-y=241&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNjUmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Opciones de reporte" />     
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">         
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/3d3f01d4-5eee-40d7-b48c-29b4ee6124ee/3070f737-7b12-4ac6-8b4a-2f7225b7c101.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=830&mark-y=281&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNjUmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Opciones de reporte" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">8. Opciones de reporte</p>
            <p className="text-justify text-md">Otra de las opciones de reporte es <strong>{`"Generar en Excel"`}</strong>, al pulsar el botón automáticamente se guardará un archivo Excel en la computadora con todas las compras registradas en el aplicativo.</p>
          </div>    
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">9. Ordenador de columnas</p>
            <p className="text-justify pr-7 text-md">Al lado de las columnas <strong>{`"Fecha"`}</strong>, <strong>{`"Ordenes"`}</strong>, <strong>{`"Proveedor"`}</strong> y <strong>{`"Total"`}</strong> hay un icono de orden, y al pulsarlo el ordenará la columna de manera ascendente y descendente, pulsando varias veces sobre él.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/4d5246f5-2737-4f31-b067-f9685d79a046/6a708901-6bf9-4e5e-904a-6d7fce012866.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=270&mark-y=240&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz05NiZoPTQwJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            width={1500}  height={0} alt="Ordenador de columnas" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">          
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/57742936-5e43-4312-ac38-370e7484ee77/ec1c15d7-02cc-4ddd-86ac-3fe9d8991f41.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1042&mark-y=282&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MCZoPTQwJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" 
            width={1500}  height={0} alt="Icono de Acciones" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">10. Icono de Acciones</p>
            <p className="text-justify text-md">En cada registro de las compra habrá un boton de <strong>{`"Acciones"`}</strong>, y al pulsarlo se desplegará las acciones permitidas para cada compra.</p>
           </div>
        </div> 

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">11. Lista de Acciones</p>
            <p className="text-justify pr-7 text-md">Después de pulsar el icono aparecerá las acciones, la primera opción <strong>{`"Ver detalle"`}</strong>, muestra una lista con toda la información relacionada a esa compra.</p>
          </div>
          <div className="w-full">
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/c878995c-258d-420b-9d28-a8da508aad33/ad91e6a7-f664-46ee-b042-bb967fc5efd0.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=925&mark-y=351&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNTAmaD0zNiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Lista de Acciones" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/814cfd95-34aa-4f42-bd29-e7d049b9481c/4b3045cf-e153-4847-a863-5c7521adc8a8.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=326&mark-y=265&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01NDcmaD0yNjEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            width={1500}  height={0} alt="Ver detalle" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">12. Ver detalle</p>
            <p className="text-justify text-md">La primera opción de las acciones mostrará el detalle de la compra como:<strong>{`"Número de recibo"`}</strong>, <strong>{`"Proveedor"`}</strong>, <strong>{`"Total"`}</strong>, <strong>{`"Fecha"`}</strong> y todas sus respectivas <strong>{`"Ordenes"`}</strong>.</p>           
          </div>
        </div>
 
        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">13. Lista de Acciones</p>
            <p className="text-justify pr-7 text-md">La segunda opción de la lista de acciones es <strong>{`"Descargar recibo"`}</strong>, al pulsar este botón automáticamente de descargará un archivo PDF con el detalle de la compra.</p>
          </div>
          <div className="w-full">  
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/8b033fdd-af05-4aea-baf5-74ed2526c938/0bf3afc2-ea0c-4d96-800a-0ca69c2f38b2.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=921&mark-y=318&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNjEmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            width={1500}  height={0} alt="Lista de Acciones" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/04fe4623-0207-4f64-ac29-597006ffc273/d8c20588-48bc-4f62-97be-bcc9cbfb774f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=253&mark-y=527&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMjEmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Paginación" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">14. Paginación</p>
            <p className="text-justify text-md">Al exceder un registro de 10 compras, en la tabla principal se activará la parte de paginación para una mejor visibilidad de la información.</p><p><strong>NOTA: </strong>Si desea ver más de 10 registros, lo puede hacer desplegando la lista para ver la cantidad que desea, como se ve en la imagen.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">15. Registrar compra</p>
            <p className="text-justify pr-7 text-md">Al pulsar el botón azul <strong>{`"Registrar compra"`}</strong> de la parte superior derecha de la pantalla, se creará una nueva compra y abrirá una nueva pestaña para rellenar todos los campos de la compra.</p>
          </div>
          <div className="w-full">             
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/24c2143f-1cc3-4b72-bfab-81de11f09b7e/27c43106-fc62-4e7e-86f8-0c21315cad1a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1014&mark-y=189&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNTEmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Registrar compra" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/154fa696-40c9-4422-bf0b-b4dc43812fbe/77713aed-9544-458e-afa9-1bba06cef7f0.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=4&mark-y=78&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMTkzJmg9NjE5JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            width={1500}  height={0} alt="Ordenes de la compra" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">16. Ordenes de la compra</p>
            <p className="text-justify text-md">Esta es la pestaña donde puede rellenar todos los campos de la compra.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">17. Fecha de compra</p>
            <p className="text-justify pr-7 text-md">En primer lugar debe ingresar la <strong>{`"fecha"`}</strong> en la cual se realizo la compra.</p><p><strong>NOTA:</strong> Todos los campos son requeridos, no puede dejar ningún campo vacío.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/0058ef08-4ce9-4fb5-9360-5b465df9335b/d95b6cda-a71a-4637-9bf2-29d2ba53d7ac.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=52&mark-y=328&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNDYmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Fecha de compra" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">          
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/ff53b3b3-e067-4266-82c0-dce2b82a3ead/a5cdafab-7090-4f15-8519-258cd304b803.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=52&mark-y=390&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNDYmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Número de recibo" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">18. Número de recibo</p>
            <p className="text-justify text-md">Luego debe ingresar el <strong>{`"Número de recibo"`}</strong> de la compra que realizó.</p><p><strong>NOTA:</strong> El número de recibo es un campo único por lo tanto no se puede repetir.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">19. Seleccionar proveedor</p>
            <p className="text-justify pr-7 text-md">Para concluir con este apartado, debe ingresar el <strong>{`"Proveedor"`}</strong> al cual se le realizó la compra.</p>
            </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/7b7bd4d5-c893-4fc0-adfa-e97dffb8d0a4/24f02265-c302-4bdb-9c0d-a84f86ab9e10.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=52&mark-y=451&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yMTAmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Seleccionar proveedor" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/722d7e37-806e-4403-a10e-12333fae0b29/21f19d4f-b7ce-4b95-8acd-ca6b61b83d9c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=67&mark-y=529&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xODAmaD0zNiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Lista de proveedores" />          
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">20. Lista de proveedores</p>
            <p className="text-justify text-md">Al pulsar sobre el recuadro de <strong>{`"Seleccionar proveedor"`}</strong> se desplegará una lista con todos los proveedores registrados en el aplicativo, y puede elegir uno.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">21. Seleccionar insumo</p>
            <p className="text-justify pr-7 text-md">Para registrar una orden, en primer lugar debe <strong>{`"Seleccionar insumo"`}</strong>.</p>
            <p><strong>NOTA</strong>: El nombre del producto es un campo único por lo tanto no se puede repetir.</p>
          </div>
          <div className="w-auto">           
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/1cab4121-3cd1-44a6-93b3-ab3171e83a2b/a1083d94-35d6-4112-977c-3319398071a3.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=319&mark-y=200&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNzkmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Seleccionar insumo" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">     
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/d854fb41-49ee-4b0f-8547-405a12e3efb5/8d16b664-0a89-4832-8eed-71b3504e3204.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=320&mark-y=278&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xODAmaD0zNiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="22. Lista de insumos" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">22. Lista de insumos</p>
            <p className="text-justify text-md">Al pulsar el recuadro de <strong>{`"Seleccionar insumo"`}</strong> se desplegará una lista de todos los insumos registrados en el aplicativo y puede elegir uno.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">23. Cantidad del insumo</p>
            <p className="text-justify pr-7 text-md">Para continuar debe ingresar la <strong>{`cantidad`}</strong> del insumo que compró.</p><p><strong>NOTA:</strong> Este campo solo recibe números positivos.</p>
          </div>
          <div className=" w-auto">           
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/85e0d3d6-b1d4-418f-bfeb-ebc8dccbd889/61273665-e9cb-4769-b796-daaf73cea15e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=533&mark-y=200&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yMDQmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Cantidad del insumo" />
          </div>         
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">       
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/6a3c38dc-344d-4321-8b3d-13a0f796f3b7/f6c82fe8-fabc-4b41-8d50-1aae6a54b46e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=735&mark-y=200&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yMDQmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Precio unitario del insumo" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">24. Precio unitario del insumo</p>
            <p className="text-justify text-md">Luego debe ingresar el precio unitario del insumo que compró.<strong>NOTA:</strong> Este campo solo acepta números positivos mayores a 200.</p>
            <p><strong>NOTA:</strong> Todos los campos son obligatorios.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">25. Botón Agregar</p>
            <p className="text-justify pr-7 text-md">Cuando haya completado todos los campos correctamente debe pulsar el botón <strong>{`"+ Agregar"`}</strong> para que la orden se guarde satisfactoriamente.</p>
          </div>
          <div className="w-auto">        
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/5c1a9338-d3a5-4bb5-bbd1-d566618d25d2/fcc9a10b-a675-441c-9c60-03706bb853d6.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1060&mark-y=200&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMDUmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Botón Agregar" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">        
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/ad20b798-c391-4854-9d9a-e47c1265b980/ed78e39d-047d-49d3-8f78-bacbcab16c9c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=319&mark-y=171&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04NDUmaD01MTEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            width={1500}  height={0} alt="Ordenes" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">26. Ordenes</p>
            <p className="text-justify text-md">En el recuadro rojo se podrá visualizar todas las ordenes registrados y puede<em>,</em><strong><em> editar</em></strong> la cantidad del insumo y <strong><em>eliminar</em></strong> las ordenes con los botones que hay en cada una de las ordenes en el apartado <strong>{`"Acciones"`}.</strong></p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">27. Editar la cantidad de insumo</p>
            <p className="text-justify pr-7 text-md">Si luego de agregar la orden a la compra, quiere cambiar la cantidad del insumo, debe pulsar el botón del lápiz que esta seleccionado en el recuadro rojo.</p>
          </div>
          <div className="w-auto">   
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/9c0e74ed-c848-4eed-8990-3eed0cb7c01a/5b40b305-ce06-49d1-b5c3-467705931f25.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1078&mark-y=284&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MCZoPTQwJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            width={1500}  height={0} alt="Editar la cantidad de insumo" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">   
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/96bcf9a1-0612-4bc6-9a73-7c7ab34b6c01/4480185f-eb4c-4136-8ab6-2a9838115409.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=428&mark-y=390&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0zNDQmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Editar la cantidad de insumo" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">28. Editar la cantidad de insumo</p>
            <p className="text-justify text-md">Después de pulsar el botón del lápiz, podrás ingresar la nueva cantidad del insumo como el recuadro rojo lo indica.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">29. Editar la cantidad de insumo</p>
            <p className="text-justify pr-7 text-md">Para guardar la nueva cantidad asignada al insumo debe pulsar el botón <strong>{`"Actualizar cambios"`}</strong>.</p>
          </div>
          <div className="w-auto">      
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/0f26aacb-e771-497b-872f-f0e97c7d6818/f32703f8-2ccb-4ebf-870f-9421beede613.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=621&mark-y=446&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNTAmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Editar la cantidad de insumo" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">           
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/c73165d5-a57b-4617-b719-0cf9696ceaa6/569941e0-33ed-4ad5-af1a-d83cddf4d819.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1117&mark-y=284&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MCZoPTQwJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
             width={1500}  height={0} alt="Eliminar orden" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">30. Eliminar orden</p>
            <p className="text-justify text-md">i quiere eliminar una de las ordenes de la compra, puede hacerlo pulsando el botón rojo <strong>{`"basura"`}</strong>, ubicado en cada una de las ordenes del apartado<strong>{`"Acciones"`}.</strong>.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">31. Eliminar orden</p>
            <p className="text-justify pr-7 text-md">Luego de pulsar el botón de <strong>{`"basura"`}</strong>, se abrirá un mensaje de confirmación para validar que si esté seguro de eliminar la orden, podrá eliminarla al pulsar el botón rojo <strong>{`"Eliminar"`}</strong>.</p>
          </div>
          <div className="w-auto">         
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/b0ec1f73-9f3f-45e9-8e69-55eb537cdebc/8a2b8847-e88c-4cea-99eb-ff51ee222bc4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=728&mark-y=418&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04NCZoPTQwJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            width={1500}  height={0} alt="Eliminar orden" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">           
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/caac7d84-a002-48f6-89ff-33028bc5777e/abe19fe4-d628-45e5-a75b-074528e6de8f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=494&mark-y=200&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MCZoPTQwJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
             width={1500}  height={0} alt="Agregar un nuevo insumo" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">32. Agregar un nuevo insumo</p>
            <p className="text-justify text-md">Si en el momento de registrar una orden nota que no hay un insumo registrado, puede registrarlo desde el botón <strong>{`"+"`}</strong> al lado de seleccionar insumo, no es necesario registrarlo desde el módulo de insumos.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">33. Agregar nuevo insumo</p>
            <p className="text-justify pr-7 text-md">Después de pulsar el botón <strong>{`"+"`}</strong>, se abrirá el formulario de insumo, el cual debe rellenar en su totalidad. En nombre debe ingresar el nombre del insumo</p><p><strong>NOTA:</strong> El nombre es un campo único, por lo tanto no se puede repetir.</p>
          </div>
          <div className="w-auto">           
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/9e7fa3b8-7010-4327-8a56-75a84466ef71/ea77b880-589d-403f-a887-87b58f224c65.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=390&mark-y=303&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MjImaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Agregar nuevo insumo" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/93e15c86-5df1-459f-a32b-f82a1dd60e5a/5273b2a9-dc78-40c0-932a-73eebb0d8a67.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=390&mark-y=364&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MjImaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Formulario de insumos" />          
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">34. Formulario de insumos</p>
            <p className="text-justify text-md">También debe rellenar el campo <strong>{`"Precio"`}</strong> con solo números positivos.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">35. Formulario de insumos</p>
            <p className="text-justify pr-7 text-md">En el campo <strong>{`"Cantidad en stock"`}</strong>, debe ingresar la cantidad que haya disponible en el momento del registro.</p>
          </div>
          <div className="w-auto">           
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/7b9e8fab-9476-41d3-91fa-a978190f1f65/1cd7f2cc-1909-4a99-95bf-1453fea9f483.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=390&mark-y=426&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MjImaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Formulario de insumos" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">            
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/c40bd7e2-b9b7-40a8-9e7a-a8eeed45a2e4/c19aa3eb-7faf-4d4e-a309-2b702960f7ab.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=390&mark-y=487&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MjImaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Formulario de insumos" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">36. Formulario de insumos</p>
            <p className="text-justify text-md">Continuando con el registro debe seleccionar la unidad de medida del insumo ya sea <strong>{`"Kilogramos"`}</strong>, <strong>{`"Gramos"`}</strong> o <strong>{`"Unidades"`}</strong>.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">37. Formulario de insumos</p>
            <p className="text-justify pr-7 text-md">Cuando ya estén todos los campos diligenciados correctamente, pulse el botón <strong>{`"Registrar insumo"`}</strong>.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/ccfb413a-677e-4ccd-9247-541e5543822b/20364259-847e-4d3f-a9e5-4f490a73ca44.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=673&mark-y=533&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMzkmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Formulario de insumos" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">            
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/3d293d93-a892-40ee-9179-279d2443c15b/8c9b5de9-193d-482d-bd95-e8afa77a6ebf.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=258&mark-y=451&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MCZoPTQwJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            width={1500}  height={0} alt="Agregar un nuevo proveedor" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">38. Agregar un nuevo proveedor</p>
            <p className="text-justify text-md">Si en el momento de registrar una compra, nota que no hay un proveedor registrado, puede registrarlo desde el botón <strong>{`"+"`}</strong>, No es necesario que se registre desde el módulo de proveedores.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">39. Agregar nuevo proveedor</p>
            <p className="text-justify text-md">Después de pulsar el botón <strong>{`"+"`}</strong>, se abrirá el formulario de proveedor, el cual debe rellenar en su totalidad. Inicialmente debe rellenar el campo de <strong>{`"NIT"`}</strong></p><p><strong>NOTA:</strong> El NIT es un campo único, por lo tanto no se puede repetir.</p>
          </div>
          <div className="w-auto">            
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/16da2f25-5e10-42d1-9812-a22728ec1cb4/aa65ba9f-1fca-4619-ac24-ccbfb1e9d65d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=390&mark-y=242&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MjImaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Agregar nuevo proveedor" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">            
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/cbf706c6-1ad0-46c3-9c58-00698e40971e/34b8c698-1dff-4da4-862f-a09d2c13efd2.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=390&mark-y=303&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MjImaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Formulario de proveedores" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">40. Formulario de proveedores</p>
            <p className="text-justify text-md">Para continuar debes rellenar el campo de <strong>{`"Nombre"`}</strong>.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">41. Formulario de proveedores.</p>
            <p className="text-justify text-md">También debes rellenar el campo de <strong>{`"Empresa"`}</strong>.</p>
          </div>
          <div className="w-auto">            
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/bee92aa0-c831-4542-b755-678b283ed872/a043c6b3-7c1d-46b5-83ab-4d2d634aede0.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=390&mark-y=364&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MjImaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Formulario de proveedores." />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">            
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/ed9f874d-2ba4-40eb-aa26-c37a2ed97773/6e2d654f-216e-48fa-b9d7-68cddd78d25f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=390&mark-y=426&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MjImaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Formulario de proveedores" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">42. Formulario de proveedores</p>
            <p className="text-justify text-md">En el campo <strong>{`"Dirección"`}</strong> debe ingresar la dirección en donde esta ubicada la empresa del proveedor.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">43. Formulario de proveedores</p>
            <p className="text-justify text-md">En el campo <strong>{`"Telefono"`}</strong> debe ingresar el número de contacto del proveedor.</p>
          </div>
          <div className="w-auto">            
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/6987a352-e5ab-4abe-bcd6-625bd4a8f33a/136b1ba9-a48e-43b4-90ec-4ac569d42f5e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=390&mark-y=487&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MjImaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Formulario de proveedores" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">            
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/280f11df-c3e3-40ed-8c85-5981c5509ec8/1c4e0ada-22da-490a-8022-ba49ef30f178.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=390&mark-y=548&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MjImaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Formulario de proveedores" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">44. Formulario de proveedores</p>
            <p className="text-justify text-md">Y por ultimo debe ingresar la <strong>{`"Ciudad"`}</strong> en la cual esta ubicada la empresa del proveedor.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">45. Formulario de proveedores</p>
            <p className="text-justify text-md">Para hacer el registro de proveedor exitoso, debe asegurarse que todos los campos estén completos para luego pulsar el botón de <strong>{`"Registrar proveedor"`}</strong>.</p>
          </div>
          <div className="w-auto">            
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/28c25888-dd6a-42d8-b51b-869a1c289864/c2a01045-6de9-40e4-a640-454563ad7fe7.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=655&mark-y=595&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNTcmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Formulario de proveedores" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">            
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/a29f37c6-42c6-40e3-b852-a6922e166281/2366f074-317c-4326-ad93-5c06d4bd617d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=52&mark-y=580&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNDYmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Consolidar compra" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">46. Consolidar compra</p>
            <p className="text-justify text-md">Cuando toda la información de la compra y las ordenes este completa, pulse el botón <strong>{`"Consolidar compra"`}</strong> y automáticamente guardará la compra con la información anteriormente diligenciada.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">47. Cancelar compra</p>
            <p className="text-justify text-md">Y si por el contrario ya no desea registrar la compra, pulse el botón de <strong>{`"Cancelar compra"`}</strong> y automaticamente la compra se eliminará y no quedará registro alguno de la información relacionada a esta compra.</p>
          </div>
          <div className="w-auto">            
            <Image src="https://images.tango.us/workflows/3bb9e704-3437-42df-bdc5-9cd0733a435d/steps/79abd1f8-e80b-45e2-8134-a0ce72d73a3e/6d53a5f5-711b-43b0-b5dc-18ed1684835e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=52&mark-y=627&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNDYmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            width={1500}  height={0} alt="Cancelar compra" />
          </div>
        </div>
      </div>   
    )
  }