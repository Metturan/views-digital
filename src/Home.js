import {useRef} from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'
import GreenButton from './GreenButton'
import Quiz from './QuizContainer'
import ContactFormShopify from './ContactFormShopify'

import johnTag from './images/johnstamp.png'
import introimg1 from './images/introimg1.png'
import vs from './images/vs.png'
import redCheck from './images/redcheck.png'
import greenCheck from './images/greenCheck.png'

import whatyouget1 from './images/whatyouget1.png'
import whatyouget2 from './images/whatyouget2.png'
import whatyouget3 from './images/whatyouget3.png'
import gpartner from './images/gpartner.png'
import bottomimg1 from './images/bottomimg1.png'
import bottomimg2 from './images/bottomimg2.png'



const Home = () => {
  const quizRef = useRef();
    return (
      <>
        <Header home={true} />
        <section className='main'>
          <div className="main-inner-section">
            <h1><span className='green'>Roofing Contractors!</span> which lead would you choose?</h1>
            <article className="heroImages">
              <img src={johnTag} />
              <img className="vs" src={vs} />
              <img src={introimg1} />
            </article>
            <article className="proscons">
              <div>
                <h2>"Standard" Leads</h2>
                <ul>
                  <li><img src={redCheck} />Same lead sold to other Roofers</li>
                  <li><img src={redCheck} />Price shoppers and tire kickers</li>
                  <li><img src={redCheck} />Get charged for leads after you cancel (if you can cancel)</li>
                  <li><img src={redCheck} />Name, email address and phone only</li>
                  <li><img src={redCheck} />Leads often miles from your office</li>
                </ul>
              </div>
              <div>
                <h2>What You Deserve</h2>
                <ul>
                  <li><img src={greenCheck} />What their budget is</li>
                  <li><img src={greenCheck} />When they want the job done</li>
                  <li><img src={greenCheck} />19 other questions answered</li>
                  <li><img src={greenCheck} />100% exclusive (lead isn't shared with anyone else.)</li>
                  <li><img src={greenCheck} />As cheap or cheaper than Home Advisor & Angie's list</li>
                </ul>
              </div>
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
            </article>
            <article className="bottomImages1">
              <p>These are the same leads we give to our clients that help them go... </p>
              <p className="tothis"><strong>From this:</strong></p>
              <img src={bottomimg1} />
              <p className="bottomimg1Txt">Over 50 minutes drive away, price shopping with tiny budget.</p>
              <p className="tothis"><strong>To this:</strong></p>
              <img src={bottomimg2} />
              <p className="bottomimg2Txt">In your local area, provided over 19 points of info about their roof, and already has a price range for your services.</p>
              <GreenButton el={quizRef} />
              <ContactFormShopify el={quizRef}/>
            </article>
            <footer>
              <p className="logotop">VIEWS DIGITAL</p>
              {/* <img src={gpartner} /> */}
              <p>Copyright © 2022 Viewscom Corp.</p>
              <p>Registered office address: 2967 Dundas St. W. #734, Toronto, ON M6P 1Z2.</p>
              <p>This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
              <div className='regulation-links'>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms">Terms & Conditions</Link>
                <Link to="/earnings">Earnings Disclaimer</Link>
              </div>
            </footer>
          </div>
        </section>
      </>
    )
}

export default Home;