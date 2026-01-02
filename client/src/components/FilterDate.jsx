import {useState, useEffect} from 'react'
import {getMoods} from '../api/getMoods'
import MoodList from '../components/MoodList'


export default function FilterDate(){
    const [selectedDate, setSelectedDate] = useState('')
    const [moods, setMoods] = useState([])
        
        const getMood = async() => {
            const data = await getMoods()
            setMoods(data.moods)
        }
    
        useEffect(()=>{
                getMood()
            },[])

    return(
            <sections>
            <h1 className="font-semibold py-10">Upcoming</h1>
            <div className="pb-10">
                <input className="bg-neutral-50 font-semibold" type="date" value={selectedDate} onChange={e=>setSelectedDate(e.target.value)}/>
            </div>
            <MoodList moods={moods} date={selectedDate}/>
            </sections>  
    )
}
