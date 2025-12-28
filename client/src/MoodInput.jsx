import {useState} from "react"

import Happy from './assets/happy-emoji.png'
import Sad from './assets/sad-emoji.png'
import Angry from './assets/angry-emoji.png'

export default function MoodInput() {
    const [selectedMood, setSelectedMood] = useState(null)

    const date = new Date().toLocaleDateString()
    const [entry, setEntry] = useState("")
    const [intensity, setIntensity] = useState(0)
    const id = Date.now()

    const submitData = async() => {
        const moodData = {
            "id": id,
            "mood": selectedMood,
            "entries": entry,
            "intensity": intensity
        } 

        try{
            const data = await fetch('http://localhost:8000/api/moods', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(moodData)
            })

            console.log("JSON.stringify... =",JSON.stringify(moodData) )

            setEntry("")
            setIntensity(0)
            setSelectedMood(null)
        }catch(err){
            console.log(err)
        }
       
    }

    return(
        <>
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
        <section className="flex justify-between py-8 px-10">
            <div className="flex flex-col gap-5">
                <h1>{date}</h1>
                <textarea className="w-200 h-80" placeholder="Write your journal entry..."
                value={entry} onChange={e => setEntry(e.target.value)}/>
                <div>
                    <button className="!rounded-full text-white !bg-purple-900 h-15 w-25 text-xl" type="button" onClick={submitData}>Submit</button>
                </div>
            </div>
            <div>
                <p><span>Intensity</span> {intensity}</p>
                <input type="range" min="0" max="10" value={intensity} onChange={e => setIntensity(Number(e.target.value))}/>
            </div>
        </section>
        </>
        
    )
}