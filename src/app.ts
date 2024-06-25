import  express, {Request,Response}  from 'express';
import router from './routes/routes';
import routerm from './routes/routes.mecanico';
import routerS from './routes/routes.Servicio';
import routers from './routes/routes.solicitud';
import dotenv from 'dotenv';
dotenv.config();

const app = express()
const PORT= process.env.PORT || 3000

app.use(express.json())

app.get('/',async(req:Request,res:Response)=>{
    res.send(`hi from express api 88`)
  

})
app.use('/',router)
app.use('/',routerm)
app.use('/',routerS)
app.use('/',routers)

app.listen(PORT,()=>{
console.log(`Express api is running on port :${PORT}`)
})