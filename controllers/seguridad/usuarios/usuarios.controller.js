const resp = require("../../../helpers/response.helper")

const getParams = require("../../../helpers/getparams.helper")
const cookie = require("../../../helpers/cookies.helper")



const Usuarios = (req, res) => {
    let instancia = req.params.instancia
    let sql = "select idx, descripcion, function_formato_status(status) as status from api.perfiles where instancia = $1"

    let params = getParams(req, res)
    let parametros = [instancia]

    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    console.log("API Auth: Perfiles")

  }
      



 const UsuariosAgregar = (req, res) => {
    let instancia = req.params.instancia
    let sql = "select usuarios_spi($1, $2, $3, $4, $5) into result"

    let vars = req.body
    let parametros = []

    let params = getParams(req, res)

    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    console.log("API Auth: Perfiles Agregar")


 }


 

 const UsuariosEditar = (req, res) => {

 }



      
  module.exports = { 
    Usuarios, UsuariosAgregar, UsuariosEditar
}