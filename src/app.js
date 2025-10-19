import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

export {app}

// const port = process.env.PORT || 3000;
// app.get('/',(req,res)=>{
//     res.send("Hello World!")
//     })

// app.listen(port,()=>{
//     console.log(`App is listening on port ${port}`)
// })