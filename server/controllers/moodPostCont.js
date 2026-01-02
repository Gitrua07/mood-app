import {writeData, readData } from '../data/fileHelper.js'

export const moodPostCont = async(req,res) =>{
    try{
    //Retrieves data from moods.json file
    const data = await readData('moods.json')

    const entry = {
        "id": req.body.id,
        "mood": req.body.mood,
        "entries": req.body.entries,
        "intensity": req.body.intensity,
        "date": new Date().toISOString(),
    }

    data.moods.push(entry)

    await writeData('moods.json', data)

    //Responds with a json if successfully sends entry data
    res.status(200).json({
        success: true,
        entries: entry
    })

    }catch(err){
        res.status(500).json({
            success: false,
            error: "Failed to send data"
        })
    }
}