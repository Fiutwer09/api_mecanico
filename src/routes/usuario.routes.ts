import usuarioController from "../controllers/usuario.controller";
import { Router } from "express";

const usuariorouter =Router()
usuariorouter.get ('/',usuarioController.getallusuario)
usuariorouter.get ('/:id',usuarioController.getusuariobyid)
usuariorouter.post ('/',usuarioController.postusuario)
usuariorouter.put ('/:id',usuarioController.putusuario)
usuariorouter.delete ('/:id',usuarioController.deleteusuario)

export default usuariorouter