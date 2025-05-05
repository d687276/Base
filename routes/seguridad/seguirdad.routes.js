const express = require("express");
const router = express.Router();

const dashboardController = require("../../controllers/dashboard/dashboard.controller")



////////////////////////////////////////////


router.get("/perfiles", dashboardController.Dashboard)
router.get("/perfiles/editar/:idx", dashboardController.Dashboard)
router.get("/perfiles/insertar", dashboardController.Dashboard)

router.post("/perfiles/editar", dashboardController.Dashboard)
router.post("/perfiles/insertar", dashboardController.Dashboard)



module.exports = router;