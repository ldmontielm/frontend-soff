import React from "react";
import Image from 'next/image'


const Manual = () => {
    return (
        <div className="mx-auto max-w-7xl p-4">
        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
                1. Botón Menú
            </p>
            <p className="text-justify text-md mr-9 mb-9">
                Botón Menú Para acceder al Módulo de Roles o Usuarios, simplemente
                debes dirigirte al menú.
                <br />
                <br />
                <strong>Nota:</strong> La visualización de los módulos de Roles y
                Usuarios en el menú está sujeta a los permisos asignados a tu cuenta
                de usuario. Dependiendo de tus privilegios, podrían o no aparecer en
                el menú.
            </p>
            </div>
            <div className="w-auto">
            <Image
                src="https://images.tango.us/workflows/18bff6bc-a3ba-4c10-989c-4a14426b2b48/steps/f2216051-3d86-4ab3-b9f9-13829fe0a7a5/83511c46-3804-4a0d-9853-dfe7fdc9094a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0225&fp-y=0.0337&fp-z=2.8990&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=29&mark-y=25&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz05OCZoPTk4JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"
                width={1500}
                height={0}
                alt="Botón Menú"
            />
            </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
            <div className="w-auto ">
            <Image
                src="https://images.tango.us/workflows/18bff6bc-a3ba-4c10-989c-4a14426b2b48/steps/e9a62256-1dc2-4b62-9807-a34ddd1f75f4/5c620eaf-9405-4827-8728-e0d906f71529.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1286&fp-y=0.5000&fp-z=1.0041&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=3&mark-y=2&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0zMDQmaD03NTImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
                width={1500}
                height={0}
                alt="Ingresas a la opción de configuración"
            />
            </div>

            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
                2. Ingresas a la opción de configuración
            </p>
            <p className="text-justify text-md mr-9 mb-9">
                <strong>Botón Configuración </strong>
                Debe dirige el puntero a la parte inferior de la barra de navegación
                con los módulos y posicionarse sobre la opción de configuración.
            </p>
            </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
                3. Buscar el modulo { `"Usuarios"`}.
            </p>
            <p className="text-justify text-md mr-9 mb-9">
                <strong>Botón Usuarios </strong>
                Dirígete al botón {`"Usuarios"`} identificado por un icono de candado.
                Al presionar este botón, serás redirigido al módulo correspondiente
                de {`"Usuarios"`}.
            </p>
            </div>
            <div className="w-auto">
            <Image
                src="https://images.tango.us/workflows/18bff6bc-a3ba-4c10-989c-4a14426b2b48/steps/69a0bfce-c702-4142-b50d-73282b372255/4ba35a07-6dd6-452a-a5a9-804f5d2ce6be.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1232&fp-y=0.5393&fp-z=1.9209&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=30&mark-y=336&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01MDgmaD04MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
                width={1500}
                height={0}
                alt='Buscar el modulo  Usuarios.'
            />
            </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
            <div className="w-auto ">
            <Image
                src="https://images.tango.us/workflows/18bff6bc-a3ba-4c10-989c-4a14426b2b48/steps/d4f2047d-a1ce-4533-bdf6-b36b179fa0bb/56dedf93-c842-44ae-89a2-ad77eb7fd0fc.png?fm=png&crop=focalpoint&fit=crop&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n"
                width={1500}
                height={0}
                alt='Lo primero que encontrarás al acceder al módulo  es la "Tabla de Usuarios Registrados". Esta tabla presenta una visión general de todos los Usuarios existentes en el sistema. Cada fila representa un Usuario único, y las columnas muestran información relevante sobre cada uno.'
            />
            </div>

            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
                4.Modulo Usuarios
            </p>
            <p className="text-justify text-md mr-9 mb-9">
                Lo primero que encontrarás al acceder al módulo es la {`"Tabla de
                Usuarios Registrados"`}. Esta tabla presenta una visión general de
                todos los Usuarios existentes en el sistema. Cada fila representa un
                Usuario único, y las columnas muestran información relevante sobre
                cada uno.
            </p>
            </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
                5. Opciones de Visualización de Columnas en la tabla de Usuarios
            </p>
            <p className="text-justify text-md mr-9 mb-9">
                <strong>Botón de Opciones de Visualización </strong>
                En la esquina superior derecha de la tabla de roles, encontrarás un
                botón llamado {`"Columnas"`}. Este botón te permitirá personalizar la
                visualización de la tabla según tus preferencias.
            </p>
            </div>
            <div className="w-auto">
            <Image
                src="https://images.tango.us/workflows/18bff6bc-a3ba-4c10-989c-4a14426b2b48/steps/48e94acc-86ce-47d2-a936-81d4af40b3dc/221d4f14-49fb-4b2f-bdc1-9e4392d1eeb3.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7356&fp-y=0.2408&fp-z=2.8994&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=454&mark-y=343&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yOTEmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
                width={1500}
                height={0}
                alt="Opciones de Visualización de Columnas en la tabla de Usuarios "
            />
            </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
            <div className="w-auto ">
            <Image
                src="https://images.tango.us/workflows/18bff6bc-a3ba-4c10-989c-4a14426b2b48/steps/e1defa93-282b-4584-81f8-0de0839a7bcc/3ebece8e-7cf0-44bb-8d02-814493b28325.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7356&fp-y=0.4184&fp-z=1.6172&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=591&mark-y=191&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xOTEmaD00MDYmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
                width={1500}
                height={0}
                alt="Quitar Columnas de la tabla de usuarios"
            />
            </div>

            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
                6. Quitar Columnas de la tabla de usuarios
            </p>
            <p className="text-justify text-md mr-9 mb-9">
                <strong>Menú Visualizaciones </strong>
                Una vez que hayas desplegado el menú según las instrucciones
                anteriores, notarás la presencia de una pequeña casilla marcada con
                el nombre de una columna. Al dirigir el puntero hacia una casilla
                azul y hacer clic, podrás observar en tiempo real cómo la
                información de esa columna desaparece de la tabla. Si decides volver
                a marcar la casilla, la columna reaparecerá instantáneamente. Nota
                Es relevante destacar que esta opción no está disponible en todas
                las columnas..
            </p>
            </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
                7. Filtro por nombre y organizar en orden alfabético
            </p>
            <p className="text-justify text-md mr-9 mb-9">
                <strong>Filtro por Nombre </strong>
                Para organizar la tabla de usuarios registrados alfabéticamente por
                el nombre, simplemente dirígete a la parte superior de la tabla,
                específicamente en la columna denominada {`'Nombre'`}. Allí encontrarás
                un botón con la etiqueta {`'Nombre'`}. Al interactuar con este botón, la
                tabla se reorganizará automáticamente en orden alfabético según los
                nombres de los usuarios, facilitando la búsqueda y navegación a
                través de la información.
                <br />
                <br />
                <strong>Nota: </strong>No todas las columnas contaran con esta
                opción
            </p>
            </div>
            <div className="w-auto">
            <Image
                src="https://images.tango.us/workflows/18bff6bc-a3ba-4c10-989c-4a14426b2b48/steps/b4e37ae8-dbe9-4acc-8883-787488962613/d6350dfd-f02f-4dfd-820d-ba80d5c6371f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0948&fp-y=0.3133&fp-z=2.6426&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=176&mark-y=347&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNDkmaD05NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
                width={1500}
                height={0}
                alt="Filtro por nombre y organizar en orden alfabético"
            />
            </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
            <div className="w-auto ">
            <Image
                src="https://images.tango.us/workflows/18bff6bc-a3ba-4c10-989c-4a14426b2b48/steps/bd4e67f4-a3b4-4521-8e94-9617af44836f/f64973fb-36bf-4d06-b04c-547c59401177.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8184&fp-y=0.3556&fp-z=2.9969&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=511&mark-y=354&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNzgmaD04MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
                width={1500}
                height={0}
                alt="Botón cambio de estado en la tabla de usuarios"
            />
            </div>

            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
                8. Botón cambio de estado en la tabla de usuarios
            </p>
            <p className="text-justify text-md mr-9 mb-9">
                <strong>Botón de Cambio de Estado </strong>
                Muévete con el puntero hacia la columna {`'Estado'`}; allí verás un
                botón etiquetado como {`'Activo'`}. Este botón te permite cambiar el
                estado de un usuario; al hacer presionar sobre él, el rol
                desaparecerá de la tabla, ya que esta solo muestra los usuarios
                activos.
            </p>
            </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
                9. Botón Registrar un usuario
            </p>
            <p className="text-justify text-md mr-9 mb-9">
                <strong>Registrar Usuario </strong>
                Para registrar un usuario, dirígete al extremo superior derecho y
                coloca el cursor sobre el botón {`'Registrar Usuario'`}. Al presionar
                este botón, se desplegará una ventana flotante.
            </p>
            </div>
            <div className="w-auto">
            <Image
                src="https://images.tango.us/workflows/18bff6bc-a3ba-4c10-989c-4a14426b2b48/steps/b5f3bfaf-ca6f-469b-aea4-565c45e4cb03/c6f44fbc-8cb5-4de8-822c-c0bcae4d9eb4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8981&fp-y=0.2408&fp-z=2.8994&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=664&mark-y=343&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0zNjQmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
                width={1500}
                height={0}
                alt="Botón Registrar un usuario"
            />
            </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
            <div className="w-auto ">
            <Image
                src="https://images.tango.us/workflows/18bff6bc-a3ba-4c10-989c-4a14426b2b48/steps/47ea2997-b474-4eb4-97ef-2f1fbc09ed2c/221b0e1a-167c-44f6-b336-4dff3e488fe7.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.3122&fp-z=1.6260&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=293&mark-y=365&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02MTUmaD01OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
                width={1500}
                height={0}
                alt="Formulario para poder registrar un usuario"
            />
            </div>

            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
                10. Formulario para poder registrar un usuario
            </p>
            <p className="text-justify text-md mr-9 mb-9">
                <strong>Formulario de Registro de Usuario </strong>
                Para registrar un usuario en el sistema, sigue los pasos mencionados
                anteriormente y completa el siguiente formulario con la información
                básica requerida: {`"Nombre"`}, {`"Tipo de documento"`}, {`"Número de
                documento"`}, {`"Número de Teléfono"`}, {`"Correo"`} y {`"Rol"`}.
                <br />
                <br />
                <strong>Nota:</strong> Recuerda que es obligatorio proporcionar toda
                la información al registrar un usuario. La mayoría de los campos
                deben ser únicos, especialmente {`"Número de documento"`} y {`"Correo"`}.
                Evita duplicar esta información, ya que estos campos son esenciales
                para recuperar la contraseña en caso de cualquier inconveniente.
            </p>
            </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
                11. Botón siguiente en formulario
            </p>
            <p className="text-justify text-md mr-9 mb-9">
                <strong>Botón siguiente en formulario de Usuario </strong>
                Una vez que hayas completado los campos del formulario, desplázate
                hacia la parte inferior. Allí encontrarás un botón llamado
                {`"Siguiente". Al presionarlo, el formulario avanzará al paso dos."`}
            </p>
            </div>
            <div className="w-auto">
            <Image
                src="https://images.tango.us/workflows/18bff6bc-a3ba-4c10-989c-4a14426b2b48/steps/73cf54d4-128e-4dcb-9d6d-fdae11a75ca5/95fe03bb-36b6-4e02-8cea-d366342043e8.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.7857&fp-z=1.6260&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=293&mark-y=485&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02MTUmaD01OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
                width={1500}
                height={0}
                alt="Botón siguiente en formulario"
            />
            </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
            <div className="w-auto ">
            <Image
                src="https://images.tango.us/workflows/18bff6bc-a3ba-4c10-989c-4a14426b2b48/steps/38dad150-5df0-49db-96c6-692805770780/17dea41c-dfbe-4456-8451-db497bbe0954.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.4878&fp-z=1.6260&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=293&mark-y=365&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02MTUmaD01OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
                width={1500}
                height={0}
                alt="Formulario capos contraseña"
            />
            </div>

            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
                12. Formulario capos contraseña
            </p>
            <p className="text-justify text-md mr-9 mb-9">
                <strong>Campo de Contraseña y Validación </strong>
                En este espacio, el usuario introduce su contraseña personalmente.
                En el campo de {`"Validación"`}, se requiere repetir la misma contraseña
                exactamente como se ingresó en el campo {`"Contraseña"`}.
                <br />
                <br />
                <strong>Nota : </strong>
                Estos campos cuentan con requisitos específicos que deben cumplirse
                para asegurar que la contraseña sea válida y segura.
            </p>
            </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
                13. Botón registrar y Volver
            </p>
            <p className="text-justify text-md mr-9 mb-9">
                <strong>Botón Registrar y Volver en formulario de Usuario </strong>
                Una vez que hayas completado los campos del formulario en los campos
                {`"Contraseña"`} y {`"Validación"`}, desplázate hacia la parte inferior.
                Allí encontrarás Dos botones uno llamado {`"Registrar"`} y el otro
                {`"Volver"`}.
                <br />
                <br />
                <strong>Volver:</strong> AL presionar este botón te regresara a la
                primera parte del formulario esto lo puedes hacer en caso de que
                necesites modificar algún campo.
                <br />
                <br />
                <strong>Registrar</strong>: Al presionar este botón automáticamente
                el formulario se cerrara y el usuario quedara registrado en el
                sistema.
            </p>
            </div>
            <div className="w-auto">
            <Image
                src="https://images.tango.us/workflows/18bff6bc-a3ba-4c10-989c-4a14426b2b48/steps/a68ca6be-9d45-483e-b72e-c048d4da68ab/9088b90e-6a6e-47d5-91d0-e52df4d50f7f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4229&fp-y=0.6273&fp-z=2.1858&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=389&mark-y=347&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MTMmaD03NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
                width={1500}
                height={0}
                alt="Botón registrar y Volver"
            />
            </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
            <div className="w-auto ">
            <Image
                src="https://images.tango.us/workflows/18bff6bc-a3ba-4c10-989c-4a14426b2b48/steps/1590cfb1-7f2d-4147-82cf-5909e1fef4da/18d81b9d-af83-4896-b621-5c702a2e4d88.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8592&fp-y=0.0541&fp-z=2.6064&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=345&mark-y=25&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04MzAmaD0xNzImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
                width={1500}
                height={0}
                alt="Alerta de usuario Registrado"
            />
            </div>

            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
                14. Alerta de usuario Registrado
            </p>
            <p className="text-justify text-md mr-9 mb-9">
                <strong>Alerta de Usuario Registrado </strong>
                Cuando un usuario se registra con éxito, observarás una pequeña
                alerta en la parte superior derecha indicando que el registro se ha
                completado satisfactoriamente.
            </p>
            </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
                15. Botón de Acciones para Usuarios
            </p>
            <p className="text-justify text-md mr-9 mb-9">
                <strong>Botón de Tres Puntos {`"Acciones"`} </strong>
                Dirígete a la columna {`'Acciones'`} de cada fila en la tabla, donde
                encontrarás un botón representado por tres puntos {`'...'`}. Al
                presionar este botón, se desplegará un pequeño menú que ofrece
                opciones adicionales para el Usuario correspondiente.
            </p>
            </div>
            <div className="w-auto">
            <Image
                src="https://images.tango.us/workflows/18bff6bc-a3ba-4c10-989c-4a14426b2b48/steps/e3934305-c014-47b8-ab6e-c2132d307d98/dd25f3cc-7394-41dd-86bf-d459800b4537.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.9109&fp-y=0.3551&fp-z=3.0435&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=752&mark-y=360&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNDUmaD02OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
                width={1500}
                height={0}
                alt="Botón de Acciones para Usuarios"
            />
            </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
            <div className="w-auto ">
            <Image
                src="https://images.tango.us/workflows/18bff6bc-a3ba-4c10-989c-4a14426b2b48/steps/39ad1044-69d8-427f-96f0-ace96a1a0e26/f5827b2f-85e0-415b-9ba7-5311218a7fc8.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8887&fp-y=0.4255&fp-z=2.8994&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=762&mark-y=343&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMDMmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
                width={1500}
                height={0}
                alt="Botón para editar un Usuario"
            />
            </div>

            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
                16. Botón para editar un Usuario
            </p>
            <p className="text-justify text-md mr-9 mb-9">
                <strong>Botón Edición de Usuario </strong>
                Mueve el puntero a el botón que tiene un icono de lápiz llamado
                {`"Editar"`} desde el menú de Acciones, se abrirá un formulario flotante
                para edición.
                <br />
                <br />
                <strong>Nota</strong>: Los usuarios no se pueden eliminar ya que
                estos están asociados a otro tipo de información.
            </p>
            </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
                17. formulario para editar un usuario.
            </p>
            <p className="text-justify text-md mr-9 mb-9">
                <strong>Formulario de Edición de Usuario </strong>
                Cuando abres el formulario, encontrarás los campos y la información
                del usuario, lo que te permite modificar la información según sea
                necesario.
                <br />
                <br />
                <strong>Nota:</strong> Los campos de contraseña no son editables en
                este formulario
            </p>
            </div>
            <div className="w-auto">
            <Image
                src="https://images.tango.us/workflows/18bff6bc-a3ba-4c10-989c-4a14426b2b48/steps/287e8529-ed3d-46c8-acb6-facba804a109/37dfab5d-7ffc-43dd-bec4-ae03a21e56a4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5003&fp-y=0.5000&fp-z=1.2204&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=387&mark-y=87&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00MjUmaD02MTQmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"
                width={1500}
                height={0}
                alt="formulario para editar un usuario."
            />
            </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center p-5 mb-9 border rounded">
            <div className="w-auto ">
            <Image
                src="https://images.tango.us/workflows/18bff6bc-a3ba-4c10-989c-4a14426b2b48/steps/ef8f4f30-9a54-4d75-ad3c-2c169ae5274f/55e5b8e8-c972-45e4-bfd4-471855f437fa.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5003&fp-y=0.7714&fp-z=1.7963&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=323&mark-y=433&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz01NTMmaD02NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
                width={1500}
                height={0}
                alt="Botón Actualizar en la tabla de usuarios."
            />
            </div>

            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
                18. Botón Actualizar en la tabla de usuarios.
            </p>
            <p className="text-justify text-md mr-9 mb-9">
                <strong>Botón Actualizar Usuario </strong>
                Una vez hayas realizado las modificaciones necesarias en los campos,
                ve a la parte inferior del formulario, donde encontrarás un botón
                llamado {`"Actualizar"`}. Al presionar este botón, el formulario se
                cerrará automáticamente y los cambios se guardarán.
                <br />
                <br />
                <strong>Nota:</strong> Recuerda que todos los campos son
                obligatorios.
            </p>
            </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center mb-9 p-5 border rounded bg-gray-100">
            <div className="w-full p-4 ">
            <p className="p-5 pl-0 text-black text-2xl font-bold">
                19. Modulo usuarios.
            </p>
            <p className="text-justify text-md mr-9 mb-9">Modulo Usuarios.</p>
            </div>
            <div className="w-auto">
            <Image
                src="https://images.tango.us/workflows/18bff6bc-a3ba-4c10-989c-4a14426b2b48/steps/46175506-73db-489f-9cba-72e373b6cfc4/26c4d780-651d-4347-b54d-50dca90b9a25.png?fm=png&crop=focalpoint&fit=crop&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n"
                width={1500}
                height={0}
                alt="Modulo usuarios."
            />
            </div>
        </div>
        </div>
    );
};

export default Manual;
