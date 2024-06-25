import mecanicocontroller from "../controllers/mecanico.controller";
import { Router } from "express";

const mecanicorouter =Router()
mecanicorouter.get ('/',mecanicocontroller.getallmecanico)
mecanicorouter.get ('/:id',mecanicocontroller.getmecanicobyid)
mecanicorouter.post ('/',mecanicocontroller.postmecanico)
mecanicorouter.put ('/:id',mecanicocontroller.putmecanico)
mecanicorouter.delete ('/:id',mecanicocontroller.deletemecanico)

export default mecanicorouter