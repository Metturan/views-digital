import {useRef} from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'
import GreenButton from './GreenButton'
import Quiz from './QuizContainer'
import Footer from './Footer'
import ContactFormShopify from './ContactFormShopify'
import greenCheck from './images/greenCheck.png'

import bucket from './images/bucket.png'
import kitchen from './images/kitchen.jpeg'
import flooring from './images/flooring.jpeg'
import windows from './images/windows.jpeg'
import config from './images/config.png'


const PricingConfig = () => {
  const quizRef = useRef();
    return (
      <>
        <Header menu='config' />
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

            {/* <article className="whatyouget">
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
            </article> */}
            <article className="bucket">
                <h2>If your bucket <span className="italic">(website)</span> is leaking, do you keep pouring in more water <span className="italic">(traffic)</span>, or do you fix the leaks?</h2>
                <img src={bucket} />
                <div>
                  <p className="left-bucket">Less than 3% of your current website traffic convers into a lead. What is happening to the remaining 97%?</p>
                  <div className="right-bucket">
                    <p>Your website needs to convert more of your existing traffic into higher quality leads.</p>
                    <p>Our configurator does this.</p>
                  </div>
                </div>
            </article>
          </div>

        </section>

        <section className='main2'>
          <div className="main-inner-section">
            <article className="longSpeech">
              {/* <h2>How it works...</h2>
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
              <GreenButton el={quizRef} /> */}
              <article className="whatconfig">
                <h3>What is exactly is a Lead Generation Configurator?</h3>
                <img src={config} />
                <p>A lead generation configurator guides the user through a journey that meets their exact needs, and determines their affordable budget. This makes the lead extremely valuable.</p>
                <section className="configtable">
                  <div className="table typicallead">
                    <h3>Typical Lead</h3>
                    <div>Hello, you have a new lead!</div>
                    <div className="table-row"><span>Name:</span><span>John Smith</span></div>
                    <div className="table-row"><span>Email:</span><span>johns@abccorp.</span></div>
                    <div className="table-row"><span>Phone:</span><span>(222) 555-1212</span></div>
                    <div className="table-row"><span>Address:</span><span>123 Main St</span></div>
                    <div className="table-row"><span>City:</span><span>Toronto</span></div>
                    <div className="table-row"><span>Province:</span><span>Ontario</span></div>
                    <div className="table-row"><span>Postal Code:</span><span>L0H 1H9</span></div>
                    <div className="table-row"><span>Message:</span><span>I am interested in replacement windows</span></div>
                  </div>
                  <div className="table ourlead">
                    <h3>Our Lead</h3>
                    <div>Hello, you have a new lead!</div>
                    <div className="table-row"><span>Name:</span><span>John Smith</span></div>
                    <div className="table-row"><span>Email:</span><span>johns@abccorp.</span></div>
                    <div className="table-row"><span>Phone:</span><span>(222) 555-1212</span></div>
                    <div className="table-row"><span>Address:</span><span>123 Main St</span></div>
                    <div className="table-row"><span>City:</span><span>Toronto</span></div>
                    <div className="table-row"><span>Province:</span><span>Ontario</span></div>
                    <div className="table-row"><span>Postal Code:</span><span>L0H 1H9</span></div>
                    <div className="table-row"><span>Budget:</span><span>$3,156-$7,224</span></div>
                    <div className="table-row"><span>Need financing:</span><span>Yes</span></div>
                    <div className="table-row"><span>Financing term:</span><span>48 months</span></div>
                    <div className="table-row"><span>Buying time frame:</span><span>within 2 weeks</span></div>
                    <div className="table-row"><span>Consultation date requested:</span><span>April 1, 2022</span></div>
                    <div className="table-row"><span>Consultation time:</span><span>Morning</span></div>
                    <div className="table-row"><span>Attendees:</span><span>John Smith, Mary Smith</span></div>
                    <div className="table-row"><span>Are you the owner?</span><span>Yes</span></div>
                    <div className="table-row"><span>No. of windows:</span><span>6</span></div>
                    <div className="table-row"><span>Size:</span><span>Medium</span></div>
                    <div className="table-row"><span>Trim:</span><span>Reuse</span></div>
                    <div className="table-row"><span>Exterior Colour:</span><span>Premium</span></div>
                    <div className="table-row"><span>Interior Colour:</span><span>Wood</span></div>
                    <div className="table-row"><span>Build Quality:</span><span>Good</span></div>
                    <div className="table-row"><span>Glass Options:</span><span>Standard</span></div>
                    <div className="table-row"><span>Gift Certificate:</span><span>$200</span></div>
                    <div className="table-row"><span>Message:</span><span>I am interested in replacement windows</span></div>
                  </div>
                </section>
              </article>

            </article>
            <h3 className="casetitle">Case Studies</h3>
            <article className="caseSnippets">
              <div className="caseSnippet">
                <div><img src={kitchen} /></div>
                <article>
                  <h3>Kitchen & Bathroom Resurfacing</h3>
                  <p>68.67% Increase in average monthly website leads for this resurfacing company.</p>
                  <button>See case study</button>
                </article>
              </div>
              <div className="caseSnippet">
                <div><img src={flooring} /></div>
                <article>
                  <h3>Carpet & Flooring</h3>
                  <p>600% Increase in website conversions for this carpet & flooring company.</p>
                  <button>See case study</button>
                </article>
              </div>
              <div className="caseSnippet">
                <div><img src={windows} /></div>
                <article>
                  <h3>Window Sales & Installation</h3>
                  <p>303% Increase in leads for this home improvement company.</p>
                  <button>See case study</button>
                </article>
              </div>
            </article>
            <article className='home-services'>
                <h3>Home Improvement Professionals that we work with.</h3>
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
          </div>
        </section>
        <h3 className="config-cta">Send us a message below. And we'll set up a demo for you to see how this can skyrocket your business!</h3>
        <section style={{'margin':'0 auto','width':'90%'}}>
          <ContactFormShopify />
        </section>
      
        <Footer />
      </>
    )
}

export default PricingConfig;