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




app.listen(3000,() => {
  console.log('Server is running on port 3000')
})