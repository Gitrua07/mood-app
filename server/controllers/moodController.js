//import {moods} from '../data/data.js'
import { readData } from '../data/fileHelper.js'

export const moodController = async(req, res) =>{
    try{
        const data = await readData('moods.json')
        let filteredData = data

       if(req.query.date != null){
        filteredData = filteredData.moods.filter((value)=>{
            return value.date.includes(req.query.date)

        })
       }

        res.json(filteredData)

        res.status(200).json({
            success:true,
            sent: filteredData
        })

    }catch(err){
        console.log(err)
        res.status(500).json(
            {
                success: false,
                error: 'Failed to recieve data' 
            }
        )
    }
}