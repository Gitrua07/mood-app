import {moods} from './data/data.js'

export const moodController = (req, res) =>{
    const {category, type} = req.params

    let filteredData = moods.filter(mood => mood[category].toLowerCase() === type.toLowerCase())
    
    res.json(filteredData)
}