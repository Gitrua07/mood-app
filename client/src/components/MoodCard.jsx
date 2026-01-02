import AddButton from '../assets/add.png'

export default function MoodCard(props){
    const dateFormat = new Date(props.date).toLocaleDateString('en-US',{
        month:'short',
        day: 'numeric',
        year: 'numeric'
    })

    return (
        <article>
            <div className="py-8 font-sans flex gap-10">
            <img className="items-center min-w-10 max-w-60"src={props.img} alt="Emotion that indicates mood."/>
            <main className="flex flex-col justify-between gap-10">
                <div className="flex flex-col gap-5">
                    <h1>{props.mood}</h1>
                    <p className="line-clamp-3 text-xl text-neutral-900">{props.entry}</p>
                </div>
                <div className="flex items-center gap-3">
                    <a href="#"><img className="max-w-10 min-w-10 items-center"src={AddButton} alt="A plus button"/></a>
                    <p>{dateFormat} • {props.min} min</p>
                </div>
            </main>
            </div>
        </article>
    )
}