import { Servicio } from 'models/Servicio'
import { ResultSetHeader,RowDataPacket } from 'mysql2'
import db from '../database/database'
class Servicioservice{
    async getallusuario():Promise<Servicio[]>{
        const usuario = await db.query<RowDataPacket[]> (`SELECT * FROM servicio`)
        return usuario as Servicio[]
    }
    async getusuariobyid(id:number):Promise<Servicio |null>{
        const usuario = await db.query <RowDataPacket[]>(`SELECT * FROM servicio where id=?`,id)
        if(Array.isArray(usuario)&& usuario.length>0){
            return usuario[0] as Servicio
        }
        return null
    }
    async postusuario(data:Servicio):Promise<Servicio |null>{
        const result=await db.query<ResultSetHeader>(`INSERT INTO servicio SET ?`,data)
        if (result.insertId){
            return await this.getusuariobyid(result.insertId)
        }
        return null
      
    }
    async putusuario(data:Servicio,id:number):Promise<Servicio |null>{
        const result=await db.query<ResultSetHeader>(`UPDATE  servicio SET ? WHERE ID= ?`,[data,id])
        if (result.affectedRows){
            return await this.getusuariobyid(id)
        }
        return null
      
    }

    async deleteusuario(id:number):Promise<boolean |null>{
        const result=await db.query<ResultSetHeader>(`DELETE FROM servicio WHERE ID= ?`,id)
     return result.affectedRows > 0
    }
}
export default new Servicioservice()