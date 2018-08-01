# Cliente de Github con JavaScript puro
_Un sencillo cliente frontend con JavaScript  para consumir información de los perfiles y repositorios desde la API pública de Github_


## Configurando la aplicación desde Github ⚙️
Desde tu perfil en Github tienes que ir a Developer settings o simplemente puedes acceder a este enlace https://github.com/settings/developers

![captura de pantalla 2018-08-01 a la s 12 55 32 a m](https://user-images.githubusercontent.com/11634391/43504056-7bd2e6ce-9527-11e8-8a4b-078da86830f1.png)

 Aquí es donde crearemos nuestra aplicación, le damos el nombre que queramos y luego en homepage URL y authorization callback URL colocamos la dirección en la
 que va a estar nuestra aplicación, en este caso http://localhost:3000/ , no se preocupen que más adelante pueden actualizar esta información
 ![captura de pantalla 2018-08-01 a la s 12 55 56 a m](https://user-images.githubusercontent.com/11634391/43504066-8a8b366c-9527-11e8-920d-ec49ff1362fb.png)

Por último, ya habiendo creado la aplicación tenemos una información en pantalla que vamos a usar, esta información son el Client ID y el Client Secret
que obtenemos y los vamos a reemplazar en nuestro archivo config.json que se encuentra en la carpeta app.

![captura de pantalla 2018-08-01 a la s 12 56 10 a m](https://user-images.githubusercontent.com/11634391/43504067-8caac836-9527-11e8-8752-0fc02a72c27e.png)
### Herramientas usadas 🛠️
* [Webpack](https://webpack.js.org/) Module bundler
* [NPM](https://www.npmjs.com/) Manejador de dependencias

