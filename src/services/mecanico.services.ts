import { mecanico } from 'models/mecanico'
import { ResultSetHeader,RowDataPacket } from 'mysql2'
import db from '../database/database'

class mecanicoservice{
    async getallmecanico():Promise<mecanico[]>{
        const usuario = await db.query<RowDataPacket[]> (`SELECT * FROM mecanico`)
        return usuario as mecanico[]
    }
    async getmecanicobyid(id:number):Promise<mecanico |null>{
        const usuario = await db.query <RowDataPacket[]>(`SELECT * FROM mecanico where id=?`,id)
        if(Array.isArray(usuario)&& usuario.length>0){
            return usuario[0] as mecanico
        }
        return null
    }
    async postmecanico(data:mecanico):Promise<mecanico |null>{
        const result=await db.query<ResultSetHeader>(`INSERT INTO mecanico SET ?`,data)
        if (result.insertId){
            return await this.getmecanicobyid(result.insertId)
        }
        return null
      
    }
    async putmecanico(data:mecanico,id:number):Promise<mecanico |null>{
        const result=await db.query<ResultSetHeader>(`UPDATE  mecanico SET ? WHERE ID= ?`,[data,id])
        if (result.affectedRows){
            return await this.getmecanicobyid(id)
        }
        return null
      
    }

    async deletemecanico(id:number):Promise<boolean |null>{
        const result=await db.query<ResultSetHeader>(`DELETE FROM mecanico WHERE ID= ?`,id)
     return result.affectedRows > 0
    }
}
export default new mecanicoservice()