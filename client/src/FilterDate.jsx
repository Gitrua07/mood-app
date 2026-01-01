import {useState, useEffect} from 'react'
import MoodList from './MoodList'


export default function FilterDate(){
    const [selectedDate, setSelectedDate] = useState('')
     const [moods, setMoods] = useState([])
        
        const getMood = async() => {
            const response = await fetch('http://localhost:8000/api/moods')
            const data = await response.json()
            console.log("GET /api/moods returned:", data)
            setMoods(data.moods)
        }
    
        useEffect(()=>{
                getMood()
            },[])

    return(
            <sections className="flex flex-col gap-10 px-10 px-10 pt-8 pb-20 px-40 max-w-315 justify-center">
            <h1 className="font-semibold">Upcoming</h1>
            <div>
                <input className="bg-neutral-50 font-semibold" type="date" value={selectedDate} onChange={e=>setSelectedDate(e.target.value)}/>
            </div>
            <MoodList moods={moods} date={selectedDate}/>
            </sections>  
    )
}