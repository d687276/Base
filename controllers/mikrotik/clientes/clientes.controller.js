const resp = require("../../../helpers/response.helper")

const getParams = require("../../../helpers/getparams.helper")
const cookie = require("../../../helpers/cookies.helper")



const Perfiles = (req, res) => {
    let instancia = req.params.instancia

    
  }
      



const PPP = async (req, res) => {  
  const params = getParams(req, res)

  const url = params.api.mikrotik + '/clients/ppp'
  const urldata = {    
  }

  const headers = {
    'User-Agent': 'Mozilla/5.0 (compatible)',
    'Accept-Language': 'es-MX,es;q=0.5',
  }


    try {
      await fetch(url , {
        method: 'GET',
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

          }                             
      })
      .catch(error => {
          console.error('Error:', error)
      })
    } catch (error) { 
      console.log("Cookie-Error: " + error)
      return "-"
    }



}



 const PerfilesEditar = (req, res) => {

 }

      
  module.exports = { 
    Perfiles, PerfilesAgregar, PerfilesEditar
}