
import { Router } from "express";
import Serviciorouter from "./Servicio.routes";

const routerS =Router()
routerS.use('/Servicio',Serviciorouter)

export default routerS