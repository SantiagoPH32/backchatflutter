/*
    path: api/mensajesRoutes

*/
const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");


const { getUsuarios } = require("../controllers/usersController");
const { obtenerCha } = require("../controllers/mensajesController");

const router = Router();



router.get("/:de", validarJWT,obtenerCha );

module.exports = router;
