import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'

const transition = {duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96]};

const Thanks = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const accordionClick = (e) => {
        let headingHeight = e.currentTarget.clientHeight
        let paraHeight = e.currentTarget.nextElementSibling.clientHeight;

        if (e.currentTarget.classList.contains('open')) {
            e.currentTarget.classList.remove('open')
            e.currentTarget.parentElement.style.height = parseInt(headingHeight) + 'px'
        } else {
            e.currentTarget.classList.add('open')
            e.currentTarget.parentElement.style.height = parseInt(headingHeight + paraHeight) + 'px'
        }
    }

    return (
        <motion.div 
      key="shopifydiv"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={transition}
      >
            <Header menu="shopify"/>
            <section className="thanks-container">
                <h1>Thank You</h1>
                <p className="thanks-subtitle">(IT'S {date}, AND YOU JUST MADE HISTORY.)</p>
                <div className="thanks-story">
                    <p><strong>Your message has been sent!</strong></p>
                    <p>We'll get back to you as soon as we can. Fingers crossed for making the partnership happen! 🤞</p>
                    <Link to="/contact">Send another message</Link>
                </div>
                <div className="thanks-story2">
                    <h2>WAIT, WHAT HAPPENS NEXT?</h2>
                </div>
                <div className="accordion-menu">
                    <ul>
                        <li className="accord-item" >
                            <div onClick={accordionClick} className="accord-title">
                                <h3>You reach out</h3><span className="accord-span">(<svg fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="c-PJLV c-PJLV-iiCNZPo-css"><path d="M14 3.41829 6.10457 11.3137 1.79085 7" stroke="currentColor" strokeWidth="2"></path></svg>Done)</span><svg width="13" id="plus" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" className="c-PJLV c-bAMktO"><path d="M.9805 6h12m-6-6v12" stroke="currentColor" strokeWidth="2"></path></svg><svg id="negative" width="13" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" className="c-PJLV c-feRHxg"><path d="M0 6h12" stroke="currentColor" strokeWidth="2"></path></svg>
                            </div>
                          
                            <p className="accord-p">Once you do, we take a look at what you need and ask a few follow-up questions. If it’s a mutual fit, you’re introduced to a Manager of Strategic Partnerships that will guide you going forward.</p>
                        </li>
                        <li className="accord-item">
                            <div onClick={accordionClick} className="accord-title">
                                <h3>We schedule a call or meeting</h3><svg width="13" id="plus" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" className="c-PJLV c-bAMktO"><path d="M.9805 6h12m-6-6v12" stroke="currentColor" strokeWidth="2"></path></svg><svg id="negative" width="13" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" className="c-PJLV c-feRHxg"><path d="M0 6h12" stroke="currentColor" strokeWidth="2"></path></svg>
                            </div>
                          
                            <p className="accord-p">I'll personally get back to you within 24 hours. Together, you schedule a call or meeting to go over details of the project or we it can be done through email.</p>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer white={true} />
      </motion.div>
    )
}

export default Thanks;