import express from "express"
import { formularioLogin, formularioRecuperacion, formularioRegistro, registrar } from "../controllers/user.controller.js";   
const router = express.Router();



router.get("/login", formularioLogin);


router.get("/registro", formularioRegistro);
router.post("/registro", registrar);

router.get("/recuperar-cuenta", formularioRecuperacion);


export default router