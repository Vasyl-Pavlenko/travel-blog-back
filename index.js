import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import authRoute from './routes/auth.js'
import postRoute from './routes/posts.js'
import commentRoute from './routes/comments.js'

const app = express()
dotenv.config()

const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI;

app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(express.static('uploads'))

app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)
app.use('/api/comments', commentRoute)

async function start() {
  try {
    await mongoose.connect(MONGO_URI);

    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}
start()
