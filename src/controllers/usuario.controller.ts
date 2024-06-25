import   {Request,Response}  from 'express';
import usuarioservice from '../services/usuario.services';
import { sendError, sendSuccess } from '../utils/requesthandlers';

class usuariocontroller{

    async getallusuario(req:Request,res:Response){
        try{
            const usuario = await usuarioservice.getallusuario()
        sendSuccess(res,usuario)

        }catch(error:any){
        sendError(res,error.message)
    }
        

        
    }
    async getusuariobyid(req:Request,res:Response){
        try{
            const id= Number(req.params['id'])
            const usuario = await usuarioservice.getusuariobyid(id)
            if(usuario){
                sendSuccess(res,usuario)

            }else{
                sendError(res,`product not found`,404)
            }
     

        }catch(error:any){
        sendError(res,error.message)
    }
        

        
    }
    async postusuario(req:Request,res:Response){
        try{
            const data= req.body
            const usuario = await usuarioservice.postusuario(data)
            if(usuario){
                sendSuccess(res, usuario)

            }else{
                sendError(res,`product not created`,500)
            }
     

        }catch(error:any){
        sendError(res,error.message)
    }
        

        
    }
    async putusuario(req:Request,res:Response){
        try{
            const id=Number(req.params['id'])
            const data= req.body
            const usuario = await usuarioservice.putusuario(data,id)
            if(usuario){
                sendSuccess(res, usuario)

            }else{
                sendError(res,`product not found`,404)
            }
     

        }catch(error:any){
        sendError(res,error.message)
    }
        

        
    }

    async deleteusuario(req:Request,res:Response){
        try{
            const id=Number(req.params['id'])
            
            const deleted = await usuarioservice.deleteusuario(id)
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

export default new usuariocontroller()