import {journals} from '../data/journals.js'
import { readData } from '../data/fileHelper.js'

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