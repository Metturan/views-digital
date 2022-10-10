import {useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {motion} from 'framer-motion';

import ResponsivePlayer from './ResponsivePlayer'
import Footer from './Footer'
import Header from './Header'
import downArrow from './images/downarrow.png'
import me from './freelanceimgs/picofme2.jpg'
import seotech from './freelanceimgs/seotech.png'
import novabloom from './freelanceimgs/novabloom1.png'
import storesetup from './freelanceimgs/storesetup.jpg'
import five27 from './freelanceimgs/five27.jpg'
import saddleback from './freelanceimgs/saddleback.jpg'
import star from './images/star.png'
const intro = 'https://vimeo.com/576850296'

gsap.registerPlugin(ScrollTrigger);
const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]};

const Freelance = () => {
    const serviceSection = useRef();
    const startProjectBtn = useRef();
    const testiesSection = useRef()
    const serviceOne = useRef();
    const serviceTwo = useRef();
    const serviceThree = useRef();
    const serviceFour = useRef();
    const serviceFive = useRef();

    let elementWithOffset;

    useEffect(() => {
          ScrollTrigger.create({
            trigger: testiesSection.current,
            start: 'top center',
            end: 'top center',
            onEnter: () => [gsap.to('.freelance-page', {backgroundColor: '#fff', duration: 1.3, color:'#000'}), gsap.to('.freelance-page .header', {backgroundColor: '#fff', duration: 1.3, color: '#000', borderBottom: '1px solid #ddd'}), gsap.to('.freelance-page #mainLogo', {opacity: 0, duration: 1.3 }),gsap.to('.freelance-page .outline', {color: '#fff',  duration: 1.3, background: '#042825'}), gsap.to('.freelance-page .mobnav > div', {background: '#000', duration: 1.3}) ],
            onEnterBack: () => [gsap.to('.freelance-page', {backgroundColor: '#042825', duration: 1.3, color:'#fff'}), gsap.to('.freelance-page .header', {backgroundColor: '#042825',  duration: 1.3, color: '#fff', borderBottom: '1px solid #042825'}), gsap.to('.freelance-page #mainLogo', {opacity: 1, duration: 1.3 }), gsap.to('.freelance-page .outline', {color: '#000',  duration: 1.3, background: 'rgb(166, 193, 191)'}), gsap.to('.freelance-page .mobnav > div', {background: '#fff', duration: 1.3})]
          });

          const elems = gsap.utils.toArray('.txt');
          elems.forEach(elem => {
            ScrollTrigger.create({
              trigger: elem,
              onEnter: function() { animateFrom(elem) }, 
              onEnterBack: function() { animateFrom(elem) },
              onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
            });
          })
          

    }, [])

    function hide(elem) {
      gsap.set(elem, {y: 100, autoAlpha: 0});
    }

    function animateFrom(elem) {
      gsap.fromTo(elem, {y: 100, autoAlpha: 0}, {
        duration: 1.25,  
        autoAlpha: 1, 
        y:0,
        ease: "expo", 
        overwrite: "auto"
      });
    }

    function scrollToService() {
        elementWithOffset = serviceSection.current.offsetTop - 80;
        window.scrollTo({top: elementWithOffset, behavior: 'smooth'});
    }
    function scrollToServiceOne() {
        elementWithOffset = serviceOne.current.offsetTop - 80;
        window.scrollTo({top: elementWithOffset, behavior: 'smooth'});
    }
    function scrollToServiceTwo() {
        elementWithOffset = serviceTwo.current.offsetTop - 80;
        window.scrollTo({top: elementWithOffset, behavior: 'smooth'});
    }
    function scrollToServiceThree() {
        elementWithOffset = serviceThree.current.offsetTop - 80;
        window.scrollTo({top: elementWithOffset, behavior: 'smooth'});
    }
    function scrollToServiceFour() {
        elementWithOffset = serviceFour.current.offsetTop - 80;
        window.scrollTo({top: elementWithOffset, behavior: 'smooth'});
    }
    function scrollToServiceFive() {
        elementWithOffset = serviceFive.current.offsetTop - 80;
        window.scrollTo({top: elementWithOffset, behavior: 'smooth'});
    }

    return (
        <motion.div 
        key="shopifydiv"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={transition}
        >
        <section className="freelance-page">
            <Header menu="shopify"/>
            <section className="freelance-body no-max-widths">
                <section className="freelance-hero">
                    <div>
                        <p className="capital-title txt">Custom Shopify Development</p>
                        <h1 className="txt">Unlock More Sales With Expert <span style={{'color':'#a6c1bf'}}>Shopify Development</span></h1>
                        <p className="freelance-subpara txt">Focus more on your business and take back your energy and time</p>
                        <button className="hero-button txt" onClick={scrollToService}>Learn More</button>
                    </div>
                    <div>
                        <img src={me} />
                    </div>
                </section>
                <section className="freelance-sales-points">
                    <ul>
                        <li>
                            <h3 className="txt">Vetted Shopify Expert</h3>
                            <p className="txt">I've worked on many stores across different countries. I'm also a Shopify Plus developer.</p>
                        </li>
                        <li>
                            <h3 className="txt">Custom Development</h3>
                            <p className="txt">I won't tell you to download apps for everything. I will make sure you know you're options.</p>
                        </li>
                        <li>
                            <h3 className="txt">Great Communication</h3>
                            <p className="txt">I'll speak to you in a way that you'll understand. Talking to a developer should be stress-free.</p>
                        </li>
                    </ul>
                </section>
                <section className='freelance-intro'>
                    <h2 className="txt">An Intro About Me</h2>
                    <div className='freelance-intro-vid'>
                        <ResponsivePlayer url={intro} />
                    </div>
                </section>
                <section className="freelance-testies" ref={testiesSection}>
                    <h2 className="txt">What Other's Had To Say</h2>
                    <div>
                        <div className="freelance-testbody">
                            <p className="txt">First time to try Views Digital and it couldn't be any better than with this guy Metturan. Extremely quick and delivers on-time. Communicates effectively and his openness to alternative solutions sealed the deal for me. Thank you!</p>
                            <div>
                                <br/>
                                <p className="freelance-test-p">
                                    <span className="freelance-stars">
                                        <img src={star} />
                                        <img src={star} />
                                        <img src={star} />
                                        <img src={star} />
                                        <img src={star} />
                                    </span>
                                    <strong className="txt">- Mark, CEO at Crem Gelato</strong></p>
                            </div>
                        </div>
                        <div className="freelance-testbody">
                            <p className="txt">Project was seamless from start to finish. Keen to really open up the scope and get Metturan to help me dig in and deliver a great website for my business.</p>
                            <div>
                                <br/>
                                <p className="freelance-test-p">
                                    <span className="freelance-stars">
                                        <img src={star} />
                                        <img src={star} />
                                        <img src={star} />
                                        <img src={star} />
                                        <img src={star} />
                                    </span>
                                    <strong className="txt">- Ahmed, CEO at Court Order</strong></p>
                            </div>
                        </div>
                        <div className="freelance-testbody">
                            <p className="txt">Metturan was a huge driving force on the project, who cooly handled every curveball we were thrown in implementing the client's requests. Huge kudos for taking on a very challenging project.</p>
                            <div>
                                <br/>
                                <p className="freelance-test-p">
                                    <span className="freelance-stars">
                                        <img src={star} />
                                        <img src={star} />
                                        <img src={star} />
                                        <img src={star} />
                                        <img src={star} />
                                    </span>
                                    <strong className="txt">- Jaclynn Wong at TTT Studios</strong></p>
                            </div>
                        </div>
                    </div>
                </section>
                <section ref={serviceSection} className="freelance-services">
                    <h2 className="txt">Custom Shopify Development</h2>
                    <p className="txt">I offer end to end Shopify solutions ranging from store setup to ongoing maintenance and support.</p>
                    <div className="services-tagged">
                        <ul>
                            <li onClick={scrollToServiceOne}>Theme Modifications</li>
                            <li onClick={scrollToServiceTwo}>Technical SEO</li>
                            <li onClick={scrollToServiceThree}>Migrations</li>
                            <li onClick={scrollToServiceFive}>Third-party App Integrations</li>
                            <li onClick={scrollToServiceFive}>Custom App Solutions</li>
                            <li onClick={scrollToServiceFour}>Setup + Troubleshooting</li>
                            <li onClick={scrollToServiceOne}>Store Redesign & Build</li>
                        </ul>
                    </div>
                    <div className="freelance-services-list">
                        <ul>
                            <li className="freelance-service-list-item" ref={serviceOne}>
                                <div>
                                    <h3 className="txt">Theme Modifications</h3>
                                    <p className="txt">Need a new store design, a landing page, or you need more functionality built into your Shopify site? I can help to see if you need some existing changes to your current site or build a new store with a new design to help improve the user experience in order to meet your sales goals.</p>
                                </div>
                                <div>
                                    <img src={five27} />
                                </div>
                            </li>
                            <li className="freelance-service-list-item" ref={serviceTwo}>
                                <div>
                                    <h3 className="txt">Technical SEO</h3>
                                    <p className="txt">Everything from speed optimization to ensuring that your Google Search Console is set up properly, Technical Search Engine Optimization (SEO) services deals with making certain that your website is being properly found and indexed by major search engines.</p>
                                </div>
                                <div>
                                    <img src={seotech} />
                                </div>
                            </li>
                            <li className="freelance-service-list-item" ref={serviceThree}>
                                <div>
                                    <h3 className="txt">Migrations</h3>
                                    <p className="txt">If you are transitioning from a range of popular or lesser-known platforms to Shopify then you will need to create a strategy and execute properly to ensure all necessary data moves over.</p>
                                    <p className="txt">This involves everything and includes products, orders, customers, categories, images, manufacturers, coupons, reviews, CMS pages, blogs, pricing/inventory rules, and content. It is also important to ensure that there are redirects set up so as not to lose the integrity of your SEO ranking for your store and its individual pages.</p>
                                </div>
                                <div>
                                    <img src={saddleback} />
                                </div>
                            </li>
                            <li className="freelance-service-list-item" ref={serviceFour}>
                                <div>
                                    <h3 className="txt">Store Setup + Product Import</h3>
                                    <p className="txt">I can help with getting your Shopify store set up from scratch. This includes handling complex areas such as product setup, shipping, payment configuration, and tax settings, as well as products/product categories with images and descriptions on your behalf. Our efficient service means your store can be fully operational to start generating sales in no time.</p>
                                </div>
                                <div>
                                    <img src={storesetup} />
                                </div>
                            </li>
                            <li className="freelance-service-list-item" ref={serviceFive}>
                                <div>
                                    <h3 className="txt">Custom App Solutions on Shopify</h3>
                                    <p className="txt">I can help build you an app or a third-party plugin that's specific to your stores needs. From checkout extension customizations, shipping services api integrations, to delivery scheduling apps. I'll figure out a strategy that will work best for you and your business goals - that includes time and budget.</p>
                                </div>
                                <div>
                                    <img src={novabloom} />
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <img className="dwnarrow txt" src={downArrow} />
                    <h3 className="letstalk txt">Have a project in mind?<br/> Let’s get to work.</h3>
                    <Link to="/contact" ref={startProjectBtn} id="footerStartProject">Start a Project</Link>
                </section>
            </section>
            <Footer white={true}/>
        </section>
        </motion.div>
    )
}

export default Freelance;