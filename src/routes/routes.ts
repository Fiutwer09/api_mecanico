
import { Router } from "express";
import usuariorouter from "./usuario.routes";

const router =Router()
router.use('/usuario',usuariorouter)

export default router