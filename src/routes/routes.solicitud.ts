import { Router } from 'express';
import SolicitudRouter from './solicitud.routes'; // Asegúrate de importar correctamente las rutas de solicitud

const routers = Router();

routers.use('/solicitud', SolicitudRouter); // Utiliza el enrutador de solicitudes

export default routers;
