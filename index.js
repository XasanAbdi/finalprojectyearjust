import express from 'express'
import connectDB from './database/db.js'
import dotenv from 'dotenv'

dotenv.config()
connectDB()
const app=express()






const port=process.env.PORT ||5000

app.listen(port,()=>{
console.log(`Server is runing on port ${port}`)
})