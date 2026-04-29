import AddButton from '../assets/add.png'
import { useState } from 'react'

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
                        <p>Written: {dateFormat}</p>
                    </div>

                    {isOpen && <article className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                        <div className="w-[420px] max-w-[90vw] rounded-xl bg-white p-6">
                            <div className="flex justify-end">
                                <button onClick={() => setIsOpen(false)}>X</button>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className='font-bold'>{dateFormat}</p>
                                <img src={props.img} alt="Emotion that indicates mood." className='w-80' />
                                <p>You're feeling... {props.mood}</p>
                                <p>Mood Intensity: {props.intensity}</p>
                                <p><br/>Journal Entry:<br/>{props.entry}</p>
                            </div>
                        </div>
                    </article>}
                </main>
            </div>
        </article>
    )
}