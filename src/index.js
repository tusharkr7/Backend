// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from "./app.js"



dotenv.config(
    {
        path:'./env '
    }
)



connectDB()
.then(()=>{
    app.listen(process.env.PORT||3000,()=>{
        console.log(`Server is running on port: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MonogoDb connection failed!!",err)
})





/*import express from "express"
const app = express()

( async ( )=>{ 
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error",(error)=>{
            console.log("ERRR:",error);
            throw error
        })
    }
    catch{
        console.log("Error:",error)
        throw error
    }

})() */