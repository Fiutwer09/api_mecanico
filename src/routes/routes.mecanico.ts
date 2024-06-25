
import { Router } from "express";
import mecanicorouter from "./mecanico.routes";

const routerm =Router()
routerm.use('/mecanico',mecanicorouter)

export default routerm