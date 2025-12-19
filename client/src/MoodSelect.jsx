import Happy from './assets/happy-emoji.png'
import Sad from './assets/sad-emoji.png'
import Angry from './assets/angry-emoji.png'
import {useState} from 'react'

export default function MoodSelect(){
    const [selectedMood, setSelectedMood] = useState(null)
    return(
        <section>
            <p className="text-shadow-lg pb-10 pt-35 py-10 font-semibold text-3xl text-center italic">How are you doing today?</p>
            <h1 className="px-9 py-10">Mood Chart</h1>
            <article className="flex px-20 py-8">
            <div className="flex flex-col items-center gap-5">
                <button 
                onClick={()=>setSelectedMood('Happy')} 
                className={
                    `transition-all 
                    ${selectedMood == 'Happy' ? 'scale-105' : 'opacity-50 hover:opacity-100'}`}>
                    <img src={Happy} alt="Picture of a happy emotion."/>
                </button>
                <p className="font-bold text-2xl">Happy</p>
            </div>
            <div className="flex flex-col items-center gap-5">
                <button 
                onClick={()=>setSelectedMood('Sad')} 
                className={
                    `transition-all 
                    ${selectedMood == 'Sad' ? 'scale-105' : 'opacity-50 hover:opacity-100'}`}>
                    <img src={Sad} alt="Picture of a sad emotion."/>
                </button>
                <p className="font-bold text-2xl">Sad</p>
            </div>
            <div className="flex flex-col items-center gap-5">
                <button 
                    onClick={()=>setSelectedMood('Angry')} 
                    className={
                        `transition-all 
                        ${selectedMood == 'Angry' ? 'scale-105' : 'opacity-50 hover:opacity-100'}`}>
                            <img src={Angry} alt="Picture of an angry emotion."/>
                </button>
                <p className="font-bold text-2xl">Angry</p>
            </div>
            </article>

        </section>
    )
}