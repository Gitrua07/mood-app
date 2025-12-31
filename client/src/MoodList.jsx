import { useState, useEffect } from 'react'
import MoodCard from './MoodCard'
import Happy from './assets/happy-emoji.png'
import Sad from './assets/sad-emoji.png'
import Angry from './assets/angry-emoji.png'
import Arrow from './assets/arrow.png'
import Entries from './Entries'
import { Link } from 'react-router-dom'
import {WeeklyFilter, moodWeekFilter} from './WeekFilter'
import { ChartNoAxesColumnDecreasing } from 'lucide-react'
import Empty from './assets/sunrise.png'

export default function MoodList(props){
    const [moods, setMoods] = useState([])
    if (props.date){
        
    }

    useEffect(()=>{
        async function getMood(){
            const response = await fetch('http://localhost:8000/api/moods')
            const data = await response.json()
            setMoods(data.moods)
        }

        getMood()
    },[])
    
    let tempSlice0
    if (props.page){
        tempSlice0 = moods.reverse().slice(0,5)
    }else{
        tempSlice0 = moods.reverse()
    }

    let tempSlice
    if (props.date){
        try{
            const dateRange = WeeklyFilter(props.date)
            console.log("PROPS=", props.date)
            tempSlice = tempSlice0.filter(val =>{
                console.log("DATE: ", val.date, dateRange.weekStart, dateRange.weekEnd)
                return moodWeekFilter(val.date, dateRange.weekStart, dateRange.weekEnd)
            })
        }catch(err){
            console.log("ERROR= ", err)
        }
        
     
    }else{
        tempSlice = tempSlice0
    }
   

    return(
        <>
            {props.page && <header className="flex text-black items-center px-10 py-5 gap-5">
                <h1>Mood Entries</h1>
                <Link to="/journal"><img className="w-15" src={Arrow}/></Link>
            </header>}

            {tempSlice == 0 && !props.page && <div className="px-100"><img src={Empty}/></div>}

            {tempSlice.map(mood => {
                let emo_src
                if(mood.mood=="Happy"){
                    emo_src = Happy
                }else if(mood.mood=="Sad"){
                    emo_src = Sad
                }else{
                    emo_src = Angry
                }
                return <MoodCard mood={mood.mood} img={emo_src} date={mood.date} min={mood.createdAt} entry={mood.entries}/>
            })}
        </>
    )
}