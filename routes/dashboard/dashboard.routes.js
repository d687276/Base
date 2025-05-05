const express = require("express");
const router = express.Router();

const dashboardController = require("../../controllers/dashboard/dashboard.controller")



////////////////////////////////////////////


router.get("", dashboardController.Dashboard)


module.exports = router;