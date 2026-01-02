import MoodCard from './MoodCard'
import Happy from '../assets/happy-emoji.png'
import Sad from '../assets/sad-emoji.png'
import Angry from '../assets/angry-emoji.png'
import Arrow from '../assets/arrow.png'
import { Link } from 'react-router-dom'
import {weekFilter, moodWeekFilter} from '../utils/weekFilter'
import Empty from '../assets/sunrise.png'

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
            const dateRange = weekFilter(props.date)
            tempSlice = tempSlice0.filter(val =>{
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
            {props.page && <header className="flex text-black items-center py-5 gap-5">
                <h1>Mood Entries</h1>
                <Link className="hover:bg-neutral-300 rounded-xl min-w-10" to="/journal"><img className="w-15" src={Arrow}/></Link>
            </header>}

            {tempSlice == 0 && !props.page && <div className="flex flex-col items-center py-10">
                <img src={Empty}/>
                <h2>Entries have yet to be written!</h2>
                </div>}

            <div className="flex flex-col gap-20">
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
            </div>

            
        </>
    )
}