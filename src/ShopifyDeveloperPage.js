import {useRef, useEffect} from 'react'
import { hotjar } from 'react-hotjar';
import ResponsivePlayer from './ResponsivePlayer'
import ArticleSnippet from './ArticleSnippet'
import Footer from './Footer'
import Header from './Header'
import PricingSection from './Pricing'
import Testimonials from './Testimonials'
import ContactFormShopify from './ContactFormShopify'
import TechStackSection from './TechStackSection';
import WhyChooseViews from './WhyChooseViews'
import downArrow from './images/downarrow.png'
import expert from './images/shopify-experts-logo-3.png'

import {motion} from 'framer-motion';

import './Shopify.css'

import ProjectExample from './ProjectExample'
import HeroImage from './images/shopifysites.png'
import articleSnippetImg from './articleImages/codemongo.png'
import articleFeaturedImage from './articleImages/shopify-article-banenr.jpeg'
import articleHydrogenImage from './articleImages/hydrogen.png'

import novabloom1 from './casestudyImages/novabloom1.png'

const nanourl = 'https://vimeo.com/567703280'
const klinkurl = 'https://vimeo.com/567703881'
const intro = 'https://vimeo.com/576850296'

const transition = {duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96]};

function ShopifyDeveloperPage() {
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
          <div className="bkhero" style={{backgroundImage: "url(" + HeroImage + ")"}}></div>
          <div className='inner-hero'>
            <div className='left-content'>
              <h1>Unlock More Sales With Next-gen <span>Shopify Development</span></h1>
              <ul>
                <li>✅ Custom Apps/Theme Modifications</li>
                <li>✅ Money-back Guarantee</li>
                <li>✅ Experts in Shopify Plus</li>
              </ul>
              {/* <p>Get big agency level quality with personal service.</p> */}
              <div>
                <button onClick={() => scrollToQuiz()} >Request a Quote</button>
                <button className="livechatBtn" onClick={() => scrollToQuiz()} >Live Chat</button>
              </div>
              
            </div>
          </div>
        </section>
        <section className="below-hero-points">
          <ul>
            <li>Business in over 10+ countries</li>
            <li>All 5 star reviews</li>
            <li>Satisfaction Guaranteed</li>
            <li>Reliable Team</li>
          </ul>
        </section>

        <section className='intro'>
          <div className='intro-vid'>
            <ResponsivePlayer url={intro} />
          </div>
        </section>
        <section className="widths intro-text">
            <h2 className='intro-h2'>Shopify Web Development</h2>
            <p className='intro-p'>With over 7+ years of Shopify experience we are an expert team of developers & designers. We specialize only in Shopify and offer a variety of services including Shopify store setups, Custom Store Design & Development, Custom App development, as well as ongoing retainer support and E-commerce Rate Optimization so your site is performing at it’s best.</p>
              <p className='intro-p'>We’ve dealt in many industries from technology products to fashion, and always deliver great stunning results. We are on time, and within your budget. Our communication is always a top priority so you can always count on us to be trustworthy.</p>
        </section>
        <section className="projects">
          <ProjectExample 
            image1={novabloom1}
            caseLink='/novabloom'
            classTitle='Novabloom'
            title='Novabloom UK' 
            desc='E-commerce, Shopify.' />
          <ProjectExample 
            url={klinkurl}
            caseLink='/klinkhoff'
            classTitle='Klink'
            title='Klinkhoff Art Gallery' 
            desc='E-commerce, Shopify.' />
          <ProjectExample 
            url={nanourl}
            classTitle='Nano'
            title='Nanoleaf' 
            desc='E-commerce, Shopify Headless CMS.' />
        </section>
        <section>
          <PricingSection />
        </section>
        <section className="featured-example">
          <div className="introduction articles-recent">
            <div>
                <span className="arrows">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M2.24491 24L13 11.9966L2.24491 -4.7012e-07L-1.09223e-07 2.49874L8.5162 11.9966L-9.3985e-07 21.5013L2.24491 24Z" fill="#FF4700"/><path d="M14.2449 -4.7012e-07L12 2.50476L20.5102 12.0067L12 21.502L14.2449 24L25 12.0067L14.2449 -4.7012e-07Z" fill="#FF4700"/></svg>
                </span>
                <span>Recent Articles</span>
            </div>
            <div>
                <ArticleSnippet 
                    tags={['Headless Commerce', 'Development']} 
                    date="July 5, 2022" 
                    title="Is a headless setup the right choice?" 
                    path="/blog/headless-right-choice"
                    img={articleHydrogenImage}
                    desc="Shopify recently announced Hydrogen+Oxygen a react framework for creating custom storefronts but is it for everyone?" 
                />
                <br/>
                <br/>
                <ArticleSnippet 
                    tags={['Custom App', 'Development']} 
                    date="June 28, 2022" 
                    title="Webhooks for Custom Apps" 
                    path="/blog/shopify-webhook"
                    img={articleSnippetImg}
                    desc="Shopify allows for background jobs in your store. Some of these jobs can be for listening for a certain collection to update. We also touch on the importance of offline + online tokens and why they're both needed." 
                />
                <br/>
                <br />
                <ArticleSnippet 
                    tags={['Shopify 2.0', 'Development']} 
                    date="July 13, 2021" 
                    path="/blog/shopify-20"
                    title="Shopify 2.0 - Should Small Business Owners Care?" 
                    img={articleFeaturedImage}
                    desc="Shopify introduces store 2.0 and the company is going in a clear decision towards making editing content and managing products easier. And this is all good for the end user to make Shopify more accessible and friendly." 
                />
            </div>
          </div>
        </section>
        <TechStackSection />
        <WhyChooseViews />
        <Testimonials />
        <section ref={ctaQuiz}>
        <img className="dwnarrow" src={downArrow} />
            <h3 className="letstalk">Let's Talk</h3>
            <div className="quiz-section quizShopify">
            <div>
                <ContactFormShopify />
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
        <Footer white={true}/>
      </div>
    </motion.div>
  )
}

export default ShopifyDeveloperPage;