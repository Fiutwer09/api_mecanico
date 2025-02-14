import mysql2, { ConnectionOptions,ResultSetHeader,RowDataPacket } from 'mysql2/promise'

const config:ConnectionOptions ={
    host: 'localhost',
    user:'root',
    password:'1097728745',
    database:'gestion_vehiculos',
    connectionLimit:10,
    waitForConnections:true,
    queueLimit:0
}

const pool=mysql2.createPool(config)

class Database {
    async query<T extends RowDataPacket[] | ResultSetHeader>(sql:string,values:any =null){
        const cn=await pool.getConnection()
        try{
        const [results]= await cn.query(sql,values)
        return results as T
    }finally {
        cn.release()
    }
    }
}

export default new Database()