#language: es
@EjemploDeAutomatizacionAPIs
Característica: Automatización de APIs
  Como un estudiante de escuela
  Quiero redactar y automatizar APIs
  Para obtener valores y respuestas de las solicitudes enviadas

# -- 1 --
#restful-booker (crear Token Dinámico)
@Restful-Booker @CrearTokenDinamicoHappyPath
Escenario: Crear Token dinámico correctamente
  Dado que configuro el body del servicio: "crearToken"
    | key      | valor       |
    | username | admin       |
    | password | password123 |
  Y configuro las cabeceras
    | cabeceras    | valor            |
    | Content-Type | application/json |
  Cuando ejecuto el servicio con la configuracion del body y cabeceras
    | servicio           | tipo | url   | metodo | formato |
    | Auth - CreateToken | https://restful-booker.herokuapp.com  | /auth | POST   | txt     |
  Entonces valido que el codigo de respuesta sea "200"
  Y guardo la respuesta de la ejecucion

#restful-booker escenario incorrecto
@Restful-Booker @CrearTokenDinamicoUnHappyPath
Escenario: Crear Token dinámico incorrectamente
  Dado que configuro el body del servicio: "crearToken"
    | key      | valor       |
    | username | admin       |
    | password | password123 |
  Y configuro las cabeceras
    | cabeceras    | valor            |
    | Content-Type | application/json |
  Cuando ejecuto el servicio con la configuracion del body y cabeceras
    | servicio           | tipo | url   | metodo | formato |
    | Auth - CreateToken | https://restful-booker.herokuapp.com  | /auths | POST   | txt     |
  Entonces valido que el codigo de respuesta sea "404"
  Y guardo la respuesta de la ejecucion

# -- 2 --
@Restfull-Booker @ObtenerIDLibrosHappyPath
Escenario: Obtener ID's de libros correctamente
  Cuando ejecuto el servicio sin configuraciones
    | servicio | tipo | url | metodo | formato |
    | Obterner-ID-Libros | https://restful-booker.herokuapp.com | /booking | get | json |
  Entonces valido que el codigo de respuesta sea "200"
  Y guardo la respuesta de la ejecucion

@Restfull-Booker @ObtenerIDLibrosUnHappyPath
Escenario: ObtenerID's de Libros incorrectamente
  Cuando ejecuto el servicio sin configuraciones
    | servicio | tipo | url | metodo | formato |
    | Obterner-ID-Libros | https://restful-booker.herokuapp.com | /booking | post | json |
  Entonces valido que el codigo de respuesta sea "500"
  Y guardo la respuesta de la ejecucion

# -- 3 --
@Restfull-booker @ObtenerLibroPorIDHappyPath
Esquema del escenario: Obtener libro por un ID en específico
  Cuando ejecuto el servicio sin configuraciones
    | servicio | tipo | url | metodo | formato |
    | Obtener-ID-Especifico | https://restful-booker.herokuapp.com | /booking/<id> | get | txt |
  Entonces valido que el codigo de respuesta sea "200"
  Y guardo la respuesta de la ejecucion
  Ejemplos:
    | id |
    | 3  |
    | 4  |
    | 5  |

@Restfull-booker @ObtenerLibroPorIDUnHappyPath
Esquema del escenario: Obtener libro por un ID en específico unhappy path
  Cuando ejecuto el servicio sin configuraciones
    | servicio | tipo | url | metodo | formato |
    | Obtener-ID-Especifico | https://restful-booker.herokuapp.com | /booking/<id> | get | txt |
  Entonces valido que el codigo de respuesta sea "404"
  Y guardo la respuesta de la ejecucion
  Ejemplos:
    | id |
    | 333  |

# ---   TAREA   --- #
## * Booking - CreateBooking (POST):
# 1 Happy Path creando un libro y que me de respuesta 200
  @Restful-Booker @CrearLibroHappyPath
  Esquema del escenario: Crear libro correctamente
    Dado que configuro el body del servicio: "crearLibro"
      | key                   | valor      |
      | firstname             | <fName>    |
      | lastname              | <lName>    |
      | totalprice            | <tPrice>   |
      | depositpaid           | <bool>     |
      | bookingdates.checkin  | <dIn>      |
      | bookingdates.checkout | <dOut>     |
      | additionalneeds       | <addNeeds> |
    Y configuro las cabeceras
      | cabeceras    | valor            |
      | Content-Type | application/json |
    Cuando ejecuto el servicio con la configuracion del body y cabeceras
      | servicio      | tipo                                 | url      | metodo | formato |
      | CreateBooking | https://restful-booker.herokuapp.com | /booking | POST   | txt     |
    Entonces valido que el codigo de respuesta sea "200"
    Y guardo la respuesta de la ejecucion
    Ejemplos:
      | fName | lName     | tPrice | bool  | dIn           | dOut           | addNeeds  |
      | luis  | velazquez | 125    | false | 2020-04-01 | 2020-06-14 | Breakfast |
      | Maite  | Zavaleta | 150    | true | 2020-03-02 | 2020-05-14 | Love |

# 1 UnHappy Path al intentar crear un libro, que me devuelva la respuesta: ERRONEA.

###----------------------------------------------------###
## * DeleteBooking (DELETE)
# 1 Happy Path de cualquiera del delete. 201 respuesta.
@Restfull-booker @EliminarUnLibroPorIDHappyPath
Esquema del escenario: Eliminar libro por un ID especifico happy path
  Cuando configuro las cabeceras
    | cabeceras    | valor            |
    | Content-Type | application/json |
    | Authorization | Basic YWRtaW46cGFzc3dvcmQxMjM= |
    | Cookie | token=abc123 |
  Y ejecuto el servicio con la configuracion de las cabeceras
    | servicio | tipo | url | metodo | formato |
    | Eliminar-ID-Especifico | https://restful-booker.herokuapp.com | /booking/<id> | delete | txt |
  Entonces valido que el codigo de respuesta sea "201"
  Y guardo la respuesta de la ejecucion
  Ejemplos:
    | id |
    | 3972  |

# 1 UnHappy Path con cualquier valor de respuesta erroneo.
@Restfull-booker @EliminarUnLibroPorIDUnHappyPath
Esquema del escenario: Eliminar libro por un ID especifico unhappy path
   Cuando configuro las cabeceras
      | cabeceras    | valor            |
      | Content-Type | application/json |
      # No se mando la cabecera de autorizacion obteniendo como
      # resultado el error 403
      # | Authorization | Basic YWRtaW46cGFzc3dvcmQxMjM= |
      | Cookie | token=abc123 |
   Y ejecuto el servicio con la configuracion de las cabeceras
      | servicio | tipo | url | metodo | formato |
      | Eliminar-ID-Especifico | https://restful-booker.herokuapp.com | /booking/<id> | delete | txt |
   Entonces valido que el codigo de respuesta sea "403"
   Y guardo la respuesta de la ejecucion
   Ejemplos:
      | id |
      | 10  |


