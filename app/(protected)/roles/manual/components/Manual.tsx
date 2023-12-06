import React from 'react'
import Image from 'next/image'

export default function Manual() {
    return (
      <div className="mx-auto max-w-7xl p-4">
        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
          <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">1. Ingreso a el menu</p>
            <p className="text-justify text-md mr-9 mb-9">Primero debe Deslizar el puntero del mouse sobre el menú de opciones, luego debe pulsar con el botón izquierdo del mouse sobre el recuadro del menú ubicado en la parte superior izquierda de la pantalla como se muestra en la imagen.</p>
          </div>

        <div className="w-auto">
          <Image
            src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/54d1993a-656e-4f53-92c5-83c6673d4b85/55aa9eb8-26f3-4ef0-b7bc-adeba97f5866.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0225&fp-y=0.0337&fp-z=2.8990&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=29&mark-y=25&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz05OCZoPTk4JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
            style={{ borderRadius: "8px", border: "1px solid #F4F2F7" }}
            width={1500}
            height={0}
            alt="Para ir al Modulo de Roles o Usuarios"
          />
        </div>
      </div>

      <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
        <div className="w-auto pr-7">
          <Image
            src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/4497735f-f3e6-4aa4-a583-da9ec2d13adb/502efd76-90bb-47c9-8d94-fb761f231a15.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1286&fp-y=0.5000&fp-z=1.0041&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=3&mark-y=2&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0zMDQmaD03NTImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
            style={{ borderRadius: "8px", border: "1px solid #F4F2F7" }}
            width={1500}
            height={0}
            alt="Ingresas a la opción de configuración"
          />
        </div>
        <div className="w-full p-4">
          <p className="p-5 pl-0 text-black text-2xl font-bold">
            2. Ingresas a la opción de configuración
          </p>
          <p className="text-justify text-md">
            Debe dirigir el puntero a la parte inferior de la barra de
            navegación con los módulos y posicionarse sobre la opción de
            configuración.
          </p>
        </div>
      </div>

      <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
        <div className="w-full p-4 ">
          <p className="p-5 pl-0 text-black text-2xl font-bold">
            3. Buscar el modulo {`"Roles"`}.
          </p>
          <p className="text-justify text-md mr-9 mb-9">
            Dirígete al botón {`"Roles"`} identificado por un icono de candado. Al
            presionar este botón, serás redirigido al módulo correspondiente de
           {` "Roles"`}.
          </p>
        </div>
        <div className="w-auto">
          <Image
            src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/7d430c61-61a5-48d4-bd29-3cb105bc97a3/38f4cf6d-83ad-400a-b3ef-86a6f33c7127.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1232&fp-y=0.5393&fp-z=1.9209&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=30&mark-y=336&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01MDgmaD04MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
            style={{ borderRadius: "8px", border: "1px solid #F4F2F7" }}
            width={1500}
            height={0}
            alt='Buscar el modulo Roles.'
          />
        </div>
      </div>

      <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
        <div className="w-auto pr-7">
          <Image
            src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/c04dc620-8060-489d-a833-4e9f30182e43/182ce1d7-24c6-4c63-8307-12ba90df02b8.png?fm=png&crop=focalpoint&fit=crop&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n"
            style={{ borderRadius: "8px", border: "1px solid #F4F2F7" }}
            width={1500}
            height={0}
            alt="Modulo de Roles"
          />
        </div>
        <div className="w-full p-4">
          <p className="p-5 pl-0 text-black text-2xl font-bold">
            4. Modulo de Roles
          </p>
          <p className="text-justify text-md">
            Lo primero que encontrarás al acceder al módulo es la {`"Tabla de
            Roles Registrados"`}. Esta tabla presenta una visión general de todos
            los roles existentes en el sistema. Cada fila representa un rol
            único, y las columnas muestran información relevante sobre cada uno.
          </p>
        </div>
      </div>






      <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
  <div className="w-full p-4">
    <p className="p-5 pl-0 text-black text-2xl font-bold">5. Opciones de Visualización de Columnas en la tabla de roles registrados</p>
    <p className="text-justify text-md mb-9">Dirígete a esta opción con el puntero en la esquina superior derecha de la tabla de roles, encontrarás un botón llamado {`"Columnas"`}. Este botón desplegará un pequeño menú.</p>
  </div>
  <div className="w-auto">
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/4e55c4c5-d242-4e72-9a82-c62d3ba00fbb/2d5d4d8e-5c8b-4123-a7d5-c72c2d06df43.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7564&fp-y=0.2408&fp-z=2.8994&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=454&mark-y=343&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yOTEmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
      style={{ borderRadius: '8px', border: '1px solid #F4F2F7' }}
      width={1500}
      height={0}
      alt="Opciones de Visualización de Columnas en la tabla de roles registrados"
    />
  </div>
</div>

<div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
  <div className="w-auto pr-7">
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/3076ccbd-9736-4711-879f-8c85ea824ed6/a4da201d-e7c3-4428-ab7d-2405fa0dc7df.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7560&fp-y=0.3327&fp-z=2.2374&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=478&mark-y=265&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNDUmaD0yNTkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
      style={{ borderRadius: '8px', border: '1px solid #F4F2F7' }}
      width={1500}
      height={0}
      alt="Botones de Opciones de Visualización para quitar columnas"
    />
  </div>
  <div className="w-full p-4">
    <p className="p-5 pl-0 text-black text-2xl font-bold">6. Botones de Opciones de Visualización para quitar columnas</p>
    <p className="text-justify text-md mb-2">Una vez que hayas desplegado el menú según las instrucciones anteriores, 
    notarás la presencia de una pequeña casilla marcada con el nombre de una columna. 
    Al dirigir el puntero hacia una casilla azul y hacer clic, podrás observar en tiempo real 
    cómo la información de esa columna desaparece de la tabla. Si decides volver a marcar l
    a casilla, la columna reaparecerá instantáneamente.</p>
    <p className="mb-2"></p>
    <ul className="list-disc pl-5 mb-2">
      <li>
        <p>Nota: Es relevante destacar que esta opción no está disponible en todas las columnas.</p>
      </li>
    </ul>
  </div>
</div>



<div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
  <div className="w-full p-4">
    <h3 className="p-5 pl-0 text-black text-2xl font-bold">7. Gestión de Permisos del Rol</h3>
    <h3 className="text-black text-2xl font-bold">Botón {`"Permisos"`}</h3>
    <p className="text-justify text-md mb-9">Dirígete a la tabla y localiza la columna {`'Permisos'`}; allí encontrarás un botón etiquetado como {`'Permisos'`}. Este botón desplegará un menú flotante.</p>
  </div>
  <div className="w-auto">
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/41be2879-dab7-4a3c-8edf-d1db7a587d82/b63da5d0-31ac-478a-90cd-b61bfbf36e78.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3690&fp-y=0.3575&fp-z=2.7049&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=481&mark-y=354&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yMjYmaD05NiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
      width={1500}
      height={0}
      alt="Gestión de Permisos del Rol" style={{ borderRadius: "8px", border: "1px solid #F4F2F7" }} />
  </div>
</div>

<div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
  <div className="w-auto pr-7">
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/ab77511c-c114-4572-9a73-9b7d546c5cd3/4211e0b1-fee7-482f-a93b-54f0aad603f4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&fp-z=1.5420&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=278&mark-y=232&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02NDUmaD0zMjUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
      width={1500}  
      height={0} 
      alt="Visualización de Permisos Asociados a un Rol" style={{ borderRadius: "8px", border: "1px solid #F4F2F7" }} />
  </div>
  <div className="w-full p-4">
    <h3 className="p-5 pl-0 text-black text-2xl font-bold">8. Visualización de Permisos Asociados a un Rol</h3>
    <h3 className="text-black text-2xl font-bold">Visualización de Permisos</h3>
    <p className="text-justify text-md">Siguiendo los pasos anteriores, la ventana desplegada mostrará en tiempo real los permisos asociados al rol que seleccionaste.</p>
  </div>
</div>




<div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
  <div className="w-full p-4">
    <h3 className="p-5 pl-0 text-black text-2xl font-bold">9. Botón Volver en la ventana para visualizar los permisos de un rol</h3>
    <h3 className="text-black text-2xl font-bold">Botón { `"Volver"`}</h3>
    <p className="text-justify text-md mb-9">Incluye un botón etiquetado como {`'Volver'`} en la ventana. Dirígete con el puntero hacia la parte inferior donde se encuentra este botón. Al presionarlo, podrás cerrar la ventana modal y regresar a la tabla principal después de visualizar los permisos asociados a un rol.</p>
  </div>
  <div className="w-auto">
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/6a3f928b-c666-444b-8abe-97cc70be9a1b/ef88776f-4bcc-4cf7-b2e4-b1c5c01cbec9.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5857&fp-z=1.6260&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=293&mark-y=365&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02MTUmaD01OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
      width={1500} 
      height={0} 
      alt="Botón Volver en la ventana para visualizar los permisos de un rol" style={{ borderRadius: "8px", border: "1px solid #F4F2F7" }} />
  </div>
</div>

<div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
  <div className="w-auto pr-7">
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/fcfbf5a6-f9f6-4900-ae74-6fe80c98a8fd/c73644cd-88eb-4cb2-a517-291279c7b011.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6149&fp-y=0.3607&fp-z=2.6902&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=484&mark-y=358&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yMzImaD03MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
      width={1500} 
      height={0} 
      alt="Cambio de Estado del Rol" style={{ borderRadius: "8px", border: "1px solid #F4F2F7" }} />
  </div>
  <div className="w-full p-4">
    <h3 className="p-5 pl-0 text-black text-2xl font-bold">10. Cambio de Estado del Rol</h3>
    <h3 className="text-black text-2xl font-bold">Botón de Cambio de Estado</h3>
    <p className="text-justify text-md">Muévete con el puntero hacia la columna {`'Estado'`}; allí verás un botón etiquetado como {`'Activo'`}. 
    Este botón te permite cambiar el estado de un rol; al hacer presionar sobre él, el rol desaparecerá de
     la tabla, ya que esta solo muestra los roles activos.</p>
    <p></p>
    <ul>
      <li>
        <p><strong>Nota:</strong> No todos los roles pueden cambiar de estado, como por ejemplo, los roles {`'Administrador'`} y {`'Base'`}; el sistema no lo permitirá</p>
      </li>
    </ul>
  </div>
</div>






<div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
            11. Botón para Filtrar Roles Inactivos
            </p>
            <p className="text-justify text-md mr-9 mb-9">
              <strong>Botón de filtrado de roles {`"Inactivos"`} </strong>
              Dirígete hacia la esquina superior derecha de la tabla, allí encontrarás 
              un botón etiquetado como {`'Inactivos'`}. Al presionar este botón, la tabla se actualizará,
              permitiéndote filtrar y mostrar exclusivamente los roles que actualmente se encuentran inactivos.
            </p>
            </div>
            <div className="w-auto">
            <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/19f3cf67-13ab-46a7-b13d-8d52eef284db/28fd97de-eb9e-418a-b3c7-c6f811602c8f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8318&fp-y=0.2408&fp-z=2.8994&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=496&mark-y=343&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yMzgmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
            width="1500" 
            height={0}
            alt="Botón para Filtrar Roles Inactivos" />
            </div>
        </div>


<div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
            <div className="w-auto ">
              <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/eb2e7213-bef4-4bd2-b3c4-4b42b3a83964/9a53f171-7232-4f1a-98c5-c1a241fe3e16.png?fm=png&crop=focalpoint&fit=crop&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" 
              width={1500}
              height={0} 
              alt="Tabla con roles &quot;Inactivo&quot; y botón para cambiar de estado a &quot;Activo&quot;" />
           
            </div>

            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
              12. Tabla con roles {`"Inactivo"`} y botón para cambiar de estado a {`"Activo"`}
            </p>
            <p className="text-justify text-md mr-9 mb-9">
              <strong>Botón de Cambio de Estado</strong>Muévete con el puntero hacia la columna {`'Estado'`}; 
              allí verás un botón etiquetado como {`'Inactivo'`}. 
              Este botón te permite cambiar el estado de un rol; al hacer presionar sobre él, el rol desaparecerá de la tabla, 
              ya que esta solo muestra los roles Inactivos.
            </p>
            </div>
    </div>







<div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
  <div className="w-full p-4">
    <h3 className="p-5 pl-0 text-black text-2xl font-bold">13. Botón para filtrar roles {`"Activos"`}</h3>
    <p className="text-justify text-md">Dirígete hacia la esquina superior derecha de la tabla, allí encontrarás un botón etiquetado como {`'Activos'`}. Al 
    presionar este botón, la tabla se actualizará, permitiéndote filtrar y mostrar exclusivamente los roles que actualmente se encuentran Activos.</p>
  </div>
  <div className="w-auto">
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/22202544-7fb4-47e1-ac49-eb46dce11368/5cf9dbb0-92dd-49e5-bd24-c149e7cba450.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8358&fp-y=0.2408&fp-z=2.8994&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=521&mark-y=343&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yMTUmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
      width={1500} 
      height={0} 
      alt="Botón para Filtrar Roles Activos" style={{ borderRadius: "8px", border: "1px solid #F4F2F7" }} />
  </div>
</div>

<div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
  <div className="w-auto pr-7">
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/33d71b59-7211-4102-888b-cbf7707db180/3b5354e8-7317-4a4d-8417-a6a6d8aa7783.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" 
      width={1500} 
      height={0} 
      alt="Funcionalidad de Filtrado" style={{ borderRadius: "8px", border: "1px solid #F4F2F7" }} />
  </div>
  <div className="w-full p-4">
    <h3 className="p-5 pl-0 text-black text-2xl font-bold">14. Funcionalidad de Filtrado</h3>
    <p className="text-justify text-md">Al hacer clic en el botón de filtrado, la tabla se actualizará automáticamente para mostrar solo los roles que están marcados como {`"Activos"`}. 
    Los roles Inactivos se ocultarán.</p>
  </div>
</div>






<div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
  <div className="w-full p-4">
    <h3 className="p-5 pl-0 text-black text-2xl font-bold">15. Botón de Acciones para un rol</h3>
    <h3 className="text-black text-2xl font-bold">Botón de Tres Puntos {`"Acciones"`}</h3>
    <p className="text-justify text-md">Dirígete a la columna {`'Acciones'`} de cada fila en la tabla, donde encontrarás un botón representado por tres puntos {`'...'`}. 
    Al presionar este botón, se desplegará un pequeño menú que ofrece opciones adicionales para el rol correspondiente.</p>
  </div>
  <div className="w-auto">
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/e2376687-ef36-44b2-824c-d95d37aaa2a2/67555bf0-33f0-43b7-a499-6a79652f4e06.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7929&fp-y=0.3612&fp-z=2.8994&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=549&mark-y=343&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMDMmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
      width={1500} 
      height={0} 
      alt="Botón de Acciones para un rol" style={{ borderRadius: "8px", border: "1px solid #F4F2F7" }} />
  </div>
</div>

<div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
  <div className="w-auto pr-7">
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/b5246359-43e5-4708-8f35-108255423c3a/0ff3cc3d-b51f-4c5d-904d-427b30f414bf.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7621&fp-y=0.4500&fp-z=2.2685&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=476&mark-y=268&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNDgmaD0yNTImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
      width={1500} 
      height={0} 
      alt="Menú de Acciones" style={{ borderRadius: "8px", border: "1px solid #F4F2F7" }} />
  </div>
  <div className="w-full p-4">
    <h3 className="p-5 pl-0 text-black text-2xl font-bold">16. Menú de Acciones</h3>
    <h3 className="text-black text-2xl font-bold">Menú de Acciones</h3>
    <p className="text-justify text-md">Siguiendo el paso anterior, el menú desplegado contendrá dos botones con iconos y los nombres {`"Eliminar"`} y {`"Editar"`}. 
    Al presionar alguno de estos botones, se ejecutará una acción.</p>
    <p></p>
    <p className="text-md font-bold">Nota: Los roles {`"Administrador"`} y {`"Base"`} no contarán con esta opción.</p>
  </div>
</div>


<div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
  <div className="w-full p-4">
    <h3 className="p-5 pl-0 text-black text-2xl font-bold">17. Botón para Eliminar un Rol</h3>
    <p className="text-md font-bold">Eliminar Rol</p>
    <p className="text-justify text-md">Coloca el cursor sobre el botón que muestra un icono de basura. Al presionarlo, se desplegará inmediatamente una ventana flotante de advertencia antes de llevar a cabo la eliminación.</p>
    <p></p>
    <p className="text-md font-bold">Nota:</p>
    <p className="text-md">Los roles {`"Administrador"`} y {`"Base"`} no contarán con esta opción.</p>
  </div>
  <div className="w-auto">
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/909afe2f-2eed-49d4-9277-aad573d7385e/76befa5b-936f-4dfa-a063-7516a2d6c160.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7346&fp-y=0.4398&fp-z=2.8994&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=549&mark-y=343&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMDMmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
      width={1500} 
      height={0} 
      alt="Botón para Eliminar un Rol" style={{ borderRadius: "8px", border: "1px solid #F4F2F7" }} />
  </div>
</div>

<div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
  <div className="w-auto pr-7">
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/879dab02-3224-4f40-9360-cb27d39c83d4/fe593dcc-04cc-44aa-afbf-ab6a8d34fcc9.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6263&fp-y=0.5469&fp-z=2.7599&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=497&mark-y=345&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yMDYmaD05OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
      width={1500} 
      height={0} 
      alt="Ventana Modal de Advertencia para Eliminar Rol" style={{ borderRadius: "8px", border: "1px solid #F4F2F7" }} />
  </div>
  <div className="w-full p-4">
    <h3 className="p-5 pl-0 text-black text-2xl font-bold">18. Ventana Modal de Advertencia para Eliminar Rol</h3>
    <h3 className="text-black text-2xl font-bold">Ventana Modal de Advertencia: Eliminar Rol</h3>
    <p className="text-justify text-md">La ventana modal de advertencia incluirá:</p>
    <ul>
      <li><p className="text-md font-bold">Mensaje de Advertencia:</p> Informando al usuario sobre las implicaciones de eliminar el rol.</li>
      <li><p className="text-md font-bold">Botón {`"Eliminar"`}:</p> Al elegir esta opción, el rol se eliminará de manera permanente.</li>
      <li><p className="text-md font-bold">Botón {`"Cancelar"`}:</p> Permite al usuario cerrar la ventana modal sin realizar la acción de eliminación.</li>
      <li><p className="text-md font-bold">Nota:</p> Al eliminar un los usuarios con este rol asignado pasarán a tener el rol {`"Base"`} dicho rol no cuenta con ningún permiso.</li>
    </ul>
  </div>
</div>


<div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
  <div className="w-full p-4">
    <h3 className="p-5 pl-0 text-black text-2xl font-bold">19. Notificación Flotante de Éxito Cuando se Elimina el Rol</h3>
    <h3 className="text-black text-2xl font-bold">Notificación Flotante de Éxito</h3>
    <p className="text-justify text-md">Después de que el usuario confirma la eliminación, se muestra una notificación flotante con el mensaje {`"Rol eliminado con éxito"`}.</p>
  </div>
  <div className="w-auto">
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/ca51567b-e2d1-41ed-91f8-335ae71f41d1/6227ff3f-c478-4955-8429-aa504e943129.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8592&fp-y=0.0541&fp-z=2.6064&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=345&mark-y=25&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04MzAmaD0xNzImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
      width={1500} 
      height={0} 
      alt="Notificación Flotante de Éxito Cuando se Elimina el Rol" style={{ borderRadius: "8px", border: "1px solid #F4F2F7" }} />
  </div>
</div>

<div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
  <div className="w-auto pr-7">
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/4dc5092d-9fd6-4775-88b3-497bf5585722/0b7685ef-22f6-48c7-9435-a97a0e069668.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7346&fp-y=0.4847&fp-z=2.8994&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=549&mark-y=343&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMDMmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
      width={1500} 
      height={0} 
      alt="Botón para Editar el Rol" style={{ borderRadius: "8px", border: "1px solid #F4F2F7" }} />
  </div>
  <div className="w-full p-4">
    <h3 className="p-5 pl-0 text-black text-2xl font-bold">20. Botón para Editar el Rol</h3>
    <h2 className="text-black text-2xl font-bold">Edición del Rol</h2>
    <p className="text-justify text-md">Mueve el puntero a el botón  que tiene un icono de lápiz llamado  {`"Editar"`} desde el menú de Acciones, se abrirá un formulario flotante para edición. Esta ventana permitirá modificar el nombre del rol y los permisos que tendrá dicho rol.</p>
  </div>
</div>







<div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
  <div className="w-full p-4">
    <h3 className="p-5 pl-0 text-black text-2xl font-bold">21. Formulario de Edición</h3>
    <h3 className="text-2xl font-bold">Formulario de Edición</h3>
    <p className="text-md mb-9">Dentro de la ventana modal, encontrarás un formulario que incluye:</p>
    <ul className="mb-9">
      <li className="mb-3">
        <strong>Campo de Nombre del Rol:</strong> Un campo de entrada de texto que muestra el nombre actual del rol. El usuario puede modificar este 
        campo para reflejar el nuevo nombre deseado.
      </li>
    </ul>
    <h3 className="text-2xl font-bold">Mensaje de Advertencia</h3>
    <p>Justo arriba del formulario, se incluirá un mensaje claro y destacado que indica que todos los campos son obligatorios. Esto sirve como recordatorio para 
      garantizar que el usuario complete la información necesaria.</p>
  </div>
  <div className="w-auto">
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/88e09741-b76f-4e79-a4da-c4fb60a6a716/2d84813e-e29f-4313-a547-db379f4b6707.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5061&fp-z=1.6260&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=293&mark-y=365&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02MTUmaD01OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
    style={{ borderRadius: "8px", border: "1px solid #F4F2F7" }}
    width={1500}
    height={0}
    alt="Formulario de Edición" 
    />
  </div>
</div>


<div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
          <div className="w-auto pr-7">
            <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/748b423f-0f80-449f-9efb-4a7555744ada/ce426b88-5fbd-40e6-a702-5250357c825a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5755&fp-z=1.6260&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=293&mark-y=365&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02MTUmaD01OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
            width={1500}  
            height={0} 
            alt="Ingreso a productos" />
          </div>
          <div className="w-full p-4">
            <p className="p-5 pl-0 text-black text-2xl font-bold">22. Botón Siguiente en Edición de Rol</p>
            <p className="text-justify text-md"><strong>Siguiente:</strong> Un botón que, al hacer clic, guarda los cambios realizados en el nombre del rol 
            y transfiere al usuario al segundo paso, que es la edición de permisos.</p>
          </div>
        </div>

<div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
  <div className="w-full p-4">
    <h3 className="p-5 pl-0 text-black text-2xl font-bold">23. Formulario de Permisos</h3>
    <h3 className="text-black text-2xl font-bold">Tabla de Permisos</h3>
    <p className="text-justify text-md mb-9">Después de completar el primer paso de editar el nombre del rol y hacer clic en {`"Siguiente"`}, se abrirá el segundo paso para editar los permisos asociados al rol.</p>
    <h3 className="text-black text-2xl font-bold">Tabla de Permisos</h3>
    <p className="text-justify text-md mb-9">En este paso, encontrarás una tabla que presenta todos los permisos disponibles junto con un botón switch para cada uno. Cada fila de la tabla contendrá:</p>
    <ul className="mb-9">
      <li className="text-md"><strong>Nombre del Permiso:</strong> Una lista de todos los permisos asociados al sistema.</li>
      <li className="text-md"><strong>Botón Switch:</strong> Un botón switch (interruptor) que permite activar o desactivar cada permiso. Cuando activado (encendido), el permiso está habilitado para el rol; cuando desactivado (apagado), el permiso está deshabilitado.</li>
    </ul>
  </div>
  <div className="w-auto">
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/cfcf2ff1-7ea3-4ad5-89da-3df62672de66/6dca748a-b14f-42af-a9d9-ba26cb7434f8.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4745&fp-y=0.4388&fp-z=3.0350&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=546&mark-y=360&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMDcmaD02OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
    width={1500} 
    height={0}
    alt="Formulario de Permisos" />
  </div>
</div>

<div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
  <div className="w-auto pr-7">
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/3a507dbc-0c4b-4436-b65d-a76708525e28/b81c5680-7461-4dcc-8054-2df82e9897e1.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5003&fp-y=0.5005&fp-z=1.5763&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=284&mark-y=179&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02MzMmaD0zOTcmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
    width={1500} 
    height={0}
    alt="Botones Editar y Volver a la hora de estar editando un rol"
    />
  </div>
  <div className="w-full p-4">
    <h3 className="p-5 pl-0 text-black text-2xl font-bold">24. Botones Editar y Volver a la hora de estar editando un rol</h3>
    <ul className="mb-9">
      <li className="text-md"><strong>Editar:</strong></li>
      <ul className="ml-5 mb-4">
        <li className="text-md">Este botón permite guardar al instante los cambios realizados en la edición de permisos y aplicar las modificaciones al rol.</li>
        <li className="text-md">Al hacer clic en {`"Guardar Cambios"`}, los cambios se registran y se confirma la edición de permisos.</li>
      </ul>
      <li className="text-md"><strong>Volver:</strong></li>
      <ul className="ml-5">
        <li className="text-md">Este botón permite al usuario regresar al primer paso para realizar más cambios en el nombre del rol.</li>
        <li className="text-md">Al hacer clic en {`"Volver"`}, Se regresa a la edición del nombre del rol.</li>
      </ul>
    </ul>
</div>
</div>

<div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
  <div className="w-full p-4 ">
    <p className="p-5 pl-0 text-black text-2xl font-bold" >25. Botón {`"Registro de Rol"`} para agregar un nuevo rol al sistema</p>
    <p className="text-justify text-md mr-9 mb-9">Al hacer clic en {`"Registrar Rol"`} en la parte superior derecha, se abrirá una flotante para el registro de un rol.</p>
  </div>

  <div className="w-auto">
  <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/9be184c7-91c0-4b50-9ebe-f5bb1a044fb7/f9b3a427-fb86-43e0-a283-b0b709de57ab.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.9085&fp-y=0.2408&fp-z=2.8994&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=736&mark-y=343&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yOTEmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
    width={1500}
    height={0}
    alt="Botón &quot;Registro de Rol&quot; para agregar un nuevo rol al sistema" />
  </div>
</div>


<div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
  <div className="w-auto">
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/90b6ea1f-ad08-4ffb-97fc-5f36339361c7/21607f66-900e-4e96-af4a-8ce40024277e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5755&fp-z=1.6260&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=293&mark-y=365&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02MTUmaD01OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
    width={1500} 
    height={0}
    alt="Campo para añadir nombre a un rol a la hora de Registrar un nuevo rol" />
  </div>

  <div className="w-full p-4 ">
    <p className="p-5 pl-0 text-black text-2xl font-bold">26. Campo para añadir nombre a un rol a la hora de Registrar un nuevo rol</p>
    <p className="text-justify text-md mr-9 mb-9"><strong>Campo de Nombre del Rol</strong> </p><p>Un campo de entrada de texto para ingresar el nombre del nuevo rol.
      </p><h3>Mensaje de Advertencia </h3><p>Justo arriba del formulario, se incluirá un mensaje claro y destacado que indica que todos los campos son obligatorios.
         Esto sirve como recordatorio para garantizar que el usuario complete la información necesaria.</p><p></p><p><strong>
          Botón siguiente</strong></p><p>Un botón que, al hacer clic, permite avanzar al segundo paso para la asignación de permisos.</p>
  </div>
</div>


<div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
  <div className="w-full p-4 ">
    <p className="p-5 pl-0 text-black text-2xl font-bold">27. Asignacion de permisos a para un rol al momento de crearlo </p>
    <p className="text-justify text-md mr-9 mb-9">
      <strong>Tabla de Permisos</strong>En este paso, encontrarás una tabla que presenta todos los permisos disponibles junto con un botón switch para cada uno. Cada fila de la tabla contendrá
      <br /><strong>Nombre del Permiso:</strong> Una lista de todos los permisos asociados al sistema.
      <br /><strong>Botón Switch: </strong> Un botón switch (interruptor) que permite activar o desactivar cada permiso. Cuando activado (encendido), el permiso está habilitado para el rol; cuando desactivado (apagado), el permiso está deshabilitado.
    </p>
  </div>
  <div className="w-auto">
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/cb1d7517-e76f-4199-a423-f33ee5f667be/d91acea0-49b6-48ec-8de5-3e81ed36d9ab.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4853&fp-y=0.5041&fp-z=3.0350&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=546&mark-y=360&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMDcmaD02OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
    width={1500} 
    height={0}
    alt="Asignacion de permisos a para un rol al momento de crearlo " />
  </div>
</div>



<div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
  <div >
    <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/71742e32-62d3-4b93-8b34-19d9e22b1a5b/0267c885-80ca-47b6-941b-5a25d2517c29.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4212&fp-y=0.6347&fp-z=2.1858&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=393&mark-y=355&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MTMmaD03NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
    width={1500} 
    height={0}
    alt="Botón de Registra y Volver a la hora de Registrar un rol" />
  </div>
  <div className="w-full p-4 ">
    <p className="p-5 pl-0 text-black text-2xl font-bold">28. Botón de Registra y Volver a la hora de Registrar un rol</p>
    <p className="text-justify text-md mr-9 mb-9">
      <strong>Registrar:</strong>
      Este botón permite guardar al instante la información que se asigno para poder crear dicho rol.
      <br />
      <strong>Volver:</strong>
      Este botón permite al usuario regresar al primer paso para realizar más cambios en el nombre del rol.
      Al hacer clic en {`"Volver"`}, Se regresa a la edición del nombre del rol.
    </p>
  </div>
</div>




<div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
  <div className="w-full p-4 ">
    <p className="p-5 pl-0 text-black text-2xl font-bold">
      29. Tabla Principal de Roles  Actualización Automática a la hora de Registrar un rol
    </p>
    <p className="text-justify text-md mr-9 mb-9">
    <strong>Tabla Principal de Roles </strong>
      Después de hacer clic en {`"Registrar"`}, el nuevo rol se insertará automáticamente en la tabla principal de roles con un orden alfabético 
      dependiendo de el nombre de dicho rol.
    </p>
  </div>
  <div className="w-auto">
  <Image src="https://images.tango.us/workflows/6e757d99-dd27-4488-bc5e-9141dcdba9b6/steps/0ea9474a-4c26-4947-8733-b905e5afa046/cb9b2c1c-20d4-4f6b-bf01-451eccfdce54.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1914&fp-y=0.4148&fp-z=1.7177&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=104&mark-y=352&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01ODImaD04NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
  width={1500}
  height={0}
  alt="Tabla Principal de Roles  Actualización Automática a la hora de Registrar un rol" />
  </div>
</div>

    </div>






  );
}
