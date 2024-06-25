import { Request, Response } from 'express';
import SolicitudServicios from '../services/solicitudServicio';
import { sendError, sendSuccess } from '../utils/requesthandlers';

class SolicitudServicioController {

  async getAllSolicitudes(req: Request, res: Response) {
    try {
      const solicitudes = await SolicitudServicios.getAllSolicitudes();
      sendSuccess(res, solicitudes);
    } catch (error: any) {
      sendError(res, error.message);
    }
  }

  async getSolicitudById(req: Request, res: Response) {
    try {
      const id = Number(req.params['id']);
      const solicitud = await SolicitudServicios.getSolicitudById(id);
      if (solicitud) {
        sendSuccess(res, solicitud);
      } else {
        sendError(res, 'Solicitud not found', 404);
      }
    } catch (error: any) {
      sendError(res, error.message);
    }
  }

  async createSolicitud(req: Request, res: Response) {
    try {
      const data = req.body;
      const solicitud = await SolicitudServicios.createSolicitud(data);
      sendSuccess(res, solicitud);
    } catch (error: any) {
      sendError(res, error.message);
    }
  }

  async updateSolicitud(req: Request, res: Response) {
    try {
      const id = Number(req.params['id']);
      const data = req.body;
      const solicitud = await SolicitudServicios.updateSolicitud(id, data);
      if (solicitud) {
        sendSuccess(res, solicitud);
      } else {
        sendError(res, 'Solicitud not found', 404);
      }
    } catch (error: any) {
      sendError(res, error.message);
    }
  }

  async deleteSolicitud(req: Request, res: Response) {
    try {
      const id = Number(req.params['id']);
      const deleted = await SolicitudServicios.deleteSolicitud(id);
      if (deleted) {
        sendSuccess(res, {});
      } else {
        sendError(res, 'Solicitud not found', 404);
      }
    } catch (error: any) {
      sendError(res, error.message);
    }
  }

}

export default new SolicitudServicioController();
