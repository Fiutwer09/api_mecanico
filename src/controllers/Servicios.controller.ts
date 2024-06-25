import   {Request,Response}  from 'express';
import Servicioservice from '../services/Servicios.services';
import { sendError, sendSuccess } from '../utils/requesthandlers';

class Serviciocontroller{

    async getallServicios(req:Request,res:Response){
        try{
            const Servicio = await Servicioservice.getallusuario()
        sendSuccess(res,Servicio)

        }catch(error:any){
        sendError(res,error.message)
    }
        

        
    }
    async getServiciosbyid(req:Request,res:Response){
        try{
            const id= Number(req.params['id'])
            const Servicio = await Servicioservice.getusuariobyid(id)
            if(Servicio){
                sendSuccess(res,Servicio)

            }else{
                sendError(res,`product not found`,404)
            }
     

        }catch(error:any){
        sendError(res,error.message)
    }
        

        
    }
    async postServicios(req:Request,res:Response){
        try{
            const data= req.body
            const Servicio = await Servicioservice.postusuario(data)
            if(Servicio){
                sendSuccess(res, Servicio)

            }else{
                sendError(res,`product not created`,500)
            }
     

        }catch(error:any){
        sendError(res,error.message)
    }
        

        
    }
    async putServicios(req:Request,res:Response){
        try{
            const id=Number(req.params['id'])
            const data= req.body
            const Servicio = await Servicioservice.putusuario(data,id)
            if(Servicio){
                sendSuccess(res, Servicio)

            }else{
                sendError(res,`product not found`,404)
            }
     

        }catch(error:any){
        sendError(res,error.message)
    }
        

        
    }

    async deleteServicios(req:Request,res:Response){
        try{
            const id=Number(req.params['id'])
            
            const deleted = await Servicioservice.deleteusuario(id)
            if(deleted){
                sendSuccess(res,{})

            }else{
                sendError(res,`product not found`,404)
            }
     

        }catch(error:any){
        sendError(res,error.message)
    }
        

        
    }
}

export default new Serviciocontroller()