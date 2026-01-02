export default async function getMoods(){
    const response = await fetch('http://localhost:8000/api/moods')
    const data = await response.json()
    return data
}