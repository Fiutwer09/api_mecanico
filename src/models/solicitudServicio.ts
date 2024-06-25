export interface SolicitudServicio {
    id?: number;
    usuario_id: number;
    mecanico_id?: number;
    servicio_id: number;
    fecha_solicitud?: Date;
    fecha_finalizacion?: Date;
    estado: 'Pendiente' | 'Asignado';
    comentarios?: string;
  }
  