import {API_URL} from '../config'

export default async function getMoods(){
    const response = await fetch(`${API_URL}/api/moods`)
    let data
    if (response.ok){
        data = await response.json()
    }else{
        data = {moods: []}
    }

    return data

    
}