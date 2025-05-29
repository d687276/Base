const express = require("express");
const router = express.Router();

const perfilesController = require("../../controllers/seguridad/perfiles/perfiles.controller")
const usuariosController = require("../../controllers/seguridad/usuarios/usuarios.controller")




////////////////////////////////////////////


router.get("/perfiles", perfilesController.Perfiles)
router.get("/perfiles/editar/:idx", perfilesController.PerfilesEditar)
router.get("/perfiles/insertar", perfilesController.PerfilesAgregar)

router.post("/perfiles/editar", perfilesController.PerfilesEditar)
router.post("/perfiles/insertar", perfilesController.PerfilesAgregar)


////////////////////////////////////////////


router.get("/perfiles", usuariosController.Usuarios)
router.get("/perfiles/editar/:idx", usuariosController.UsuariosEditar)
router.get("/perfiles/insertar", usuariosController.UsuariosAgregar)


module.exports = router;