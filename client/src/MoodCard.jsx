import AddButton from './assets/add.png'
export default function MoodCard(props){
    console.log(props)
    return (
        <article className="bg-neutral-200 text-black px-10 py-8 font-sans flex gap-10 h-80 w-8/9">
            <img className="items-center h-9/10"src={props.img} alt="Emotion that indicates mood."/>
            <main className="flex flex-col justify-between">
                <div className="flex flex-col gap-5">
                    <h1>{props.mood}</h1>
                    <p className="line-clamp-3 text-xl text-neutral-900">{props.entry}</p>
                </div>
                <div className="flex items-center gap-3">
                    <a href="#"><img className="h-10"src={AddButton} alt="A plus button"/></a>
                    <p>{props.date} • {props.min} min</p>
                </div>
            </main>
        </article>
    )
}