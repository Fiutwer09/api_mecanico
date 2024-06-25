import { SolicitudServicio } from 'models/solicitudServicio'; // Asegúrate de importar la interfaz de SolicitudServicio correcta
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import db from '../database/database';

class SolicitudServicios {
  async getAllSolicitudes(): Promise<SolicitudServicio[]> {
    const solicitudes = await db.query<RowDataPacket[]>(`SELECT * FROM SOLICITUD_SERVICIO`);
    return solicitudes as SolicitudServicio[];
  }

  async getSolicitudById(id: number): Promise<SolicitudServicio | null> {
    const solicitud = await db.query<RowDataPacket[]>(`SELECT * FROM SOLICITUD_SERVICIO WHERE id = ?`, [id]);
    if (Array.isArray(solicitud) && solicitud.length > 0) {
      return solicitud[0] as SolicitudServicio;
    }
    return null;
  }

  async createSolicitud(data: SolicitudServicio): Promise<SolicitudServicio | null> {
    // Obtener la información del usuario y el mecánico para validar las direcciones
    const usuario = await db.query<RowDataPacket[]>(`SELECT direccion FROM USUARIO WHERE id = ?`, [data.usuario_id]);
    const mecanico = await db.query<RowDataPacket[]>(`SELECT direccion FROM MECANICO WHERE id = ?`, [data.mecanico_id]);

    if (!usuario || !usuario.length || !mecanico || !mecanico.length) {
      throw new Error('Usuario o mecánico no encontrado.');
    }

    const direccionUsuario = usuario[0].direccion;
    const direccionMecanico = mecanico[0].direccion;
    

    // Validar que las direcciones coincidan
    if (direccionUsuario !== direccionMecanico) {
      throw new Error('La dirección del usuario y del mecánico no coinciden.');
    }

    // Crear la solicitud de servicio si las direcciones coinciden
    const result = await db.query<ResultSetHeader>(`INSERT INTO SOLICITUD_SERVICIO SET ?`, data);
    if (result.insertId) {
      return await this.getSolicitudById(result.insertId);
    }
    return null;
  }

  async updateSolicitud(id: number, data: SolicitudServicio): Promise<SolicitudServicio | null> {
    // Implementar la validación si es necesario para la actualización
    const result = await db.query<ResultSetHeader>(`UPDATE SOLICITUD_SERVICIO SET ? WHERE id = ?`, [data, id]);
    if (result.affectedRows) {
      return await this.getSolicitudById(id);
    }
    return null;
  }

  async deleteSolicitud(id: number): Promise<boolean> {
    const result = await db.query<ResultSetHeader>(`DELETE FROM SOLICITUD_SERVICIO WHERE id = ?`, [id]);
    return result.affectedRows > 0;
  }
}

export default new SolicitudServicios();
