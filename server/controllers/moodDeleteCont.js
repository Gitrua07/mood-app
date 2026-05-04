import { readData, writeData } from "../data/fileHelper.js"

export const moodDeleteCont = async(req, res) => {
    try{
        //Reads data
        const data = await readData('moods.json')
        console.log('Data loaded:', data)
        console.log('Request body:', req.body)

        //Find and remove item
        const itemId = req.body.id
        console.log('Item ID to delete:', itemId, 'Type:', typeof itemId)

        //Filter out the item
        let filteredData = data

        data.moods = data.moods.filter(item => {
            return item.id != itemId
        })

        //Update json
        await writeData('moods.json', filteredData)

        //Sends success response
        res.status(200).json({
            success:true,
            message: 'Item deleted successfully',
            deletedId: itemId
        })
    }catch(err){
        res.status(500).json({
            success: false,
            error: "Failed to send data"
        })
    }
}