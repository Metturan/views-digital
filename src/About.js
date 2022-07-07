import Header from './Header'
import {motion} from 'framer-motion';
import ContactFormShopify from './ContactFormShopify'
import Footer from './Footer'
import blue from './images/vs.png'

import logo from './images/logos/archetype_1080x.png'
import logo2 from './images/logos/boost_200x.png'
import logo3 from './images/logos/gorgias_360x.png'
import logo4 from './images/logos/klaviyo_180x.png'
import logo5 from './images/logos/Loyalty_Lion_200x.png'
import logo6 from './images/logos/oots_00x.png'
import logo7 from './images/logos/recharge_540x.png'
import logo8 from './images/logos/refersion_360x.png'
import logo9 from './images/logos/reviews_180x.png'
import logo10 from './images/logos/Videowise.png'
import logo11 from './images/logos/node.png'
import logo12 from './images/logos/react.png'
import logo13 from './images/logos/mongo.png'
import logo14 from './images/logos/redis.png'
import logo15 from './images/logos/pixel_union_540x.png'
import logo16 from './images/logos/amazon.png'
import logo17 from './images/logos/obviyo_180x.png'
import logo18 from './images/logos/BrightPearl_180x.png'
import logo19 from './images/logos/hotjar_540x.png'
import logo20 from './images/logos/octane_200x.png'

const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]};

const About = () => {
    return (
        <motion.div 
        key="shopifydiv"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}e
        transition={transition}
        >
            <Header menu='landing'/>
            <section className='hero-half'>
                <div className="inner-hero">
                    <h1>About Us</h1>
                    <p>Learn more about Views Digital and some of the team that could help you achieve your business goals.</p>
                </div>
            </section>
            <section className="introduction">
                <div>
                    <span className="arrows">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M2.24491 24L13 11.9966L2.24491 -4.7012e-07L-1.09223e-07 2.49874L8.5162 11.9966L-9.3985e-07 21.5013L2.24491 24Z" fill="#FF4700"/><path d="M14.2449 -4.7012e-07L12 2.50476L20.5102 12.0067L12 21.502L14.2449 24L25 12.0067L14.2449 -4.7012e-07Z" fill="#FF4700"/></svg>
                    </span>
                    <span>Introduction</span>
                </div>
                <div>
                    <p>We’re built around solid engineering and customer experience. Our developers can 100% get the job done. We have expertise in machine learning and AI in addition to our ability to build custom apps and headless commerce set ups. We can help you increase your metrics by building whatever your business requires.</p>
                    <br />
                    <p>You’ll find all of the skills and experience you’d expect from a top development agency. We specialize in development and marketing. Rather than looking at these as different, neat functions, we use both of them to improve your business metrics of your website and brand.</p>
                </div>
            </section>
            <div className="widths ownerTitle">
                <span className="arrows">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M2.24491 24L13 11.9966L2.24491 -4.7012e-07L-1.09223e-07 2.49874L8.5162 11.9966L-9.3985e-07 21.5013L2.24491 24Z" fill="#FF4700"/><path d="M14.2449 -4.7012e-07L12 2.50476L20.5102 12.0067L12 21.502L14.2449 24L25 12.0067L14.2449 -4.7012e-07Z" fill="#FF4700"/></svg>
                </span>
                <span>Owner</span>
            </div>
            <section className="team widths">
                <img src={blue} />
                <div>
                    <h2>Metturan K.</h2>
                    <h3>CEO</h3>
                    <p>As CEO and Head of Sales, Metturan focuses on providing the highest level of service to Views Digital clients by understanding the market and where it’s going. </p>
                    <br />
                    <p>Metturan frequently is up to date with the latest tech breakthroughs as well as conversion and marketing possibilities.</p>
                </div>
            </section>
            <div className='varyBlack'>
                <section className="introduction">
                    <div>
                        <span className="arrows">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M2.24491 24L13 11.9966L2.24491 -4.7012e-07L-1.09223e-07 2.49874L8.5162 11.9966L-9.3985e-07 21.5013L2.24491 24Z" fill="#FF4700"/><path d="M14.2449 -4.7012e-07L12 2.50476L20.5102 12.0067L12 21.502L14.2449 24L25 12.0067L14.2449 -4.7012e-07Z" fill="#FF4700"/></svg>
                        </span>
                        <span>Team</span>
                    </div>
                    <div>
                        <p>We have employees around the globe that have worked with us for sometime. From Silicon Valley to India and everyone in between, we have picked up quite the team that’s energized and excited to help accomplish our client’s goals.</p>
                    </div>
                </section>
            </div>
            <section className="widths techstack introduction">
                    <div>
                        <span className="arrows">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M2.24491 24L13 11.9966L2.24491 -4.7012e-07L-1.09223e-07 2.49874L8.5162 11.9966L-9.3985e-07 21.5013L2.24491 24Z" fill="#FF4700"/><path d="M14.2449 -4.7012e-07L12 2.50476L20.5102 12.0067L12 21.502L14.2449 24L25 12.0067L14.2449 -4.7012e-07Z" fill="#FF4700"/></svg>
                        </span>
                        <span>Our tech stack</span>
                    </div>
                    <div>
                        <span><img src={logo} /></span>
                        <span><img src={logo2} /></span>
                        <span><img src={logo3} /></span>
                        <span><img src={logo4} /></span>
                        <span><img src={logo5} /></span>
                        <span><img src={logo6} /></span>
                        <span><img src={logo7} /></span>
                        <span><img src={logo8} /></span>
                        <span><img src={logo9} /></span>
                        <span><img src={logo10} /></span>
                        <span><img src={logo11} /></span>
                        <span><img id="react-maxW" src={logo12} /></span>
                        <span><img src={logo13} /></span>
                        <span><img src={logo14} /></span>
                        <span><img src={logo15} /></span>
                        <span><img src={logo16} /></span>
                        <span><img src={logo17} /></span>
                        <span><img src={logo18} /></span>
                        <span><img src={logo19} /></span>
                        <span><img src={logo20} /></span>
                    </div>
            </section>
            <section className='widths'>
                <ContactFormShopify />
            </section>
            <Footer />
            
        </motion.div>
    )
}

export default About;