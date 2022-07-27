
import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import Header from './Header'

const ContactFormEmail = () => {
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
        <>
            <div className="contact-container contactShopify">
              <div className="emailContainer">
              <form ref={form} onSubmit={sendEmail}>
                  <div>Get in Touch:</div>
                  <div>
                    <label>Your name</label>
                    <input className="normInp" type="text" name="user_name" placeholder='Enter your name' />
                    <br/>
                    <label>Your email</label>
                    <input className="normInp" type="email" name="user_email" placeholder='Enter your email address'/>
                    <br/>
                    <label>Best contact number</label>
                    <input className="normInp" type="text" name="user_phone" placeholder='Enter your phone number'/>
                    <br/>
                  </div>
                  <div>
                    <label>Website</label>
                    <input className="normInp" type="text" name="user_website" placeholder='Enter your website address'/>
                    <br/>
                    <label>Services</label>
                    <select className="normInp" name="user_services">
                      <option value="Email + SMS Management">Klaviyo Email + SMS Management</option>
                      <option value="Email Marketing Audit">Email Marketing Audit</option>
                      <option value="Klaviyo Email Management">Klaviyo Email Management</option>
                      <option value="SMS Management">SMS Management</option>
                    </select>
                    <br/>
                    <label>Key Objectives / Description</label>
                    <textarea name="message" placeholder='Enter as much details as possible' />
                    <input className="specialBk" type="submit" value="Send" />
                  </div>
                </form>
              </div>
            </div>
        </>
    )
}

export default ContactFormEmail;