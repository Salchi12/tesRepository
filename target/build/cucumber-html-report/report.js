$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/ejemploAutomatizacionAPI.feature");
formatter.feature({
  "name": "Automatización de APIs",
  "description": "  Como un estudiante de escuela\n  Quiero redactar y automatizar APIs\n  Para obtener valores y respuestas de las solicitudes enviadas",
  "keyword": "Característica",
  "tags": [
    {
      "name": "@EjemploDeAutomatizacionAPIs"
    }
  ]
});
formatter.scenario({
  "name": "Crear Token dinámico correctamente",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@EjemploDeAutomatizacionAPIs"
    },
    {
      "name": "@Restful-Booker"
    },
    {
      "name": "@CrearTokenDinamicoHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro el body del servicio: \"crearToken\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "username",
        "admin"
      ]
    },
    {
      "cells": [
        "password",
        "password123"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion del body y cabeceras",
  "rows": [
    {
      "cells": [
        "servicio",
        "tipo",
        "url",
        "metodo",
        "formato"
      ]
    },
    {
      "cells": [
        "Auth - CreateToken",
        "https://restful-booker.herokuapp.com",
        "/auth",
        "POST",
        "txt"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoElServicioConLaConfiguracionDelBodyYCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guardo la respuesta de la ejecucion",
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.guardoLaRespuestaDeLaEjecucion()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear Token dinámico incorrectamente",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@EjemploDeAutomatizacionAPIs"
    },
    {
      "name": "@Restful-Booker"
    },
    {
      "name": "@CrearTokenDinamicoUnHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro el body del servicio: \"crearToken\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "username",
        "admin"
      ]
    },
    {
      "cells": [
        "password",
        "password123"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion del body y cabeceras",
  "rows": [
    {
      "cells": [
        "servicio",
        "tipo",
        "url",
        "metodo",
        "formato"
      ]
    },
    {
      "cells": [
        "Auth - CreateToken",
        "https://restful-booker.herokuapp.com",
        "/auths",
        "POST",
        "txt"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoElServicioConLaConfiguracionDelBodyYCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"404\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guardo la respuesta de la ejecucion",
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.guardoLaRespuestaDeLaEjecucion()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Obtener ID\u0027s de libros correctamente",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@EjemploDeAutomatizacionAPIs"
    },
    {
      "name": "@Restfull-Booker"
    },
    {
      "name": "@ObtenerIDLibrosHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio sin configuraciones",
  "rows": [
    {
      "cells": [
        "servicio",
        "tipo",
        "url",
        "metodo",
        "formato"
      ]
    },
    {
      "cells": [
        "Obterner-ID-Libros",
        "https://restful-booker.herokuapp.com",
        "/booking",
        "get",
        "json"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoElServicioSinConfiguraciones(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guardo la respuesta de la ejecucion",
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.guardoLaRespuestaDeLaEjecucion()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ObtenerID\u0027s de Libros incorrectamente",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@EjemploDeAutomatizacionAPIs"
    },
    {
      "name": "@Restfull-Booker"
    },
    {
      "name": "@ObtenerIDLibrosUnHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio sin configuraciones",
  "rows": [
    {
      "cells": [
        "servicio",
        "tipo",
        "url",
        "metodo",
        "formato"
      ]
    },
    {
      "cells": [
        "Obterner-ID-Libros",
        "https://restful-booker.herokuapp.com",
        "/booking",
        "post",
        "json"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoElServicioSinConfiguraciones(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"500\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guardo la respuesta de la ejecucion",
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.guardoLaRespuestaDeLaEjecucion()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Obtener libro por un ID en específico",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@Restfull-booker"
    },
    {
      "name": "@ObtenerLibroPorIDHappyPath"
    }
  ]
});
formatter.step({
  "name": "ejecuto el servicio sin configuraciones",
  "keyword": "Cuando ",
  "rows": [
    {
      "cells": [
        "servicio",
        "tipo",
        "url",
        "metodo",
        "formato"
      ]
    },
    {
      "cells": [
        "Obtener-ID-Especifico",
        "https://restful-booker.herokuapp.com",
        "/booking/\u003cid\u003e",
        "get",
        "txt"
      ]
    }
  ]
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"200\"",
  "keyword": "Entonces "
});
formatter.step({
  "name": "guardo la respuesta de la ejecucion",
  "keyword": "Y "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "3"
      ]
    },
    {
      "cells": [
        "4"
      ]
    },
    {
      "cells": [
        "5"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Obtener libro por un ID en específico",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@EjemploDeAutomatizacionAPIs"
    },
    {
      "name": "@Restfull-booker"
    },
    {
      "name": "@ObtenerLibroPorIDHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio sin configuraciones",
  "rows": [
    {
      "cells": [
        "servicio",
        "tipo",
        "url",
        "metodo",
        "formato"
      ]
    },
    {
      "cells": [
        "Obtener-ID-Especifico",
        "https://restful-booker.herokuapp.com",
        "/booking/3",
        "get",
        "txt"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoElServicioSinConfiguraciones(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guardo la respuesta de la ejecucion",
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.guardoLaRespuestaDeLaEjecucion()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Obtener libro por un ID en específico",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@EjemploDeAutomatizacionAPIs"
    },
    {
      "name": "@Restfull-booker"
    },
    {
      "name": "@ObtenerLibroPorIDHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio sin configuraciones",
  "rows": [
    {
      "cells": [
        "servicio",
        "tipo",
        "url",
        "metodo",
        "formato"
      ]
    },
    {
      "cells": [
        "Obtener-ID-Especifico",
        "https://restful-booker.herokuapp.com",
        "/booking/4",
        "get",
        "txt"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoElServicioSinConfiguraciones(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guardo la respuesta de la ejecucion",
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.guardoLaRespuestaDeLaEjecucion()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Obtener libro por un ID en específico",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@EjemploDeAutomatizacionAPIs"
    },
    {
      "name": "@Restfull-booker"
    },
    {
      "name": "@ObtenerLibroPorIDHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio sin configuraciones",
  "rows": [
    {
      "cells": [
        "servicio",
        "tipo",
        "url",
        "metodo",
        "formato"
      ]
    },
    {
      "cells": [
        "Obtener-ID-Especifico",
        "https://restful-booker.herokuapp.com",
        "/booking/5",
        "get",
        "txt"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoElServicioSinConfiguraciones(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guardo la respuesta de la ejecucion",
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.guardoLaRespuestaDeLaEjecucion()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Obtener libro por un ID en específico unhappy path",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@Restfull-booker"
    },
    {
      "name": "@ObtenerLibroPorIDUnHappyPath"
    }
  ]
});
formatter.step({
  "name": "ejecuto el servicio sin configuraciones",
  "keyword": "Cuando ",
  "rows": [
    {
      "cells": [
        "servicio",
        "tipo",
        "url",
        "metodo",
        "formato"
      ]
    },
    {
      "cells": [
        "Obtener-ID-Especifico",
        "https://restful-booker.herokuapp.com",
        "/booking/\u003cid\u003e",
        "get",
        "txt"
      ]
    }
  ]
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"404\"",
  "keyword": "Entonces "
});
formatter.step({
  "name": "guardo la respuesta de la ejecucion",
  "keyword": "Y "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "333"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Obtener libro por un ID en específico unhappy path",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@EjemploDeAutomatizacionAPIs"
    },
    {
      "name": "@Restfull-booker"
    },
    {
      "name": "@ObtenerLibroPorIDUnHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio sin configuraciones",
  "rows": [
    {
      "cells": [
        "servicio",
        "tipo",
        "url",
        "metodo",
        "formato"
      ]
    },
    {
      "cells": [
        "Obtener-ID-Especifico",
        "https://restful-booker.herokuapp.com",
        "/booking/333",
        "get",
        "txt"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoElServicioSinConfiguraciones(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"404\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guardo la respuesta de la ejecucion",
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.guardoLaRespuestaDeLaEjecucion()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Crear libro correctamente",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@Restful-Booker"
    },
    {
      "name": "@CrearLibroHappyPath"
    }
  ]
});
formatter.step({
  "name": "que configuro el body del servicio: \"crearLibro\"",
  "keyword": "Dado ",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "firstname",
        "\u003cfName\u003e"
      ]
    },
    {
      "cells": [
        "lastname",
        "\u003clName\u003e"
      ]
    },
    {
      "cells": [
        "totalprice",
        "\u003ctPrice\u003e"
      ]
    },
    {
      "cells": [
        "depositpaid",
        "\u003cbool\u003e"
      ]
    },
    {
      "cells": [
        "bookingdates.checkin",
        "\u003cdIn\u003e"
      ]
    },
    {
      "cells": [
        "bookingdates.checkout",
        "\u003cdOut\u003e"
      ]
    },
    {
      "cells": [
        "additionalneeds",
        "\u003caddNeeds\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "configuro las cabeceras",
  "keyword": "Y ",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ]
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion del body y cabeceras",
  "keyword": "Cuando ",
  "rows": [
    {
      "cells": [
        "servicio",
        "tipo",
        "url",
        "metodo",
        "formato"
      ]
    },
    {
      "cells": [
        "CreateBooking",
        "https://restful-booker.herokuapp.com",
        "/booking",
        "POST",
        "txt"
      ]
    }
  ]
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"200\"",
  "keyword": "Entonces "
});
formatter.step({
  "name": "guardo la respuesta de la ejecucion",
  "keyword": "Y "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "fName",
        "lName",
        "tPrice",
        "bool",
        "dIn",
        "dOut",
        "addNeeds"
      ]
    },
    {
      "cells": [
        "luis",
        "velazquez",
        "125",
        "false",
        "2020-04-01",
        "2020-06-14",
        "Breakfast"
      ]
    },
    {
      "cells": [
        "Maite",
        "Zavaleta",
        "150",
        "true",
        "2020-03-02",
        "2020-05-14",
        "Love"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Crear libro correctamente",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@EjemploDeAutomatizacionAPIs"
    },
    {
      "name": "@Restful-Booker"
    },
    {
      "name": "@CrearLibroHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro el body del servicio: \"crearLibro\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "firstname",
        "luis"
      ]
    },
    {
      "cells": [
        "lastname",
        "velazquez"
      ]
    },
    {
      "cells": [
        "totalprice",
        "125"
      ]
    },
    {
      "cells": [
        "depositpaid",
        "false"
      ]
    },
    {
      "cells": [
        "bookingdates.checkin",
        "2020-04-01"
      ]
    },
    {
      "cells": [
        "bookingdates.checkout",
        "2020-06-14"
      ]
    },
    {
      "cells": [
        "additionalneeds",
        "Breakfast"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion del body y cabeceras",
  "rows": [
    {
      "cells": [
        "servicio",
        "tipo",
        "url",
        "metodo",
        "formato"
      ]
    },
    {
      "cells": [
        "CreateBooking",
        "https://restful-booker.herokuapp.com",
        "/booking",
        "POST",
        "txt"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoElServicioConLaConfiguracionDelBodyYCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guardo la respuesta de la ejecucion",
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.guardoLaRespuestaDeLaEjecucion()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear libro correctamente",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@EjemploDeAutomatizacionAPIs"
    },
    {
      "name": "@Restful-Booker"
    },
    {
      "name": "@CrearLibroHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que configuro el body del servicio: \"crearLibro\"",
  "rows": [
    {
      "cells": [
        "key",
        "valor"
      ]
    },
    {
      "cells": [
        "firstname",
        "Maite"
      ]
    },
    {
      "cells": [
        "lastname",
        "Zavaleta"
      ]
    },
    {
      "cells": [
        "totalprice",
        "150"
      ]
    },
    {
      "cells": [
        "depositpaid",
        "true"
      ]
    },
    {
      "cells": [
        "bookingdates.checkin",
        "2020-03-02"
      ]
    },
    {
      "cells": [
        "bookingdates.checkout",
        "2020-05-14"
      ]
    },
    {
      "cells": [
        "additionalneeds",
        "Love"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "APIStepDefinition.configuroElBodyDelServicio(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion del body y cabeceras",
  "rows": [
    {
      "cells": [
        "servicio",
        "tipo",
        "url",
        "metodo",
        "formato"
      ]
    },
    {
      "cells": [
        "CreateBooking",
        "https://restful-booker.herokuapp.com",
        "/booking",
        "POST",
        "txt"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoElServicioConLaConfiguracionDelBodyYCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"200\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guardo la respuesta de la ejecucion",
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.guardoLaRespuestaDeLaEjecucion()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Eliminar libro por un ID especifico happy path",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@Restfull-booker"
    },
    {
      "name": "@EliminarUnLibroPorIDHappyPath"
    }
  ]
});
formatter.step({
  "name": "configuro las cabeceras",
  "keyword": "Cuando ",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Authorization",
        "Basic YWRtaW46cGFzc3dvcmQxMjM\u003d"
      ]
    },
    {
      "cells": [
        "Cookie",
        "token\u003dabc123"
      ]
    }
  ]
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion de las cabeceras",
  "keyword": "Y ",
  "rows": [
    {
      "cells": [
        "servicio",
        "tipo",
        "url",
        "metodo",
        "formato"
      ]
    },
    {
      "cells": [
        "Eliminar-ID-Especifico",
        "https://restful-booker.herokuapp.com",
        "/booking/\u003cid\u003e",
        "delete",
        "txt"
      ]
    }
  ]
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"201\"",
  "keyword": "Entonces "
});
formatter.step({
  "name": "guardo la respuesta de la ejecucion",
  "keyword": "Y "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "3972"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Eliminar libro por un ID especifico happy path",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@EjemploDeAutomatizacionAPIs"
    },
    {
      "name": "@Restfull-booker"
    },
    {
      "name": "@EliminarUnLibroPorIDHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Authorization",
        "Basic YWRtaW46cGFzc3dvcmQxMjM\u003d"
      ]
    },
    {
      "cells": [
        "Cookie",
        "token\u003dabc123"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion de las cabeceras",
  "rows": [
    {
      "cells": [
        "servicio",
        "tipo",
        "url",
        "metodo",
        "formato"
      ]
    },
    {
      "cells": [
        "Eliminar-ID-Especifico",
        "https://restful-booker.herokuapp.com",
        "/booking/3972",
        "delete",
        "txt"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoElServicioConLaConfiguracionDeLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"201\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guardo la respuesta de la ejecucion",
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.guardoLaRespuestaDeLaEjecucion()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Eliminar libro por un ID especifico unhappy path",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@Restfull-booker"
    },
    {
      "name": "@EliminarUnLibroPorIDUnHappyPath"
    }
  ]
});
formatter.step({
  "name": "configuro las cabeceras",
  "keyword": "Cuando ",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Cookie",
        "token\u003dabc123"
      ]
    }
  ]
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion de las cabeceras",
  "keyword": "Y ",
  "rows": [
    {
      "cells": [
        "servicio",
        "tipo",
        "url",
        "metodo",
        "formato"
      ]
    },
    {
      "cells": [
        "Eliminar-ID-Especifico",
        "https://restful-booker.herokuapp.com",
        "/booking/\u003cid\u003e",
        "delete",
        "txt"
      ]
    }
  ]
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"403\"",
  "keyword": "Entonces "
});
formatter.step({
  "name": "guardo la respuesta de la ejecucion",
  "keyword": "Y "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Ejemplos",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "10"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Eliminar libro por un ID especifico unhappy path",
  "description": "",
  "keyword": "Esquema del escenario",
  "tags": [
    {
      "name": "@EjemploDeAutomatizacionAPIs"
    },
    {
      "name": "@Restfull-booker"
    },
    {
      "name": "@EliminarUnLibroPorIDUnHappyPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "configuro las cabeceras",
  "rows": [
    {
      "cells": [
        "cabeceras",
        "valor"
      ]
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    },
    {
      "cells": [
        "Cookie",
        "token\u003dabc123"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "APIStepDefinition.configuroLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ejecuto el servicio con la configuracion de las cabeceras",
  "rows": [
    {
      "cells": [
        "servicio",
        "tipo",
        "url",
        "metodo",
        "formato"
      ]
    },
    {
      "cells": [
        "Eliminar-ID-Especifico",
        "https://restful-booker.herokuapp.com",
        "/booking/10",
        "delete",
        "txt"
      ]
    }
  ],
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.ejecutoElServicioConLaConfiguracionDeLasCabeceras(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que el codigo de respuesta sea \"403\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "APIStepDefinition.validoQueElCodigoDeRespuestaSea(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "guardo la respuesta de la ejecucion",
  "keyword": "Y "
});
formatter.match({
  "location": "APIStepDefinition.guardoLaRespuestaDeLaEjecucion()"
});
formatter.result({
  "status": "passed"
});
});