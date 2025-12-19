import {useState} from "react"

export default function MoodInput() {
    const date = new Date().toLocaleDateString()
    const [entry, setEntry] = useState("")
    const [intensity, setIntensity] = useState(0)

    return(
        <section className="flex justify-between py-8 px-10">
            <div className="flex flex-col gap-5">
                <h1>{date}</h1>
                <textarea className="w-200 h-80" placeholder="Write your journal entry..."
                value={entry} onChange={e => setEntry(e.target.value)}/>
                <div>
                    <button className="!rounded-full text-white !bg-purple-900 h-15 w-25 text-xl" type="button">Submit</button>
                </div>
            </div>
            <div>
                <p><span>Intensity</span> {intensity}</p>
                <input type="range" min="0" max="10" value={intensity} onChange={e => setIntensity(Number(e.target.value))}/>
            </div>
        </section>
    )
}