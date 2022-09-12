import {useEffect} from 'react'
import { hotjar } from 'react-hotjar';
import Header from './Header'
import {motion} from 'framer-motion';
import ContactFormShopify from './ContactFormShopify'
import TechStackSection from './TechStackSection'
import Footer from './Footer'
import StartProjectSnippet from './StartProjectSnippet'


const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]};

const About = () => {
    useEffect(() => {
        hotjar.initialize(3083253,6);
    }, [])
    return (
        <motion.div 
        key="shopifydiv"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={transition}
        >
            <Header menu='shopify'/>
            <section className='hero-half'>
                <div className="inner-hero">
                    <h1>About Me</h1>
                    <p>Learn more about Views Digital and how we could help you achieve your business goals.</p>
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
                    <p>I am first and foremost a web developer. I work under my company called Views Digital. I’ve been a developer for more than 7 years now. I’ve worked for digital agencies to start ups working with the latest tech.</p>
                    <br />
                    <p>I started this business two years ago to work specifically with e-commerce store owners On Shopify. I don’t work within any other platforms anymore other than Shopify unless it’s for the purpose of migrating a site from one platform (Woocommerce, SquareSpace, bigCommerce etc.) over to Shopify.</p>
                    <br />
                    <p>Over the last couple years I’ve done a handful or different jobs. Some of the most popular jobs are theme modifications, store redesign/rebuilds, custom apps, SEO technical check ups, site optimizations, integrating third party api’s, custom plugin/modules, bundled product builders and I’m sure I’m missing some other tasks. </p>
                    <br/>
                    <p>So if you are interested in working together to build out your online store. tell us a little about your brand and maybe we can hop on a call to brainstorm a growth plan for your business together.</p>
                </div>
            </section>
            {/* <div className="widths ownerTitle">
                <span className="arrows">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M2.24491 24L13 11.9966L2.24491 -4.7012e-07L-1.09223e-07 2.49874L8.5162 11.9966L-9.3985e-07 21.5013L2.24491 24Z" fill="#FF4700"/><path d="M14.2449 -4.7012e-07L12 2.50476L20.5102 12.0067L12 21.502L14.2449 24L25 12.0067L14.2449 -4.7012e-07Z" fill="#FF4700"/></svg>
                </span>
                <span>Owner</span>
            </div> */}
            {/* <section className="team widths">
                <img src={blue} />
                <div>
                    <h2>Metturan K.</h2>
                    <h3>CEO</h3>
                    <p>As CEO and Head of Sales, Metturan focuses on providing the highest level of service to Views Digital clients by understanding the market and where it’s going. </p>
                    <br />
                    <p>Metturan frequently is up to date with the latest tech breakthroughs as well as conversion and marketing possibilities.</p>
                </div>
            </section> */}
            <div className='varyBlack'>
                <section className="introduction">
                    <div>
                        <span className="arrows">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M2.24491 24L13 11.9966L2.24491 -4.7012e-07L-1.09223e-07 2.49874L8.5162 11.9966L-9.3985e-07 21.5013L2.24491 24Z" fill="#FF4700"/><path d="M14.2449 -4.7012e-07L12 2.50476L20.5102 12.0067L12 21.502L14.2449 24L25 12.0067L14.2449 -4.7012e-07Z" fill="#FF4700"/></svg>
                        </span>
                        <span>Team</span>
                    </div>
                    <div>
                    <p>I have some partners that I work with from time to time who are senior, vetted and trusted. They are top performers and reliable people I’ve done business with in the past that get results, they include designers + marketers.  While we do occasionally partner up with talent from around the globe it is mainly talent from North America.</p>
                    </div>
                </section>
            </div>
 <TechStackSection/>
                <StartProjectSnippet/>
            <Footer white={true} />
            
        </motion.div>
    )
}

export default About;