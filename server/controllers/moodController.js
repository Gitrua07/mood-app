import { readData } from '../data/fileHelper.js'

//Retrieves mood data for displaying on front-end
export const moodController = async(req, res) =>{
    try{
        const data = await readData('moods.json')
        let filteredData = data.moods

       if(req.query.date != null){
        filteredData = filteredData.filter((value)=>{
            return value.date.includes(req.query.date)

        })
       }

        res.status(200).json({
            success:true,
            moods: filteredData
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