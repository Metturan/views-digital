import TestimonialItem from './TestimonialItem'
import star from './images/star.png'

const Testimonials = () => {
    return (
        <>
            <section className="testies">
                <h2><strong>Testimonials</strong></h2>
                <ul>
                    <li><TestimonialItem client="- KitaHarvest" desc="Developer was excellent!! Thank you!" /></li>
                    <li><TestimonialItem client="- Swagmagic" desc="Absolutely loved the work. He did exactly what was asked. Has great attention to detail." /></li>
                    <li><TestimonialItem client="- Court Order" desc="Project was seamless from start to finish. Keen to really open up the scope and get Metturan to help me dig in and deliver a great website for my business." /></li>
                    <li><TestimonialItem client="- Ecodrive" desc="The work turned out amazing!" /></li>
                    <li><TestimonialItem client="- 527 Photo" desc="Fast and accurate work. Thanks!!" /></li>
                    <li><TestimonialItem client="- TTT Studio" desc="Metturan was a huge driving force on the project, who cooly handled every curveball we were thrown in implementing the client's requests. Huge kudos for taking on a very challenging project." /></li>
                </ul>
            </section>
        </>
    )
}

export default Testimonials