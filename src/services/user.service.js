import Usuario from "../models/user.model.js"
import { generarId } from "../helpers/tokens.helpers.js";
import { emailRegistro }  from "../helpers/email.helpers.js"


export const crearUsuario = async (data) => {
    const { nombre, email, password } = data;

    const existeUsuario = await Usuario.findOne({ where: { email: data.email } });
    if (existeUsuario) {
        throw new Error("Ya existe una cuenta asociada a este correo");
    }

    const usuario = await Usuario.create({ nombre, email, password, token: generarId() });
    
    emailRegistro({
        nombre: usuario.nombre,
        email: usuario.email,
        token: usuario.token
    })
    
    return usuario;
}

export const confirmarRegistro = (req, res) =>{
    const {token} = req.params;
    console.log(token)
}