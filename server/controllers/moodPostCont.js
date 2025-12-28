import {writeData, readData } from '../data/fileHelper.js'

export const moodPostCont = async(req,res) =>{
    try{
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

    res.status(200).json({
        success: true,
        entries: entry
    })
    }catch(err){
        console.error('Error saving journal:', err)  // ← Add this line!
        console.error('Error message:', err.message) // ← And this one!
        res.status(500).json({
            success: false,
            error: "Failed to send data"
        })
    }
}