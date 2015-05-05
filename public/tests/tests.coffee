chai    = require 'chai'
expect  = chai.expect
routes  = require "../../routes/index.coffee"
main    = require("../javascripts/gramatica.js")

describe "Rutas", ->
  req = {}
  res = {}
  describe "Index", ->
    it "Debe existir una ruta index con el titulo de la practica", ->
      res.render = (view, vars) ->
          expect(view).equal "index"
          expect(vars.title).equal "Analizador PL/0 con PEGJS"
      routes.index(req, res)

describe "Parser", ->
  it "Prueba de suma", ->
    result = gramatica.parse("x = 3 + 7 .")
    expect(result.block.st.right.type).equal("+")

  it "Prueba de multiplicación", ->
    result = gramatica.parse("x = 1 * 3 .")
    expect(result.block.st.right.type).equal("*")

  it "Prueba de división", ->
    result = gramatica.parse("x = 6 / 2 .")
    expect(result.block.st.right.type).equal("/")

  it "Asociatividad a izquierdas", ->
    result = gramatica.parse("x = 4 - 8 - 1 .")
    expect(result.block.st.right.left.type).equal("-")

  it "Prueba de llamada CALL", ->
    result = gramatica.parse("call a .")
    expect(result.block.st.type).equal("call")

  it "Prueba de WHILE DO", ->
    result = gramatica.parse("while x == 3 do y = y + 1.")
    expect(result.block.st.type).equal("IF")

  it "Prueba de BEGIN END", ->
    result = gramatica.parse("begin a = 3 end.")
    expect(result.type).equal("program")
