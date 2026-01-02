import FilterDate from '../components/FilterDate'
import ReturnBar from '../components/ReturnBar'

export default function Entries(){
    return(
        <section className="bg-neutral-200 text-black flex flex-col min-w-screen justify-center pb-30 px-40">
            <ReturnBar />
            <FilterDate/>
        </section>
    )
}
