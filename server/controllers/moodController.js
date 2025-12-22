//import {moods} from '../data/data.js'
import { readData } from '../data/fileHelper.js'

export const moodController = async(req, res) =>{
    const data = await readData('moods.json')
    const {category, type} = req.params

    let filteredData = data.moods.filter(mood => mood[category].toLowerCase() === type.toLowerCase())
    
    res.json(filteredData)
}