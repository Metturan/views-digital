import {motion} from 'framer-motion';

import Header from './Header'
import Footer from './Footer'

import novabloom1 from './casestudyImages/novabloom1.png'
import novabloom2 from './casestudyImages/novabloom2.png'
import novabloom3 from './casestudyImages/novabloom3.png'
import novabloom4 from './casestudyImages/novabloom4.png'

const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]};


function CaseNovaBloom() {
  return (
    <motion.div 
    key="articlepage"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={transition}
    >
    <Header  menu="shopify" />
    <div className='case-study-page'>
    <section className='hero-half'>
        <div className="inner-hero">
            <h1>Nova Bloom UK</h1>
            <p>Requested to build a custom delivery app that could fit there own requirements.</p>
        </div>
    </section>
      <div className="intro-featured">
          <p className="widths intro-text-case">A flower shop that sells all over the UK nationwide because of the complications with postcodes, delivery schedules, whitelisting/blacklisting postcodes and upsells on the product page/cart page they required something more custom then the shopify app store could provide.</p>
        </div>
      <section className="widths casestudy">
        <h2>Custom Features + Integrations</h2>
        <div className="featured">
          <img src={novabloom1} />
          <p>Each product has different lead dates and a date has to be selected before a product can be added to the cart. It get’s more complicated as there are different postcodes (whitelisted and blacklisted) and only certain products can be used with a certain postcodes.</p>
          <p>We created a custom calendar sidebar that dynamically works to verify the customers postcode and show the available dates based on the product.</p>
        </div>
        <div className="featured">
          <img src={novabloom3} />
          <p>Secondly we redesigned the cart page to have a multistep cart flow. This allows for upsells and gift cards to be added via the private app.</p>
          <p>Cart messages are presented along the flow and are dynamic based on delivery dates for each product.</p>
        </div>
        <div className="featured">
          <img src={novabloom4} />
        </div>
        <div className="featured">
          <img src={novabloom2} />
          <p>If you are a store owner with and can’t find an app in the Shopify marketplace to work with your requirements and need something more customizable on the backend/frontend, give us a shout and we can make anything work to your requirements.</p>
        </div>
      </section>
      <Footer />
    </div>
    </motion.div>
  )
}

export default CaseNovaBloom;