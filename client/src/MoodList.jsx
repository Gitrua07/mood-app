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

    let tempSlice0
    if (props.page){
        tempSlice0 = props.moods.reverse().slice(0,5)
    }else{
        tempSlice0 = props.moods.reverse()
    }

    let tempSlice
    if (props.date){
        try{
            const dateRange = WeeklyFilter(props.date)
            tempSlice = tempSlice0.filter(val =>{
                console.log("DATE: ", val.date, dateRange.weekStart, dateRange.weekEnd)
                return moodWeekFilter(val.date, dateRange.weekStart, dateRange.weekEnd)
            })

            console.log("TEMPSLICE ", tempSlice)
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
                <Link className="hover:bg-neutral-300 rounded-xl" to="/journal"><img className="w-15" src={Arrow}/></Link>
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