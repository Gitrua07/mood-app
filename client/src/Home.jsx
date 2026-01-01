import MoodCard from './MoodCard'
import MoodInput from './MoodInput'
import MoodSelect from './MoodSelect'
import MoodList from './MoodList'
import {useState, useEffect} from 'react'

export default function Home(){
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
        <section className="bg-neutral-200 text-black flex flex-col px-40 max-w-screen justify-center pb-30">
            <MoodInput onSubmitted={getMood} />
            <MoodList moods={moods} page={true}/>
        </section>
    )
}