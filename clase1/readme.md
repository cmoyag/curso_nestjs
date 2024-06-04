Primeros Pasos del Tutorial en Nest

Documentacion:https://www.youtube.com/watch?v=8D4NLq0QWTE

1.- Instalacion CLI Nest
npm i -g @nestjs/cli
Ayuda :nest --help

2.- Crear un nuevo pryecto
nest new demo1
Ejecutar
npm run start

3-Modulos principales
    Modulos
        Controladores
        Providers
    Main.ts -> arranque de la Aplicacion

4 Decoradores o Anotaciones 
 Programacion de meta data que simplifica el desarrollo y las validaciones 

5 Como crear un propio artefacto
Recordatorio nest --help
Crear un controlador
nest generate co {nombre controlador}

Para evitar pruyebas unitarias 
nest generate co {nombre controlador} --no-spec

6 Crear un servicio para manipular los datos
nest generate|g service|s {nombre_servicio}

Servicios
Clases
Descargan y centralizan las tareas
Son unos de los tipos de providers -> injectable
Gestiona el acceso a la informacion
Libera y asila la logica de negocio
Facilita la Reutilizacion

Providers:
Conjunto diverso de clases
Servicios,Pipes,factorias,repositorios.
Pueden ser inyectados

Injeccion de Depencencias 
Tecnica de OOP
Crea y proporciona instancias 
Facilita el testing

7 Trabajo con datos
Primero creamos una clase (Entidad)
https://docs.nestjs.com/cli/usages#nest-generate  --flat no genera la carpeta
nest g cl player/player.entity --flat --no-spec