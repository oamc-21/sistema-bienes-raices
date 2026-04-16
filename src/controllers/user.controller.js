import Usuario from "../models/user.model.js"


const formularioLogin = (req, res) => {
     res.render("auth/login", {
        pagina: "Iniciar sesión"
     });
};

const formularioRegistro = (req, res) =>{
    res.render("auth/registro", {
        pagina: "Crear Cuenta"
    });
};

const registrar = async (req,res) =>{
    const usuario = await Usuario.create(req.body);
    res.json(usuario);

}

const formularioRecuperacion = (req, res) =>{
    res.render("auth/recuperacion", {
        pagina: "Recuperar Cuenta"
    });
};

export {
    formularioLogin,
    formularioRegistro,
    formularioRecuperacion,
    registrar,
}