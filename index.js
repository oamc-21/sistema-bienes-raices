import express from "express";
import userRoutes from "./src/routes/user.routes.js";
import db from "./src/config/database.js";
const app = express();

app.use(express.urlencoded({extended:true}));

//Conexión a la base de datos
try {
    await db.authenticate();
    db.sync();
    console.log("Conexión establecida con la base de datos MySQL");
} catch (error) {
    console.log(error);
}


//Template Engine con Pug
app.set("view engine", "pug");
app.set("views", "./src/views");

//Carpeta pública
app.use(express.static("./src/public"));

//Routing
app.use("/auth", userRoutes);




const port = 5000;
app.listen(port, () =>{
    console.log(`Servidor funcionando en el ${port}`);
});


