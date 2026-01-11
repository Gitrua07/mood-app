import AddButton from '../assets/add.png'
import { useState } from 'react'
import SelectionPage from './SelectionPage'

export default function MoodCard(props) {
    const [isOpen, setIsOpen] = useState(false)
    const dateFormat = new Date(props.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })

    return (
        <article>
            <div className="py-8 font-sans flex gap-10">
                <img className="items-center min-w-10 max-w-60" src={props.img} alt="Emotion that indicates mood." />
                <main className="flex flex-col justify-between gap-10">
                    <div className="flex flex-col gap-5">
                        <h1>{props.mood} - Intensity: {props.intensity}</h1>
                        <p className="line-clamp-3 text-xl text-neutral-900">{props.entry}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={() => setIsOpen(true)}><img className="max-w-10 min-w-10 items-center" src={AddButton} alt="A plus button" /></button>
                        <p>{dateFormat} • {props.min} min</p>
                    </div>

                    {isOpen && <article className="flex inset-0 fixed bg-white z-50">
                        <div className="w-full h-full">
                            <div className="flex justify-end">
                                <button onClick={() => setIsOpen(false)}>X</button>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p>{dateFormat}</p>
                                <img src={props.img} alt="Emotion that indicates mood." />
                                <p>{props.mood}</p>
                                <p>Intensity: {props.intensity}</p>
                                <p>{props.entry}</p>
                            </div>
                        </div>
                    </article>}
                </main>
            </div>
        </article>
    )
}