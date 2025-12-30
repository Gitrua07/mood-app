import FilterDate from './FilterDate'
import ReturnBar from './ReturnBar'

export default function Entries(){
    return(
        <section className="bg-neutral-200 text-black flex flex-col">
            <ReturnBar />
            <FilterDate />
        </section>
    )
}