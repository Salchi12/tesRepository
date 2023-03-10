@TAGGENERAL
  Feature: Ejemplo de automatización en APIs
    As un alumno de la escuela de automatización de APIs
    I quiero validar la interacción con API
    So mostrar los resultados de las solicitudes

  Background: Este es un paso que se ejecuta antes de mis escenarios
    Given Me logueo correctamente

  #ESTOY EN AMAZON
  @CasoDePrueba1
  Scenario: Buscar un producto X
    Given que desee buscar un producto X
    And verificar su existencia
    When escriba el producto X
    Then valido que se muestre el producto X

  @CasoDePrueba2
  Scenario Outline: Buscar una serie de productos
  Given que quiera buscar diversos productos
  When escriba el producto "<producto1>"
  And escriba el producto "<producto2>"
  #Then se muestren los productos "<producto1>" "<producto2>"
  Then se muestren los productos
    | producto1 | producto2 |
    | <producto1> | <producto2> |
  Examples:
    | producto1 | producto2 |
    |  jogger nike | zapatillas nike Y |