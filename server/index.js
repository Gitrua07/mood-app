import express from 'express'
import {moodRouter} from './routes/moods.js'
import cors from 'cors'

const PORT = 8000
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', moodRouter)

app.listen(PORT, () => console.log(`connected to port ${PORT}`))