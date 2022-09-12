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

    emailjs.sendForm('service_bp6li5j', 'template_fkhvqxw', form.current, 'user_OJdLjW4coK6cy7d5ELFzC')
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

            <div className="contact-container">
              <div>
                    <h1>Get a Free Quote</h1>
                    <p>Get in touch with me and I'll provide you with a free quote. Fill out the form and let me know what you'd like assistance with. Whether it's customizing your store, adding new features to your theme, integrating a third-party app. I'd be happy to be a part of your team.</p>
                    <br/>
                    <p>To learn more about the next steps, skip on down below.</p>
              </div>
              <div className="emailContainer">
                <form ref={form} onSubmit={sendEmail}>
                  <div className='formgroup'>
                    <div>
                      <label>Your name</label>
                      <input className="normInp" type="text" name="user_name" placeholder='Enter your name' />
                    </div>
                    <div>
                      <label>Your email</label>
                      <input className="normInp" type="email" name="user_email" placeholder='Enter your email address'/>
                    </div>
                  </div>
                  

                  <div className="formgroup">
                    <div>
                      <label>Store URL</label>
                      <input className="normInp" type="text" name="user_website" placeholder='For ex. store.myshopify.com'/>
                    </div>
                    <div>
                    
                      <label>How did you hear about me? <span>(optional)</span></label>
                      <select className="normInp" name="hear_about_us">
                        <option value="Shopify Custom App">Select...</option>
                        <option value="Shopify Custom App">Search Engine</option>
                        <option value="Headless Commerce">Social Media</option>
                        <option value="Shopify Custom Development">Facebook</option>
                        <option value="Shopify Design">LinkedIn</option>
                        <option value="Shopify Design">Recommended by friend or colleague</option>
                      </select>
                    </div>
                  </div>
         
                  <label>Key Objectives / Description</label>
                  <textarea name="message" placeholder='Enter as much details as possible'/>
                  <input className="specialBk" type="submit" value="Send" />
                </form>
              </div>
            </div>
            <section className="process">
              <h2>Want to Learn More? Here's The Process.</h2>
              <p>Once you've completed the form, I generally respond within 1 business day. I may ask you some additional questions or we'll schedule a strategy call with no obligations. Video call's are a good way to build trust and I will have my camera on. </p>
              <p>On the call, we'll talk about what you're hoping to achieve as well as the goals/intent of you're suggested solutions so I can ensure that it's the best path forward and provide you with potential alternatives to ensure you have all the options available to you.</p>
              
              <h2 className="space-above">Commonly Asked Questions</h2>
              <p>If you want to check out our FAQ, click here. Over the years there are some common questions I have received, I've taken note of them and presented answers for most of your questions.</p>
            </section>

            <section className="footer-custom-contact">
              <Footer white={true} />
            </section>
            </motion.div>
    )
}

export default Contact;