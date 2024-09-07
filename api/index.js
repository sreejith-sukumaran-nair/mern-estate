import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
import userRouter from './routes/user.route.js'

mongoose.connect(process.env.MONGO).then(()=> console.log("Connected to DB")).catch((error) => console.log(error))

const app = express();


app.use('/api/user', userRouter)




app.listen(3000,() => {
  console.log('Server is running on port 3000')
})