const express = require("express");
const router = express.Router();

const sistemaAPIController = require("../../controllers/sistema/menu/menu.api.controller")



////////////////////////////////////////////


router.get("/menu", sistemaAPIController.Menu)


module.exports = router;