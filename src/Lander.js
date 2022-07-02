import {Link} from 'react-router-dom'
import Header from './Header'
import About from './AboutSection'
import Footer from './Footer'
import ico7 from './icos/download3.jpeg'
import bkvid from './vid/whitebk.mp4'
import roofingbk from './images/roofing_49126096.jpeg'

import '.'

const Lander = () => {
  return (
    <>
    <Header/>
    <section className="landing">
      <img className="roofingbk" src={roofingbk} />
      <div className="bcgs">
        <h2>Highest quality leads for contractors</h2>
        <p style={{'marginBottom': '40px'}}>Premier lead generation agency specializing in roofing and home services.</p>
        {/* <p style={{'margin': '20px 0 28px 0', 'maxWidth': '400px'}}>Currently generating leads and increasing sales for our customers across all of Canada/US</p> */}
      </div>
      <div className="choice-panel">

        <div>
          <img src={ico7} alt="home services leads"/>
          <h3>Roofing, Landscaping etc. leads</h3>
          <div style={{'display':'flex', 'alignItems':'center'}}>
            
            <section className="centered-container">
              <a style={{'display':'flex'}} className="link link--arrowed" href="#"><p>Find out more.</p>
                <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <g fill="none" stroke="#000" strokeWidth="1.5" strokeLinejoin="round" strokeMiterlimit="10">
                    <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                    <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                  </g>
                </svg>
              </a>
            </section>
          </div>
        </div>
      </div>
    </section>
    <About />
    <Footer />
    </>
  )
}

export default Lander;