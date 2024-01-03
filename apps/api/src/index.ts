import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import { getWelcomeMessage } from './controllers/test'

dotenv.config()

const app = express()

app.use(cors())
app.use(morgan('combined'))
app.use(express.json())
app.get('/', getWelcomeMessage)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
