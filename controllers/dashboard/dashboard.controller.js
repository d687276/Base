const resp = require("../../helpers/response.helper")
const getParams = require("../../helpers/getparams.helper")



const Dashboard = (req, res) => {
  res.render("dashboard/dashboard", getParams(req, res))
  }
      






  
module.exports = { 
  Dashboard
  }
  