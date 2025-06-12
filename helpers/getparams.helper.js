const cookie = require("./cookies.helper")
const params = require("../params")
const config = require("../config")


function getParams(req, res) { 

    params.aplicacion.nombre = cookie.getCookie(req, res)["aplicacion_nombre"]
    params.aplicacion.titulo = cookie.getCookie(req, res)["aplicacion_titulo"]
    params.aplicacion.logo = cookie.getCookie(req, res)["aplicacion_logo"]

    params.parametros.usuario = ""
    params.parametros.empresa = ""
    params.parametros.router = ""
    
    params.parametros.usuario_nombre = ""
    params.parametros.empresa_nombre = ""

    params.api.auth = config.api.auth
    
    return params
}





module.exports = getParams
