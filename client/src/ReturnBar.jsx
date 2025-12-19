import { Section } from 'lucide-react'
import Back from './assets/back.png'
import {Link} from 'react-router-dom'

export default function ReturnBar(){
    return(
        <section className="py-10 px-10">
            <Link to="/">
                <img className="w-10" src={Back} alt="Back arrow"/>
            </Link>
        </section>
    )
}
