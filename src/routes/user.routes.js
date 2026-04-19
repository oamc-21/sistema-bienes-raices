import express from "express"
import {validarRegistro} from "../middlewares/usuario_validacion.middleware.js";
import { formularioLogin, formularioRecuperacion, formularioRegistro, registrar, confirmarRegistro } from "../controllers/user.controller.js";   
const router = express.Router();



router.get("/login", formularioLogin);
router.get("/registro", formularioRegistro);
router.get("/recuperar-cuenta", formularioRecuperacion);
router.get("/confirmar-registro/:token", confirmarRegistro)


router.post("/registro", validarRegistro, registrar);




export default router