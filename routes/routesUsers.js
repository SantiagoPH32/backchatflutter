/*
    path: api/login

*/
const { Router } = require("express");

const { validarJWT } = require("../middlewares/validar-jwt");
const { getUsuarios } = require("../controllers/usersController");

const router = Router();



router.get("/", validarJWT, getUsuarios);

module.exports = router;
