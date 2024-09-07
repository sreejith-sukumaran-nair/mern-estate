import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

mongoose.connect(process.env.MONGO).then(()=> console.log("Connected to DB")).catch((error) => console.log(error))

const app = express();

app.use(express.json())


app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

// middleware to handle the errors in proper way

app.use((err,req,res,next) => {
  const statusCode = err.statusCode || 500 ; // 500 for internal server
  const message = err.message || "Internal server error";

  return res.status(statusCode).json({
    success : false ,
    message ,
    statusCode ,
  })
})


app.listen(3000,() => {
  console.log('Server is running on port 3000')
})