import { readData } from "../data/fileHelper"

export const moodDeleteCont = async(req, res) => {
    try{
        const data = readData('moods.json')

        res.status(500).json({
            success: true,
            error: data
        })
    }catch(err){
        res.status(500).json({
            success: false,
            error: "Failed to send data"
        })
    }
}