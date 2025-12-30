import {useState} from 'react'
import MoodList from './MoodList'


export default function FilterDate(){
    const [selectedDate, setSelectedDate] = useState('')

    return(
        <>
            <sections className="flex flex-col gap-10 px-10 px-10 pt-8 pb-20">
            <h1 className="font-semibold">Upcoming</h1>
            <div>
                <input className="bg-neutral-50 font-semibold" type="date" value={selectedDate} onChange={e=>setSelectedDate(e.target.value)}/>
            </div>
            </sections>
            <MoodList date={selectedDate}/>
        </>
        
    )
}