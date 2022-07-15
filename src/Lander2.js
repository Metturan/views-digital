import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import Header from "./Header";
import Footer from "./Footer";
import configurator from './images/configurator.png'
import blog from './images/blog.png'

const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]};

const Lander2  = () => {
    return (
        <motion.div 
        key="shopifydiv"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={transition}
        >
            <Header menu="landing" />
            <section className='section-header lander2'>
                <p>We build custom solutions to help businesses from all backgrounds gain a competitve edge.</p>
            </section>
            <section className='section-choice'>
                <div className="sectioned-split split">
                    <img src={blog} />
                    <h3>Shopify Development</h3>
                    <p className="sectioned-message">Custom app solutions, headless commerce solutions, api integrations.</p>
                    <Link style={{'display':'flex', 'alignItems': 'center'}} className="link link--arrowed seemoreLink" to="/shopify">
                        <p className="btnClass">See more</p>
                        <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g fill="none" stroke="#000" strokeWidth="1.5" strokeLinejoin="round" strokeMiterlimit="10">
                            <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                            <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                        </svg>
                    </Link>
                </div>
                <div className="sectioned-split split2">
                    <img src={configurator} />
                    <h3>Lead Generation Configurator</h3>
                    <p className="sectioned-message">Increase conversions and stop customers from leaving your site.</p>
                    <Link style={{'display':'flex', 'alignItems': 'center'}} className="link link--arrowed seemoreLink" to="/lead-generation">
                        <p className="btnClass">See more</p>
                        <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g fill="none" stroke="#000" strokeWidth="1.5" strokeLinejoin="round" strokeMiterlimit="10">
                            <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                            <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                        </svg>
                    </Link>
                </div>
            </section>
    </motion.div>
    )
}

export default Lander2;