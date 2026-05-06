import AddButton from '../assets/add.png'
import TrashButton from '../assets/trash.png'
import {useState, useEffect} from 'react'
import deleteMoods from '../api/deleteMoods'

export default function MoodCard(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)
    const dateFormat = new Date(props.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
    

    const deleteMood = async() => {
        await deleteMoods(props.id)
        props.onDelete(props.id)
    }


    const shortEntry = props.entry.slice(0, 30)
    

    return (
        <article>
            <div className="py-8 font-sans flex gap-10">
                <img className="items-center min-w-10 max-w-60" src={props.img} alt="Emotion that indicates mood." />
                <main className="flex flex-col justify-between gap-10">
                    <div className="flex flex-col gap-5">
                        <h1>{props.mood} ● Intensity: {props.intensity}</h1>
                        <p className="line-clamp-3 text-xl text-neutral-900">{shortEntry}</p>
                    </div>
                    <div className="flex items-center">
                        <p>{dateFormat}</p>
                         <button onClick={() => setIsOpen(true)} className='p-0'><img className="max-w-5 min-w-5 items-center p-0" src={AddButton} alt="A plus button" /></button>
                        <button onClick = {() => deleteMood()} className='p-0'><img className="max-w-5 min-w-5 items-center p-0" alt='trash icon'src={TrashButton}/></button>
                    </div>

                    {isOpen && <article className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                        <div className="w-[450px] max-w-[90vw] rounded-xl bg-white p-6 pb-10">
                            <div className="flex justify-end">
                                <button onClick={() => setIsOpen(false)}>X</button>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className='font-bold'>{dateFormat}</p>
                                <img src={props.img} alt="Emotion that indicates mood." className='w-80' />
                                <p className='font-bold'>You're feeling... {props.mood}</p>
                                <p><b>Mood Intensity: </b>{props.intensity}</p>
                                <p className='bg-white-100 w-90'><br/><b>Journal Entry:</b><br/>
                                <div className='flex-row h-40 overflow-y-auto'>{props.entry}</div></p>
                            </div>
                        </div>
                    </article>}
                </main>
            </div>
        </article>
    )
}