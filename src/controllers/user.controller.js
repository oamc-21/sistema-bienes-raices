import { validationResult } from "express-validator"
import { crearUsuario as crearUsuarioService } from "../services/user.service.js";


const formularioLogin = (req, res) => {
    res.render("auth/login", {
        pagina: "Iniciar sesión"
    });
};

const formularioRegistro = (req, res) => {
    res.render("auth/registro", {
        pagina: "Crear Cuenta"
    });
};

const registrar = async (req, res) => {
    const resultado = validationResult(req);

    if (!resultado.isEmpty()) {
        return res.render("auth/registro", {
            pagina: "Crear Cuenta",
            errores: resultado.array(),
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        });
    }


    try {
        await crearUsuarioService(req.body);
        res.render("templates/mensaje", {
            pagina: "Cuenta Creada Exitosamente",
            mensaje: "Se ha enviado un email de confirmación, por favor accede al enlace que enviamos a tu correo electronico para poder confirmar tu cuenta."
        })
    } catch (error) {
        return res.render("auth/registro", {
            pagina: "Crear Cuenta",
            errores: [{ msg: error.message }],
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        });
    }

};

const confirmarRegistro = (req, res) =>{
    const {token} = req.params;
    console.log(token)
}

const formularioRecuperacion = (req, res) => {
    res.render("auth/recuperacion", {
        pagina: "Recuperar Cuenta"
    });
};

export {
    formularioLogin,
    formularioRegistro,
    formularioRecuperacion,
    registrar,
    confirmarRegistro,
}