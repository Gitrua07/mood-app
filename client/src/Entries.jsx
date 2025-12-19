import MoodList from './MoodList'
import FilterDate from './FilterDate'

export default function Entries(){
    return(
        <section className="bg-neutral-200 text-black flex flex-col">
            <FilterDate />
            <MoodList/>
        </section>
    )
}