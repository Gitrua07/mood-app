import FilterDate from '../components/FilterDate'
import ReturnBar from '../components/ReturnBar'

export default function Entries(){
    return(
        <section className="bg-neutral-200 text-black flex flex-col pt-20 px-40 min-h-screen">
            <ReturnBar />
            <FilterDate/>
        </section>
    )
}
