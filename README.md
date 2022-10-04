# FullstackProject
## Scripts disponibles

En el directorio del proyecto, puedes corres: 

### `npm start`

Correr el codigo

### `npm install`

Instala todo los paquetes necesarios de las dependencias del package.json

### `npm test`

WIP

Esta funcionalidad aun no esta implementada.

## Variables de entorno 

| Variable | Requerida | Default | 
| :--- | :--- | :--- |
| `PORT` | No | 5000 |
| `MONGO_URI` | Si | No tiene default |
| `JWT_SECRET` | Si | No tiene default |
| `TOKEN_HEADER_KEY` | Si | No tiene default |

## Endpoints

| Url | Metodo | Descripcion |
| :--- | :--- | :--- |
| `/` | `GET` | Check del funcionamiento |
| `/auth/login` | `POST` | login de usuario |
| `/users` | `GET` | Obtener todos los usuarios ordenados de mayor a menor por highscore |
| `/users` | `POST` | Crear usuario |
| `/users/:id` | `GET` | Buscar usuario por id |
| `/users/:id` | `PUT` | Busca usuario por id y lo edita |
| `/users/:id/highscore` | `PUT` | Busca usuario por id y lo edita el highscore |
| `/usersget/:email` | `GET` | Buscar usuario por email |



## Contenido de la request
Respuesta de / GET

    Hola estoy funcionando.

Respuesta de /auth/login POST

    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpsbXMyMDIyQGhvdG1haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE2NjQ5MTI0Mzh9.374wBMU86ZmRlaiCHYEF9LB_FHHuZ8ZivnQ9q1wWkHQ"

Respuesta de /users GET

    [
    {
        "email": "jlms2022@hotmail.com",
        "name": "Pepe3",
        "lastname": "ElectryBugaloo",
        "isActive": true,
        "roles": [
            "user"
        ],
        "highscore": 35,
        "createdAt": "2022-10-04T17:41:21.169Z",
        "updatedAt": "2022-10-04T17:41:21.169Z",
        "__v": 0,
        "id": "633c70410d08f9895ec7bcd5"
    },
    {
        "email": "jlms1997@hotmail.com",
        "name": "Pepe",
        "lastname": "Salazar",
        "isActive": true,
        "roles": [
            "user"
        ],
        "createdAt": "2022-10-03T01:06:08.789Z",
        "updatedAt": "2022-10-04T17:40:23.910Z",
        "__v": 0,
        "highscore": 25,
        "id": "633a35803e83daa1654a1488"
    },
    {
        "email": "jlms1990@hotmail.com",
        "name": "Pepe2",
        "lastname": "Meneses",
        "isActive": true,
        "roles": [
            "user"
        ],
        "highscore": 20,
        "createdAt": "2022-10-04T17:14:14.941Z",
        "updatedAt": "2022-10-04T17:39:37.605Z",
        "__v": 0,
        "id": "633c69e6ad4d4eebea58cf1a"
    }
]

Respuesta de /users POST

    Usuario creado correctamente

Respuesta de /users/:id GET

    {
        "email": "jlms1997@hotmail.com",
        "name": "Pepe",
        "lastname": "Salazar",
        "isActive": true,
        "roles": [
            "user"
        ],
        "createdAt": "2022-10-03T01:06:08.789Z",
        "updatedAt": "2022-10-04T17:40:23.910Z",
        "__v": 0,
        "highscore": 25,
        "id": "633a35803e83daa1654a1488"
    }

Respuesta de /users/:id PUT

    {
        "email": "jlms1997@hotmail.com",
        "name": "Pepe",
        "lastname": "Salazar",
        "isActive": true,
        "roles": [
            "user"
        ],
        "createdAt": "2022-10-03T01:06:08.789Z",
        "updatedAt": "2022-10-04T20:07:10.039Z",
        "__v": 0,
        "highscore": 26,
        "id": "633a35803e83daa1654a1488"
    }

Respuesta de /users/:id/highscore PUT

    {
        "email": "jlms1997@hotmail.com",
        "name": "Pepe",
        "lastname": "Salazar",
        "isActive": true,
        "roles": [
            "user"
        ],
        "createdAt": "2022-10-03T01:06:08.789Z",
        "updatedAt": "2022-10-04T20:08:35.209Z",
        "__v": 0,
        "highscore": 25,
        "id": "633a35803e83daa1654a1488"
    }

Respuesta de /usersget/:email GET

    {
        "email": "jlms1997@hotmail.com",
        "name": "Pepe",
        "lastname": "Salazar",
        "isActive": true,
        "roles": [
            "user"
        ],
        "createdAt": "2022-10-03T01:06:08.789Z",
        "updatedAt": "2022-10-04T20:08:35.209Z",
        "__v": 0,
        "highscore": 25,
        "id": "633a35803e83daa1654a1488"
    }

### `Codigo de estatus`

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 401 | `UNANUTHORIZED` |
| 404 | `NOT FOUND` |
| 409 | `CONFLICT` |
| 500 | `INTERNAL SERVER ERROR` |