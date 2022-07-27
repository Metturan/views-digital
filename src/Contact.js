import {motion} from 'framer-motion';
import {useRef, useEffect} from 'react'
import { hotjar } from 'react-hotjar';
import emailjs from '@emailjs/browser';
import Header from './Header'
import Footer from './Footer'

const transition = {duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96]};

const Contact = () => {
  useEffect(() => {
    hotjar.initialize(3083253,6);
  }, [])
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
      <motion.div 
      key="shopifydiv"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={transition}
      >
            <Header menu="shopify"/>
            <section className='hero-half'>
                <div className="inner-hero">
                    <h1>Contact Us</h1>
                    <p>Can we help? Please leave us a message and we will respond within 24 hours.</p>
                </div>
            </section>
            <div className="contact-container">
              <div>
                <p style={{'textAlign':'center'}}>We look forward to chatting.</p>
              </div>
              <div className="emailContainer">
                <form ref={form} onSubmit={sendEmail}>
                  <label>Your name</label>
                  <input className="normInp" type="text" name="user_name" placeholder='Enter your name' />
                  <br/>
                  <label>Your email</label>
                  <input className="normInp" type="email" name="user_email" placeholder='Enter your email address'/>
                  <br/>
                  <label>Best contact number</label>
                  <input className="normInp" type="text" name="user_phone" placeholder='Enter your phone number'/>
                  <br/>
                  <label>Website</label>
                  <input className="normInp" type="text" name="user_website" placeholder='Enter your website address'/>
                  <br/>
                  <label>Services</label>
                  <select className="normInp" name="user_services">
                    <option value="Shopify Custom App">Shopify Custom App</option>
                    <option value="Headless Commerce">Shopify Headless Commerce</option>
                    <option value="Shopify Custom Development">Shopify Custom Development</option>
                    <option value="Lead Generation Configurator">Lead Configurator Install</option>
                  </select>
                  <br/>
                  <label>Key Objectives / Description</label>
                  <textarea name="message" placeholder='Enter as much details as possible'/>
                  <input className="specialBk" type="submit" value="Send" />
                </form>
              </div>
            </div>
            <section className="footer-custom-contact">
              <Footer white={true} />
            </section>
            </motion.div>
    )
}

export default Contact;