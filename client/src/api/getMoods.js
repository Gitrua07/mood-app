import {API_URL} from '../config'

export default async function getMoods(){
    const response = await fetch(`${API_URL}/api/moods`)
    const data = await response.json()
    return data
}