import { USUARIO } from 'models/usuario'
import { ResultSetHeader,RowDataPacket } from 'mysql2'
import db from '../database/database'
class usuarioservice{
    async getallusuario():Promise<USUARIO[]>{
        const usuario = await db.query<RowDataPacket[]> (`SELECT * FROM USUARIO`)
        return usuario as USUARIO[]
    }
    async getusuariobyid(id:number):Promise<USUARIO |null>{
        const usuario = await db.query <RowDataPacket[]>(`SELECT * FROM USUARIO where id=?`,id)
        if(Array.isArray(usuario)&& usuario.length>0){
            return usuario[0] as USUARIO
        }
        return null
    }
    async postusuario(data:USUARIO):Promise<USUARIO |null>{
        const result=await db.query<ResultSetHeader>(`INSERT INTO USUARIO SET ?`,data)
        if (result.insertId){
            return await this.getusuariobyid(result.insertId)
        }
        return null
      
    }
    async putusuario(data:USUARIO,id:number):Promise<USUARIO |null>{
        const result=await db.query<ResultSetHeader>(`UPDATE  USUARIO SET ? WHERE ID= ?`,[data,id])
        if (result.affectedRows){
            return await this.getusuariobyid(id)
        }
        return null
      
    }

    async deleteusuario(id:number):Promise<boolean |null>{
        const result=await db.query<ResultSetHeader>(`DELETE FROM USUARIO WHERE ID= ?`,id)
     return result.affectedRows > 0
    }
}
export default new usuarioservice()