import   {Request,Response}  from 'express';
import mecanicoservice from '../services/mecanico.services';
import { sendError, sendSuccess } from '../utils/requesthandlers';

class mecanicocontroller{

    async getallmecanico(req:Request,res:Response){
        try{
            const mecanico = await mecanicoservice.getallmecanico()
        sendSuccess(res,mecanico)

        }catch(error:any){
        sendError(res,error.message)
    }
        

        
    }
    async getmecanicobyid(req:Request,res:Response){
        try{
            const id= Number(req.params['id'])
            const mecanico = await mecanicoservice.getmecanicobyid(id)
            if(mecanico){
                sendSuccess(res,mecanico)

            }else{
                sendError(res,`product not found`,404)
            }
     

        }catch(error:any){
        sendError(res,error.message)
    }
        

        
    }
    async postmecanico(req:Request,res:Response){
        try{
            const data= req.body
            const mecanico = await mecanicoservice.postmecanico(data)
            if(mecanico){
                sendSuccess(res, mecanico)

            }else{
                sendError(res,`product not created`,500)
            }
     

        }catch(error:any){
        sendError(res,error.message)
    }
        

        
    }
    async putmecanico(req:Request,res:Response){
        try{
            const id=Number(req.params['id'])
            const data= req.body
            const mecanico = await mecanicoservice.putmecanico(data,id)
            if(mecanico){
                sendSuccess(res, mecanico)

            }else{
                sendError(res,`product not found`,404)
            }
     

        }catch(error:any){
        sendError(res,error.message)
    }
        

        
    }

    async deletemecanico(req:Request,res:Response){
        try{
            const id=Number(req.params['id'])
            
            const deleted = await mecanicoservice.deletemecanico(id)
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

export default new mecanicocontroller()