const express = require("express");
const router = express.Router();

const authController = require("../../controllers/auth/auth.controller")

////////////////////////////////////////////


router.get("/login", authController.Login)
router.get("/", authController.Login)

router.post("/login", authController.Validar)
router.post("/logout", authController.Logout)


module.exports = router;