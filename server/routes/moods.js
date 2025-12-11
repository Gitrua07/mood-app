import express from 'express'
import {moodController} from '../controllers/moodController.js'

export const moodRouter = express.Router()

moodRouter.get('/:category/:type', moodController)
