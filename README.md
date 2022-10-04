# FullstackProject
## Scripts disponibles

En el directorio del proyecto, puedes corres: 

### `npm start`

Correr el codigo

### `npm test`

WIP

Esta funcionalidad aun no esta implementada.

## Variables de entorno 

| Variable | Requerida | Default | 
| :--- | :--- | :--- |
| `PORT` | No | 5000 |
| `MONGO_URI` | Si | No tiene default |

## Endpoints

| Url | Metodo | Descripcion |
| :--- | :--- | :--- |
| `/` | `GET` | Check del funcionamiento |
| `/user` | `POST` | Crear usuario |


## Contenido de la request

Respuesta de /user

    {
        "name":"Pepe",
        "lastname":"Meneses",
        "email":"jlms1997@hotmail.com",
        "isActive":true,
        "password":"123456"
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