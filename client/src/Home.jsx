import MoodCard from './MoodCard'
import MoodInput from './MoodInput'
import MoodSelect from './MoodSelect'
import MoodList from './MoodList'
import HappyEmoji from './assets/happy-emoji.png'

export default function Home(){
    return(
        <section className="bg-grey-900 flex justify-center">
            <MoodCard mood="Happy" img={HappyEmoji} date='Today'min={23} entry="I was having a joyful day because I saw a rainbow. It was a beautiful morning and I had a good run. I also had fun with the dogs and went on a long walk on the beach. I saw an orca and it was gigantic! Then I saw a whale and it flew out of the ocean."/>
        </section>
    )
}