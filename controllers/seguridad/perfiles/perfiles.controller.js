const resp = require("../../../helpers/response.helper")

const getParams = require("../../../helpers/getparams.helper")
const cookie = require("../../../helpers/cookies.helper")



const Perfiles = (req, res) => {
    let instancia = req.params.instancia

    
  }
      



 const PerfilesAgregar = (req, res) => {
    let instancia = req.params.instancia
    let sql = "select usuarios_spi($1, $2, $3, $4, $5) into result"

    let vars = req.body
    let parametros = []

 }



 const PerfilesEditar = (req, res) => {

 }

      
  module.exports = { 
    Perfiles, PerfilesAgregar, PerfilesEditar
}