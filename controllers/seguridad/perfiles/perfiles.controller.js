const resp = require("../../../helpers/response.helper")

const getParams = require("../../../helpers/getparams.helper")
const pg = require("../../../middelware/")
const cookie = require("../../../helpers/cookies.helper")



const Perfiles = (req, res) => {
    let instancia = req.params.instancia
    let sql = "select idx, descripcion, function_formato_status(status) as status from api.perfiles where instancia = $1"

    let params = getParams(req, res)
    let parametros = [instancia]

    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    console.log("API Auth: Perfiles")

    pg.pool.query(sql, parametros, (error1, result1) => {
        if (error1) {            
            console.log("====================================================================================")

            params.result.status = "ERROR"
            params.result.mensaje = error1.message

            resp.error(req, res, params, 500)
        } else {
            console.log("====================================================================================")

            params.result.status = "OK"            
            params.result.registros = result1.rowCount     
            params.result.tabla = result1.rows       

            resp.success(req, res, params, 200)
        }

    })  


    
  }
      



 const PerfilesAgregar = (req, res) => {
    let instancia = req.params.instancia
    let sql = "select usuarios_spi($1, $2, $3, $4, $5) into result"

    let vars = req.body
    let parametros = []

    let params = getParams(req, res)

    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    console.log("API Auth: Perfiles Agregar")

    pg.pool.query(sql, [parametros], (error1, result1) => {
        if (error1) {            
            console.log("====================================================================================")

            params.result.status = "ERROR"
            params.result.mensaje = error1.message

            resp.error(req, res, params, 500)
        } else {
            console.log("====================================================================================")

            params.result.status = "OK"            
            params.result.registros = result1.rowCount     
            params.result.tabla = result1.rows       

            resp.success(req, res, params, 200)
        }

    })  
 }



 const PerfilesEditar = (req, res) => {
    let instancia = req.params.instancia
    let sql = "select usuarios_spi($1, $2, $3, $4, $5) into result"

    let vars = req.body
    let parametros = []

    let params = getParams(req, res)

    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    console.log("API Auth: Perfiles Agregar")

    pg.pool.query(sql, [parametros], (error1, result1) => {
        if (error1) {            
            console.log("====================================================================================")

            params.result.status = "ERROR"
            params.result.mensaje = error1.message

            resp.error(req, res, params, 500)
        } else {
            console.log("====================================================================================")

            params.result.status = "OK"            
            params.result.registros = result1.rowCount     
            params.result.tabla = result1.rows       

            resp.success(req, res, params, 200)
        }

    })  
 }

      
  module.exports = { 
    Perfiles, PerfilesAgregar, PerfilesEditar
}