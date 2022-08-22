import TestimonialItem from './TestimonialItem'
import star from './images/star.png'

const Testimonials = () => {
    return (
        <>
            <section className="widths nopad introduction testies-container">
                <div>
                    <span className="arrows">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M2.24491 24L13 11.9966L2.24491 -4.7012e-07L-1.09223e-07 2.49874L8.5162 11.9966L-9.3985e-07 21.5013L2.24491 24Z" fill="#FF4700"/><path d="M14.2449 -4.7012e-07L12 2.50476L20.5102 12.0067L12 21.502L14.2449 24L25 12.0067L14.2449 -4.7012e-07Z" fill="#FF4700"/></svg>
                    </span>
                    <span>Testimonials</span>
                </div>
                <div className="testies-last">
                    <ul>
                        {/* <li><TestimonialItem client="- KitaHarvest" desc="Developer was excellent!! Thank you!" /></li> */}
                        <li><TestimonialItem client="- Crem Gelato" desc="First time to try Views Digital and it couldn't be any better than with this guy Metturan. Extremely quick and delivers on-time. Communicates effectively and his openness to alternative solutions sealed the deal for me. Thank you!" /></li>
                        {/* <li><TestimonialItem client="- Swagmagic" desc="Absolutely loved the work. He did exactly what was asked. Has great attention to detail." /></li> */}
                        <li><TestimonialItem client="- Court Order" desc="Project was seamless from start to finish. Keen to really open up the scope and get Metturan to help me dig in and deliver a great website for my business." /></li>
                        {/* <li><TestimonialItem client="- Ecodrive" desc="The work turned out amazing!" /></li> */}
                        {/* <li><TestimonialItem client="- 527 Photo" desc="Fast and accurate work. Thanks!!" /></li> */}
                        <li><TestimonialItem last={true} client="- TTT Studio" desc="Metturan was a huge driving force on the project, who cooly handled every curveball we were thrown in implementing the client's requests. Huge kudos for taking on a very challenging project." /></li>
                    </ul>
                </div>

            </section>
        </>
    )
}

export default Testimonials