import express from 'express'
import {moodRouter} from './routes/moods.js'
import cors from 'cors'

const PORT = process.env.PORT || 8000
const app = express()

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}))

app.use(express.json())

app.use('/api', moodRouter)

app.listen(PORT, () => console.log(`connected to port ${PORT}`))