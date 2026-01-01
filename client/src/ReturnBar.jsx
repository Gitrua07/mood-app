import { Section } from 'lucide-react'
import Back from './assets/back.png'
import {Link} from 'react-router-dom'

export default function ReturnBar(){
    return(
        <section className="py-10 px-10">
            <Link className="" to="/">
            <div className="max-w-15 hover:bg-neutral-300 hover:rounded-xl">
                <img className="py-2 px-2" src={Back} alt="Back arrow"/>
            </div>    
            </Link>
        </section>
    )
}
