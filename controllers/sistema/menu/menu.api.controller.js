const resp = require("../../../helpers/response.helper")
const getParams = require("../../../helpers/getparams.helper")





const Menu = async (req, res) => {
    //////////////////////

  const params = getParams(req, res)

  const url = params.api.auth + '/menu'
  const urldata = {
    usuario: req.session.username,
    perfil: req.session.perfil,
    instanacia: req.session.instanacia
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

          resp.success(req, res, data.body)      
        }                             
    })
    .catch(error => {
        console.error('Error:', error)
        resp.error(req, res, error)
    })

  } catch (error) {     
    resp.error(req, res, error)
  }
}


    ////////////////////


  
module.exports = { 
  Menu
  }
  