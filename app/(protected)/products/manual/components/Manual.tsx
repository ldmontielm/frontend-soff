import Image from 'next/image'

export default function Manual() {
    return (
      <div className="mx-auto max-w-7xl p-4">
        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">1. Ingreso a productos</p>
            <p className="text-justify text-md mr-9 mb-9">Para ingresar al módulo de productos, primero, debe pulsar con el botón izquierdo del mouse sobre el recuadro ubicado en la parte superior izquierda de la pantalla, como se muestra en la imagen.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/c771a426-16c7-4127-b107-457f1a36578a/d0a15c9e-1daa-4a4e-a0b1-4a791d8371fb.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=12&mark-y=22&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MiZoPTQyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" 
            alt="Ingreso a productos" />
          </div>
        </div>
        
        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/35490158-1646-4d06-933f-05009a8ce6b0/066f387d-e689-447f-9504-7d3776e9519b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=24&mark-y=290&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTMlMkNGRjc0NDImdz00MDcmaD02NiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
            alt="Ingreso a productos" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">2. Ingreso a productos</p>
            <p className="text-justify text-md">En el momento que se despliegue el menú con todos los módulos a los que tiene acceso, debe elegir el modulo al que desea ir, en este caso <strong>{`&quot;Productos&quot;`}</strong>.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">3. Portada de productos</p>
            <p className="text-justify pr-7 text-md">Después de pulsar el módulo <strong>"Productos"</strong>, te llevará a la portada principal que tiene la tabla de todos los productos registrados, el <strong>buscador</strong>, botón de <strong>"Columnas"</strong>, botón de <strong>"Activos/Inactivos"</strong>, botón de <strong>"Registrar producto"</strong> y las "<strong>Acciones"</strong>.</p>
          </div>
          <div className="w-full">
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/c9161b94-1e16-4b3b-9db3-50c035477e87/73021db5-1fa4-4202-a01d-622870a2a4eb.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" 
            alt="Portada de productos" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/8f7fd299-bc21-4358-ad84-2d4c90509566/451839ee-7c7b-4641-9819-e4d16e3ef532.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=12&mark-y=196&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0zNzMmaD00MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
              alt="Buscador de productos" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">4. Buscador de productos</p>
            <p className="text-justify text-md">Puede buscar productos por el nombre, para encontrar uno en específico con mayor facilidad, pulsando el botón izquierdo del mouse sobre la barra de <strong>"Búsqueda"</strong>, como se muestra en la imagen.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">5. Botón Columnas</p>
            <p className="text-justify pr-7 text-md">Al pulsar el botón de <strong>"Columnas"</strong>, se desplegará una lista de todas las columnas de la tabla, las cuales puede ocultar y mostrar a su gusto.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/51b8dbd5-c77c-4dd6-a08b-9526e137e267/80b88f9c-ba9d-436a-9540-cc0a3ad6c958.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=798&mark-y=196&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMjcmaD00MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
             alt="Botón Columnas" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/788ee299-b6e2-4ba1-bf12-ac7ca58ca417/c7254971-12ce-4637-b5e5-c3000284b035.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=802&mark-y=318&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00NyZoPTQ3JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            alt="Lista de columnas" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">6. Lista de columnas</p>
            <p className="text-justify text-md">En esta lista desplegable, para las columnas que no quiere mostrar, se debe quitar la marca de verificación <strong>(✓)</strong> al pulsar una vez sobre ella, y las que sí quiere que se muestren en la tabla, deberán tener la marca de verificación.</p>
          </div>
        </div>


        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">7. Registrar producto</p>
            <p className="text-justify pr-7 text-md">Al pulsar el botón azul <strong>"Registrar producto"</strong> de la parte superior derecha de la pantalla, creará un nuevo producto y abrirá una nueva pestaña para rellenar todos los campos del producto.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/f218477c-15cd-44dc-8843-c7c5269186c2/d2d5dd75-ca58-4d81-bdd4-794c6c5f7cc9.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1029&mark-y=196&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNTkmaD00MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
            alt="Registrar producto" />     
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">         
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/dc7ad77e-074a-4d55-9b3e-f4ad5407e188/acfac947-db37-4610-aa36-7f280ab2cb6e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" 
            alt="Detalle del producto" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">8. Detalle del producto</p>
            <p className="text-justify text-md">Esta es la pestaña, donde puede rellenar todos los campos del producto.</p>
          </div>    
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">9. Seleccionar Insumo</p>
            <p className="text-justify pr-7 text-md">Para registrar un detalle, en primer lugar debe seleccionar un insumo, pulsando sobre el botón "<strong>seleccionar insumo" </strong>con el botón izquierdo del mouse.</p>
          </div>
          <div className="w-full">
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/2ed2546a-f8d3-448e-a72c-e9fadafb4150/baf8e283-6a04-48d4-b90f-75f47b8bd229.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=19&mark-y=247&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yMDcmaD00MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            alt="Seleccionar Insumo" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">          
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/95694b6a-0d2a-47af-a35d-376cc66b5f0b/b17677ce-2fc7-4bad-8cf5-bffa5e4376f5.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=12&mark-y=415&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xOTAmaD0zOCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            alt="Seleccionar insumo" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">10. Seleccionar insumo</p>
            <p className="text-justify text-md">Al pulsar el botón de <strong>"Seleccionar insumo"</strong> se desplegará una lista de todos los insumos registrados en el aplicativo y podrá elegir uno.</p>
           </div>
        </div> 

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">11. Seleccionar Insumo</p>
            <p className="text-justify pr-7 text-md">También, encontrará un buscador, para facilitar la búsqueda de un insumo en específico.</p>
          </div>
          <div className="w-full">
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/8a301cb2-2d9a-4e50-9a84-9b4c3b7a4b8c/d5806710-929f-4ed2-bddf-929a428ee4cd.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=48&mark-y=287&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNzEmaD01MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            alt="Seleccionar Insumo" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/23c7334d-5c65-481e-941e-aeee30e9ef03/fe730103-d61c-432b-af4e-faa1b1f7099e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=272&mark-y=241&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNDQmaD00OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            alt="Cantidad del insumo" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">12. Cantidad del insumo</p>
            <p className="text-justify text-md">Para continuar con el registro del detalle, debe ingresar la <strong>cantidad</strong> del insumo que necesita para la receta. El sistema detecta que unidad de medida es según el insumo que seleccione y lo asigna a la cantidad que ingrese, si el insumo se maneja por gramos, debe ingresar un valor relevante a gramos (<strong>200</strong>) gr y si es por unidades, igualmente (<strong>2)</strong> unds. <strong>NOTA:</strong> Este campo solo recibe números positivos.</p>           
          </div>
        </div>
 
        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">13. Botón Agregar</p>
            <p className="text-justify pr-7 text-md">Cuando ya haya completado todos los campos correctamente, debe pulsar el botón de <strong>"+ Agregar"</strong> con el botón izquierdo del mouse, para que el detalle se guarde satisfactoriamente.</p>
          </div>
          <div className="w-full">  
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/5aba40a2-ad45-4c85-a223-417ad5b76658/d55857f4-49ec-42ad-9d1e-2612634309b8.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=781&mark-y=211&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMTAmaD00MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            alt="Botón Agregar" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/1f9afaad-127a-4e86-8091-0df63f8cc7b7/4ef09a2a-a044-4a16-8c08-6deffd5ce0a7.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=13&mark-y=116&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04ODAmaD01NDQmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            alt="Detalles" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">14. Detalles</p>
            <p className="text-justify text-md">En el recuadro naranja se puede visualizar todos los detalles registrados y puede, <strong><em>editar</em></strong> la cantidad del insumo y <strong><em>eliminar</em></strong> los detalles, con los botones que hay en cada uno de los detalles en el apartado "<strong>Acciones</strong>".</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">15. Editar la cantidad del insumo</p>
            <p className="text-justify pr-7 text-md">Si luego de agregar el detalle del producto, quiere cambiar la cantidad del insumo, debe pulsar con el botón izquierdo del mouse, el botón del "<strong>lápiz</strong>" que esta seleccionado en el recuadro naranja, como se ve en la imagen.</p>
          </div>
          <div className="w-full">             
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/fc82c97a-655a-4334-a713-c79cbdb864c8/51aedb02-7b59-4e77-a206-c0de3e842789.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=800&mark-y=300&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MiZoPTQyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            alt="Editar la cantidad del insumo" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/048d4898-1190-4535-9a57-9d671e09fded/441d9c72-dd37-45b0-b512-9f5a44abb3fb.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=419&mark-y=363&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0zNjMmaD00MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            alt="Editar la cantidad del insumo" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">16. Editar la cantidad del insumo</p>
            <p className="text-justify text-md">Después de pulsar el botón del lápiz, puede ingresar la nueva cantidad del insumo, como el recuadro naranja lo indica.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">17. Editar la cantidad del insumo</p>
            <p className="text-justify pr-7 text-md">Para guardar la nueva cantidad asignada al insumo, debe pulsar el botón <strong>"Actualizar cambios" </strong>con el botón izquierdo del mouse.</p>
          </div>
          <div className="w-full">
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/6fbc20de-8dda-44e7-b74b-e9e6ece417eb/e88c5ccd-4066-4cf8-8233-1a6e7fef36ee.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=624&mark-y=423&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNTgmaD00MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            alt="Editar la cantidad del insumo" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">          
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/9219287a-650a-4651-8e0f-5b727b05ece0/fffce6b1-41c8-4cfd-94c8-746876ee9da8.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=832&mark-y=341&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00OCZoPTQ4JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            alt="Eliminar detalle" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">18. Eliminar detalle</p>
            <p className="text-justify text-md">Si quiere eliminar uno de los detalles del producto, puede hacerlo pulsando el botón rojo de <strong>"basura"</strong>, ubicado en cada una de las ordenes en el apartado de<strong> "Acciones".</strong></p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">19. Eliminar detalle</p>
            <p className="text-justify pr-7 text-md">Luego de pulsar el botón de <strong>"basura"</strong>, se abrirá un mensaje de confirmación para validar que esté seguro de eliminar el detalle, podrá eliminarlo al pulsar el botón rojo <strong>"Eliminar"</strong>.</p>
            </div>
          <div className="w-full">
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/fc7b2b2f-30fd-45f7-a35a-f79c6e35f2cb/1d188201-282b-415b-a61c-9aeae811dded.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=751&mark-y=386&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMDAmaD00NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            alt="Eliminar detalle" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/ec98d5dc-5146-4972-8aa9-8c0d80a4645f/54de4ca0-05fd-4462-81a2-6c714d830372.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=813&mark-y=615&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0zNzYmaD05MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            alt="Guardar un producto sin detalles" />          
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">20. Guardar un producto sin detalles</p>
            <p className="text-justify text-md">Si desea guardar un producto sin detalles, saldrá la alerta de "<strong>Detalles requeridos</strong>", por ende debe agregar al menos un detalle por cada producto, ya que ésto permitirá tener un control en stock al momento de vender un producto.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">21. Nombre del producto</p>
            <p className="text-justify pr-7 text-md">Para ingresar la información del producto, en primer lugar debe ingresar el nombre de este, como se ve en la imagen.</p>
            <p><strong>NOTA</strong>: El nombre del producto es un campo único por lo tanto no se puede repetir.</p>
          </div>
          <div className="w-full">           
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/4db5614e-ad6e-4195-a6ca-b8e4adf6f6f3/227b7f57-eea7-41d2-960d-84203150b71e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=920&mark-y=308&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNTEmaD00OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            alt="Nombre del producto" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">     
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/706352cc-5f6e-4700-9755-36ce2136b022/8141971d-5a9c-4886-af10-e411f08b3608.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=902&mark-y=373&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNDYmaD00NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            alt="Precio del producto" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">22. Precio del producto</p>
            <p className="text-justify text-md">Luego, debe ingresar el precio del producto, teniendo en cuanta el costo de este, el cual es la suma de todos los insumos necesarios para un producto, por ende, debe ingresar un valor superior al costo, en este caso, el costo es de $10.400, entonces, ingresamos un precio de $15.500.</p>
            <p><strong>NOTA:</strong> Este campo solo acepta números positivos, con un mínimo de 3 caracteres.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">23. Agregar un nuevo insumo</p>
            <p className="text-justify pr-7 text-md">Si en el momento de registrar un detalle, nota que no hay un insumo registrado, puede registrarlo desde el botón <strong>"+"</strong> al lado derecho de "<strong>seleccionar insumo</strong>", no es necesario que vaya hasta el módulo de insumos.</p>
          </div>
          <div className=" w-full">           
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/54c661d4-e582-4a1d-b9f8-1d2796e52dbf/2203dc3b-ae51-45cf-a412-4900c958ab85.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=223&mark-y=241&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00OCZoPTQ4JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            alt="Agregar un nuevo insumo" />
          </div>         
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">       
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/ab656846-10c3-46a1-95c7-0f68ac33ed17/60a10696-9f56-4a30-b410-6fee1dd0e06d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=323&mark-y=123&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01NTUmaD00NzImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            alt="Formulario de insumos" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">24. Formulario de insumos</p>
            <p className="text-justify text-md">Después de pulsar el botón <strong>"+"</strong>, se abrirá el formulario de insumo, el cual debe rellenar en su totalidad.</p>
            <p><strong>NOTA:</strong> Todos los campos son obligatorios.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">25. Formulario de insumos</p>
            <p className="text-justify pr-7 text-md">Cuando ya estén todos los campos completos correctamente, pulsa el botón <strong>"Registrar Insumo"</strong>.</p>
          </div>
          <div className="w-full">        
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/dca982fc-f5b3-4756-8b7e-c99d8e4edbed/54b83cbd-2f56-4ae5-b844-ed3e391fa3bd.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=684&mark-y=522&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNjcmaD00NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            alt="Formulario de insumos" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">        
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/05807d89-5f5c-4639-a061-ca0845652ab8/8d86a59f-0286-41df-8169-abec59348e42.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=916&mark-y=548&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNTUmaD00MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            alt="Guardar producto" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">26. Guardar producto</p>
            <p className="text-justify text-md">Cuando esté seguro que toda la información del producto y los detalles esta completa, pulse el botón <strong>"Guardar producto"</strong> el cual automáticamente guardará el producto con su respectiva información anteriormente diligenciada.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">27. Cancelar producto</p>
            <p className="text-justify pr-7 text-md">Si por el contrario se arrepiente de guardar este producto, pulsae con el botón izquierdo del mouse el botón de <strong>"Cancelar"</strong>, automáticamente el producto se elimina y no queda registro alguno de la información que acaba de ingresar.</p>
          </div>
          <div className="w-full">   
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/29e667a4-d44e-4cb1-bb56-62e0eb0f0335/3a1e5513-39c6-46a7-96db-7e23e068aa72.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=916&mark-y=597&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNTUmaD00MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            alt="Cancelar producto" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">   
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/888bc4a4-918e-4842-b4e3-d9a9822c8b7a/6c164ffa-1443-4f1d-b4a8-c4b3497e1a2a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=945&mark-y=301&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04MyZoPTI2JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            alt="Cambiar estado" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">28. Cambiar estado</p>
            <p className="text-justify text-md">Cada producto tiene un apartado de "<strong>Estado"</strong>, así que, puede cambiar el estado de un producto. Dependiendo del estado actual este cambia, por ejemplo, si está activo, al pulsar sobre el con el botón izquierdo del mouse, cambia su color a rojo y cambia el texto a Inactivo, y viceversa.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">29. Ver productos Inactivos o Activos</p>
            <p className="text-justify pr-7 text-md">Al pulsar el botón "<strong>Inactivos/Activos" </strong>con el botón izquierdo del mouse, puede ver los productos activos o inactivos según sea el caso.</p>
          </div>
          <div className="w-full">      
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/8d8646fc-b610-4ca0-89d3-9f8f87d202fa/ad0984e2-473b-4b18-83fa-a9d1fd603121.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=928&mark-y=196&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz05NyZoPTQyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            alt="Ver productos Inactivos" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">           
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/d2aba2d1-8fb4-40aa-b375-ec29db9fb060/64abea48-bd69-4988-9132-c562239cc07e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1001&mark-y=331&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMjkmaD04NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
             alt="Productos inactivos" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">30. Productos inactivos</p>
            <p className="text-justify text-md">Al pulsar el botón "<strong>Inactivos</strong>", va a ver la lista de los productos con este estado, estos no tendrán ninguna acción disponible, como se ve en la imagen. Si desea ver sus acciones debe cambiar su estado a Activo. Como se explicó en el paso 28.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">31. Acciones para el producto</p>
            <p className="text-justify pr-7 text-md">Cómo se mencionó anteriormente, cuando el estado de un producto está inactivo no tiene acciones, pero cuando está activo pasa todo lo contrario, estás acciones se desplegan al pulsar con el botón izquierdo del mouse sobre el botón "<strong>...</strong>" en el apartado de "<strong>Acciones</strong>", que está asociado a cada producto, como se muestra en la imagen.</p>
          </div>
          <div className="w-auto">         
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/0d6f0d85-1b16-441d-b689-a495156ac57a/daded616-c280-479a-9631-d9e3bdfca49e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1087&mark-y=292&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MiZoPTQyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            alt="Acciones para el producto" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">           
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/f27f2faf-1567-4dd0-b27f-d219133c8332/c5d10535-d793-416c-8b33-f2105702ba66.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=996&mark-y=367&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMjgmaD00MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
             alt="Lista de Acciones" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">32. Lista de Acciones</p>
            <p className="text-justify text-md">Después de pulsar el icono aparecerán las acciones, la primera opción <strong>"Editar"</strong>, te abrirá una nueva pestaña para actualizar los campos que desees del producto ya registrado en el aplicativo.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">33. Editar producto</p>
            <p className="text-justify pr-7 text-md">Si agrega o elimina detalles, el costo del producto puede variar, como se ve en la imagen, así que, se recomienda actualizar el precio de venta, según le convenga. Recuerde, que en este apartado puede actualizar cualquier otra información.</p>
            <p><strong>NOTA: </strong>Está página tiene la misma funcionalidad que cuando se registra un producto, a excepción de que no tiene el botón "<strong>Cancelar"</strong>, así que, si desea volver a la página principal de productos, pulse sobre el botón<strong> "Guarguar cambios</strong>".</p>
          </div>
          <div className="w-auto">           
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/743f5b30-e7a1-4f23-9158-b36471038ea1/736644a8-0266-4fa1-8298-7e4b68f02d9b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7481&fp-y=0.6000&fp-z=2.0000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=694&mark-y=407&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MDQmaD0xNjYmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            alt="Editar producto" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/038a1c79-9dd6-4d1e-813e-8b3a93925d3e/a8652b0e-bc09-45fb-b4d2-15af581086a8.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=916&mark-y=548&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNTUmaD00MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            alt="Guardar cambios" />          
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">34. Guardar cambios</p>
            <p className="text-justify text-md">Cuando esté seguro que toda la información que actualizó del producto y/o los detalles está completa, pulse el botón <strong>"Guardar cambios"</strong> el cual automáticamente guardará y actualizará el producto con su respectiva información anteriormente diligenciada.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">35. Lista de Acciones</p>
            <p className="text-justify pr-7 text-md">La segunda opción de las acciones, mostrará información general del producto.</p>
          </div>
          <div className="w-auto">           
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/375f3e5e-7dd0-4e89-9305-26484dc03d85/c7af3518-1596-403a-9706-00868e1e8262.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=996&mark-y=401&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMjgmaD00MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            alt="Lista de Acciones" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">            
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/8c97f8e1-5198-46ba-8fe1-84bf06d6ece6/8a987aa8-eab0-41e4-b087-9304cb4ddbae.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n"
            alt="Ver detalle" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">36. Ver detalle</p>
            <p className="text-justify text-md">Al pulsar en la acción "<strong>Ver detalle</strong>", mostrará el detalle del producto, como:<strong> Nombre</strong>, <strong>Costo</strong>, <strong>Precio de venta</strong> y todos sus respectivos <strong>detalles</strong>.</p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">37. Ordenador de columnas</p>
            <p className="text-justify pr-7 text-md">Al lado de las columnas <strong>"Nombre"</strong>, <strong>"Costo"</strong>, <strong>"Precio de venta"</strong> y <strong>"Fecha de registro"</strong> hay un ícono de orden, y al pulsarlo el ordenará la columna de manera ascendente o descendente, pulsando varias veces sobre él.</p>
          </div>
          <div className="w-auto">
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/7902f3af-e49f-4d7a-ba96-5451369b62f1/849770ca-00ec-4a5c-af10-3e6e778e925c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=14&mark-y=319&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yMzYmaD0xNzMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            alt="Ordenador de columnas" />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">            
            <Image src="https://images.tango.us/workflows/b0efbbb4-2321-434d-8a84-ddce4bbdac56/steps/51d0c8cd-912e-4424-952c-d9c93ff4cb09/f726282a-52ce-47aa-a076-14ebb55e957f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=273&mark-y=323&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNDQmaD0xODkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            alt="Paginación" />
          </div>
          <div className="w-auto p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">38. Paginación</p>
            <p className="text-justify text-md">Al exceder un registro de 10 productos, en la tabla principal se activará la parte de paginación para una mejor visibilidad de la información. </p>
            <p><strong>NOTA: </strong>Si desea ver más de 10 registros, lo puede hacer desplegando la lista para ver la cantidad que desea, como se ve en la imagen.</p>
          </div>
        </div>
      </div>   
    )
  }