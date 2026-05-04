import express from 'express'
import {moodController} from '../controllers/moodController.js'
import {moodPostCont} from '../controllers/moodPostCont.js'
import { journalController } from '../controllers/journalController.js'
import { journalPostCont } from '../controllers/journalPostCont.js'
import { moodDeleteCont } from '../controllers/moodDeleteCont.js'

export const moodRouter = express.Router()

moodRouter.get('/moods', moodController)
moodRouter.post('/moods', moodPostCont)
moodRouter.delete('/moods', moodDeleteCont)

moodRouter.get('/journals', journalController)
moodRouter.post('/journals', journalPostCont)

