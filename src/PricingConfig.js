import {useRef} from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'
import GreenButton from './GreenButton'
import Quiz from './QuizContainer'
import Footer from './Footer'
import ContactFormShopify from './ContactFormShopify'
import greenCheck from './images/greenCheck.png'

import whatyouget1 from './images/whatyouget1.png'
import whatyouget2 from './images/whatyouget2.png'
import whatyouget3 from './images/whatyouget3.png'



const PricingConfig = () => {
  const quizRef = useRef();
    return (
      <>
        <Header home={true} />
        <section className='main'>
          <div className="main-inner-section">
            <h1><span className='green'>Home Service Professionals!</span> Are you tired of your website visitors leaving your site to check out your competitor's site?</h1>

            <article className="prosCons">
            <p>Get the highest quality leads - access to more information about your customers.</p>
                <ul>
            <li><img src={greenCheck} />What their budget is</li>
                  <li><img src={greenCheck} />When they want the job done</li>
                  <li><img src={greenCheck} />19 other questions answered</li>
                  <li><img src={greenCheck} />Convert much more of your existing traffic</li>
                  <li><img src={greenCheck} />Your own leads will be cheaper than Home Advisor & Angie's list</li>
                  </ul>
            </article>
            <GreenButton el={quizRef}/>

            <article className="whatyouget">
              <h2>What You Get</h2>
              <div>
                <div>
                  <img src={whatyouget1} />
                  <h3>The Prospect's Budget</h3>
                  <p>No more wasting time on price shoppers.</p>
                </div>
                <div>
                  <img src={whatyouget2} />
                  <h3>When They Want The Job Done</h3>
                  <p>Immediately or 6 months from now?</p>
                </div>
                <div>
                  <img src={whatyouget3} />
                  <h3>Did We Mention Exclusivity?</h3>
                  <p>No more competing with 4 other roofers trying to close the same lead... and our leads are the same price or cheaper than lead aggergators.</p>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className='main2'>
          <div className="main-inner-section">
            <article className="longSpeech">
              <h2>How it works...</h2>
              <p>Where can you get leads like that? With their time frame and even their <span>BUDGET?</span></p>
              <p><span>Home Advisor?</span>  Nope.</p>
              <p><span>Angie's List?</span>  Not there…</p>
              <p><span>Buying ads on Google or Facebook?</span> Not if you want people who need roof repair RIGHT NOW and not a bunch of "price shoppers" shopping you for the lowest price.</p>
              <p>But you can get these leads... including budget and <span style={{"textDecoration": "underline", "fontWeight":"normal"}}>19 other questions</span> answered…</p>
              <p><span>Right from the visitors on your own company website!</span></p>
              <p>98% of your visitors leave because they can't find what they are looking for...</p>
              <p><span style={{"fontWeight":"normal", "textDecoration":"underline"}}>Once you fix this one surprisingly simple thing</span>, your own website will send you leads that convert 5x better than Home Advisor or Angie's List leads.</p>
              <p>(These leads are all yours, which means they are NOT sold to 3-5 of your competitors either)</p>
              <p>Tap the green button below and we'll show you how we do it...</p>
              <GreenButton el={quizRef} />
              <article className='home-services'>
              <h3>Home Professionals that we can help with.</h3>
              <ul>
                <li>Roofing</li>
                <li>Solar</li>
                <li>Kitchen Remodeling</li>
                <li>Flooring</li>
                <li>Windows</li>
                <li>Bathroom Remodeling</li>
                <li>Landscaping</li>
                <li>Sprinklers</li>
                <li>Driveways</li>
              </ul>
            </article>
            </article>
          </div>
        </section>
        <section style={{'margin':'0 auto','width':'90%'}}>
          <ContactFormShopify />
        </section>
      
        <Footer />
      </>
    )
}

export default PricingConfig;