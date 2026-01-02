import { readData, writeData } from "../data/fileHelper.js"

//TODO: Extra endpoint path that can be extended later on. Currently unused
export const journalPostCont = async(req, res) => {
    try{
        const data = await readData('journals.json')

        const entry = {
            id: Date.now(),
            entries: req.body.entries,
            moodId: req.body.moodId
        }

        data.journals.push(entry)

        await writeData('journals.json', data)

        return res.status(200).json({
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