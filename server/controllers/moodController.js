import { readData } from '../data/fileHelper.js'

//Retrieves mood data for displaying on front-end
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
        res.status(500).json(
            {
                success: false,
                error: 'Failed to recieve data' 
            }
        )
    }
}