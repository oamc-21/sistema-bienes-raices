import { check } from "express-validator"

export const validarRegistro = [

    check("nombre")
        .notEmpty()
        .withMessage("El nombre no puede estar vacío"),

    check("email")
        .isEmail()
        .withMessage("El email no es válido"),

    check("password")
        .isLength({ min: 6 })
        .withMessage("La contraseña debe tener al menos 6 caracteres"),

    check("repetir_password")
        .notEmpty()
        .withMessage("Debes confirmar la contraseña!")
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("La contraseña no coincide");
            }
            return true;
        }),
];



