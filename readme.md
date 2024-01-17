### Objetivo del Proyecto:
Desarrollar un servidor backend en Node.js que se conecta a una API externa y sirva datos a través de endpoints personalizados.

1. Inicializar el Proyecto:
- Inicia un nuevo proyecto Node.js utilizando 'npm init'.

2. Instalar Dependencias:
- Instala las siguientes dependencias usando 'npm install o npm i'
- 'express': Un framework web para Node.js que facilita la creación de servidores. 
- 'axios': Un paquete para realizar solicitudes HTTP. 
- 'dotenv': Un paquete para gestionar variables de entorno.
- 'cors': Un paquete para permitir el acceso desde diferentes dominios.
- 'colors': Un paquete para dar formato colorido a la salida en la consola.
- 'mongoose': Utilizaremos este paquete para conectarnos y realizar operaciones en la base de datos, tener instalado MongoDB y ejecutándose localmente. 

3. Configurar 'dotenv' :
- Creamos un archivo '.env' en la raíz del proyecto para almacenar las variables de entorno. Donde agregaremos cualquier configuración personal, como las credenciales de la base de datos. 

4. Crear el Servidor Express: 
- Crea un archivo 'app.js' para tu servidor.
- Configura un servidor básico utilizando Express.
- Documentación: [Express](https://www.npmjs.com/package/express).

5. Crear un Repositorio en GitHub:
- Inicializa un nuevo repositorio Git 'git init'.
- Agregar todos los archivos al repositorio 'git add .'
- Realizar el primer commit 'git commit -m "Primer commit".
##### Recomendaciones adicionales: 
 1. Archivo '.gitignore': 
 - Crear un archivo llamado '.gitignore' en la raíz de nuestro proyecto para especificar los archivos y carpetas que no deben ser rastreados por Git.
 - Trabajar con branches para desarrollar nuevas características o solucionar problemas sin afectar la rama principal:
    - Crear una nueva branch 'git cheackout -b feature/nombre-de-tu-branch'.
    - Hacer cambios y commit en la nueva branch: 'git commit -am "Cambios en mi nueva feature".
    - Cambiar a la rama principal: 'git checkout main'.
    - Fusionar los cambios de la nueva rama a la rama principal: 'git merge feature/nombre-de-tu-branch'.
    - Subir los cambios a GitHub: 'git push origin main'.
