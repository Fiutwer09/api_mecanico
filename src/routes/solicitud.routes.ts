import { Router } from 'express';
import SolicitudServicioController from '../controllers/solicitudServicio';

const SolicitudRouter = Router();

SolicitudRouter.get('/', SolicitudServicioController.getAllSolicitudes);
SolicitudRouter.get('/:id', SolicitudServicioController.getSolicitudById);
SolicitudRouter.post('/', SolicitudServicioController.createSolicitud);
SolicitudRouter.put('/:id', SolicitudServicioController.updateSolicitud);
SolicitudRouter.delete('/:id', SolicitudServicioController.deleteSolicitud);

export default SolicitudRouter;
