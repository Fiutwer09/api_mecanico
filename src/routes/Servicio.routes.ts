import mecanicocontroller from "../controllers/Servicios.controller";
import { Router } from "express";

const Serviciorouter =Router()
Serviciorouter.get ('/',mecanicocontroller.getallServicios)
Serviciorouter.get ('/:id',mecanicocontroller.getServiciosbyid)
Serviciorouter.post ('/',mecanicocontroller.postServicios)
Serviciorouter.put ('/:id',mecanicocontroller.putServicios)
Serviciorouter.delete ('/:id',mecanicocontroller.deleteServicios)

export default Serviciorouter