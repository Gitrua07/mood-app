import {API_URL} from '../config'

export default async function deleteMoods(id){
    try{
        const response = await fetch(`${API_URL}/api/moods`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({'id': id}),
        })
    }catch(err){
        console.log(err)
    }
}