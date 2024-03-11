import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import userRoutes from './routes/userRoutes.js'
import mongoose from 'mongoose';
import bodyParser from "body-parser"
import connectDB from './config/connstDB.js';
const port = process.env.PORT || 5000
import cookieParser from 'cookie-parser';
const app = express()
import { errorHandler, notFoundh } from './middleware/errorHandler.js';

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/users', userRoutes)

// app.use(errorHandler)
// app.use(notFoundh)

app.get('/', (req, res) => {
    res.send('server ready')
})

app.listen(port , () => { console.log(`server listen on port : ${port}`) })

connectDB()