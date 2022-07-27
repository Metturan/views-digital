import {useRef, useEffect} from 'react'
import { hotjar } from 'react-hotjar';
import Footer from './Footer'
import Header from './Header'
import PricingSection from './PricingEmail'
import ContactFormEmail from './ContactFormEmail'
import {motion} from 'framer-motion';

import './Shopify.css'

import HeroImage from './images/shopifysites.png'
import group11 from './images/group11.png'
import downArrow from './images/downarrow.png'
import group22 from './images/group12.png'
import group33 from './images/group13.png'
import emailLogos from './images/emaillogos.jpeg'

const transition = {duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96]};

function EmailMarketing() {
  useEffect(() => {
    hotjar.initialize(3083253,6);
  }, [])
  const ctaQuiz = useRef();

  function scrollToQuiz() {
    ctaQuiz.current.scrollIntoView({behavior: "smooth", block: "start"} );
  }

  return (
    <motion.div 
    key="shopifydiv"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={transition}
    >
  
      <div className='page-body'>
          <Header menu='shopify' />
        <section className="shopify-hero">
          <div className='inner-hero'>
            <div className='left-content'>
              <h1>Explosive Growth with Email + SMS Marketing</h1>
              <p>Start increasing your monthly sales and repeat orders.</p>
              <button onClick={() => scrollToQuiz()} >Start Marketing</button>
            </div>
            <div className="right-content">
              <img src={HeroImage} alt="Mockups of Shopify Sites"/>
            </div>
          </div>
        </section>
        <br/>
        <br/>
        <br/>
        <br/>
        <section className="email-techstack widths">
            <div>
                <div>
                    <span className="arrows">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M2.24491 24L13 11.9966L2.24491 -4.7012e-07L-1.09223e-07 2.49874L8.5162 11.9966L-9.3985e-07 21.5013L2.24491 24Z" fill="#FF4700"/><path d="M14.2449 -4.7012e-07L12 2.50476L20.5102 12.0067L12 21.502L14.2449 24L25 12.0067L14.2449 -4.7012e-07Z" fill="#FF4700"/></svg>
                    </span>
                    <span>Our tech partners</span>
                </div>
                <p>Our Agency is constantly upgrading our tech stack to out perform the competition.</p>
            </div>
            <img className="emailLogos" src={emailLogos} />
        </section>
        <section className="email-techstack normal widths">
            <div>
                <div>
                    <span className="arrows">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M2.24491 24L13 11.9966L2.24491 -4.7012e-07L-1.09223e-07 2.49874L8.5162 11.9966L-9.3985e-07 21.5013L2.24491 24Z" fill="#FF4700"/><path d="M14.2449 -4.7012e-07L12 2.50476L20.5102 12.0067L12 21.502L14.2449 24L25 12.0067L14.2449 -4.7012e-07Z" fill="#FF4700"/></svg>
                    </span>
                    <span>How we can help you</span>
                </div>
            </div>
        </section>
        <section className="email-info-box widths">
            <p>Better Results. We’ll completely overhaul your Klaviyo flows and implement product specific cross-sells and consumption flows to improve your unit economics and increase your profit margins with repeat buyers.</p>
            <img src={group11} className="group11"/>
        </section>
        <section className="email-info-box widths">
            <p>We Do More. We’ll continue to optimize, and beat our previous winners month on month to add to your bottom line. Just like an in-house team would.</p>
            <img src={group22} className="group22"/>
        </section>
        <section className="email-info-box widths">
            <p>We’ll Lower Your Risk. Our flows are constantly being looked at and improved upon with precision. Precise pivots with feedback ensure an in-house team could not even do better.</p>
            <img src={group33} className="group33" />
        </section>
        <section>
        <PricingSection />
        </section>
        <section className="widths threepoints">
            <div>
                <h2>Lowering Risk For You While Guaranteeing Results.</h2>
                <p>We know for a FACT that you’ve never utilized an email marketing system like ours before - within 30 days were able to add an extra 20 – 40% revenue to stores with a massive ROI/win for you. </p>
            </div>
            <img className="dwnarrow" src={downArrow} />
            <div>
                <h2>A Predictable And Profitable Revenue Stream That Never Burns Out</h2>
                <p>How great would it be if you could mail your engaged segment and get 30, 40 or even 50% open rates every single time? If you could have higher AOVs through your campaigns? If you could sell to your backend list again and again and again - WITHOUT burning out your list or devaluing your brand? Our system allows you to do all of the above.</p>
            </div>
            <img className="dwnarrow" src={downArrow} />
            <div>
                <h2>We don’t simply set up flows or design pretty templates that don’t convert.</h2>
                <p>We’re going to cultivate, manage, and sell to your backend list in a way that you’ve NEVER seen before. As a consequence of us implementing tried and tested direct response tactics, and liquidating your inventory, your volume of sales will drastically increase along with your profitability - flooding your product fulfillment team.</p>
            </div>
            <img className="dwnarrow" src={downArrow} />
            <h3>Let's Talk</h3>
        </section>
        <section>
          <div className="quiz-section quizShopify">
            <div>
                <ContactFormEmail />
            </div>
            <div>
              <h3>Example for project details.</h3>
              <p><strong>About Us:</strong></p>
              <p>Hi there, I'm Charlie, the founder of Melt. We sell CBD-infused bath bombs and are just getting started building this new business.</p>

              <p><strong>Project Description:</strong></p>
              <p>I recently purchased a Shopify theme from Out of the Sandbox and need help customizing it to fit our needs.</p>
              <p>Given that we only sell 1 product (with a handful of variations), we want to feature it directly on the home page, so that people don't have to click into the product page in order to buy.</p>
              <p> I'll attach the designs below to give you a sense of exactly what we're looking for.</p>
              <p><strong>Project Goal:</strong></p>
              <p>Before we launch, I want to make sure our store feels like our brand and properly highlights our product, as well as maximizes conversion rates.</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </motion.div>
  )
}

export default EmailMarketing;