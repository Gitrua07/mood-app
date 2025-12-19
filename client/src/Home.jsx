import MoodCard from './MoodCard'
import MoodInput from './MoodInput'
import MoodSelect from './MoodSelect'
import MoodList from './MoodList'

export default function Home(){
    return(
        <section className="bg-neutral-200 text-black flex flex-col">
            <MoodSelect/>
            <MoodInput />
            <MoodList page={true}/>
        </section>
    )
}