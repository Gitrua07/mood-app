import MoodInput from '../components/MoodInput'
import MoodList from '../components/MoodList'
import {useState, useEffect} from 'react'
import getMoods from '../api/getMoods'

export default function Home(){
    const [moods, setMoods] = useState([])
    
    const getMood = async() => {
        const data = await getMoods()
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