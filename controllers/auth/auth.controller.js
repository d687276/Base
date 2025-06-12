const resp = require("../../helpers/response.helper")
const getParams = require("../../helpers/getparams.helper")
const cookies = require("../../helpers/cookies.helper")
const sqllite = require("../../helpers/sqlite.helpers")



const Login = (req, res) => {
  const config = require("../../config")

  cookies.setCookie(req, res, "aplicacion_nombre", config.app.name)
  cookies.setCookie(req, res, "aplicacion_titulo", config.app.title)
  cookies.setCookie(req, res, "aplicacion_logo", config.app.logo)
  cookies.setCookie(req, res, "sesion_status", "")
  cookies.setCookie(req, res, "sesion_fecha", "")
  cookies.setCookie(req, res, "sesion_token", "")

  cookies.setCookie(req, res, "sesion_usuario", "")
  cookies.setCookie(req, res, "sesion_perfil", "")

  res.render("auth/login", getParams(req, res))
  }
      


const Validar = async (req, res) => {  
  const params = getParams(req, res)

  const url = params.api.auth + '/login'
  const urldata = {
    textUsuario: req.body.textUsuario,
    textPassword: req.body.textPassword,
  }

  const headers = {
    'User-Agent': 'Mozilla/5.0 (compatible)',
    'Accept-Language': 'es-MX,es;q=0.5',
  };

  try {
    await fetch(url , {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(urldata),
    })
    .then(response => response.json())
    .then(data => {     

        if (data.error == true) {
          console.log("=======================================================================")
          console.log(JSON.stringify(data))
          console.log("=======================================================================")
        } else {
          console.log("-----------------------------------------------------------------------")
          console.log(JSON.stringify(data))
          console.log("-----------------------------------------------------------------------")

          const validacion = data.body.result.tabla[0].result
      
          if (validacion == 1) {
          
            cookies.setCookie(req, res, "sesion_status", "OK")
            cookies.setCookie(req, res, "sesion_fecha", "")
            cookies.setCookie(req, res, "sesion_token", "")            

            req.session.username = urldata.textUsuario
  
            sqllite.getMenu(1, urldata.textUsuario)

            res.render("dashboard/dashboard", params)
          } else {
            res.render("auth/login", params)
          }
        }                             
    })
    .then(data => {
      console.log("Login: " + req.session.username + " OK")
    })
    .catch(error => {
        console.error('Error:', error)
    })
  } catch (error) { 
    console.log("Cookie-Error: " + error)
    return "-"
  }
}



const Logout = (req, res) => {  
  cookies.setCookie(req, res, "sesion_status", "")
  cookies.setCookie(req, res, "sesion_fecha", "")
  cookies.setCookie(req, res, "sesion_token", "")

  var params = getParams(req, res)
  res.render("auth/login", params)
  }

  
    
module.exports = { 
  Login, Validar, Logout
  }
  