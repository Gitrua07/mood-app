import express from 'express'
import {moodRouter} from './routes/moods.js'

const PORT = 8000

const app = express()

app.use('/api', moodRouter)

app.listen(PORT, () => console.log(`connected to port ${PORT}`))