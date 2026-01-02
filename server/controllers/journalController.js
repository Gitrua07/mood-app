import { readData } from '../data/fileHelper.js'

//TODO: Extra endpoint path that can be extended later on. Currently unused
export const journalController = async(req, res) =>{
    try{
        const data = await readData('journals.json')
        res.json(data)
        res.status(200).json(
            {
                success:true,
                sent: data
            }
        )
    }catch(err){
        res.status(500).json(
            {
                success:false,
                error: err
            }
        )
    }
}