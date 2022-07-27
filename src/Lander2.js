import {useEffect} from 'react'
import { Link } from "react-router-dom";
import { hotjar } from 'react-hotjar';


import {motion} from 'framer-motion';
import Header from "./Header";
import klaviyo from './images/kk.jpg'
import blog from './images/blog.png'

const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]};

const Lander2  = () => {
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
            <Header menu="shopify" />
            <section className='section-header lander2'>
                <p>We are a Shopify Plus Agency specializing in development and email marketing</p>
            </section>
            <section className='section-choice'>
                <div className="sectioned-split split">
                    <img src={blog} />
                    <h3>Shopify App Development</h3>
                    <p className="sectioned-message">Custom app solutions, Theme app extensions, headless commerce solutions, api integrations.</p>
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
                    <img src={klaviyo} />
                    <h3>Klaviyo Email marketing</h3>
                    <p className="sectioned-message">Connect with your customers in a meaningful way that makes them order over and over agin.</p>
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