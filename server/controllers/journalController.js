import {journals} from '../data/journals.js'
import { readData } from '../data/fileHelper.js'

export const journalController = async(req, res) =>{
    const data = await readData('journals.json')
    res.json(data)
}