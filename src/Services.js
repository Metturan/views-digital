import Header from './Header'
import {useRef, useEffect} from 'react'
import { hotjar } from 'react-hotjar';
import {motion} from 'framer-motion';
import ContactFormServices from './ContactFormServices'
import Footer from './Footer'
import ServiceItem from './ServiceItem';

const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]};

const Services = () => {
    useEffect(() => {
        hotjar.initialize(3083253,6);
    }, [])
    let development = useRef()
    let email = useRef()

    const clickDev = () => {
        development.current.classList.add('active')
        email.current.classList.remove('active')
    }
    const clickEmail = () => {
        development.current.classList.remove('active')
        email.current.classList.add('active')
    }

    return (
        <motion.div 
        key="shopifydiv"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={transition}
        >
            <Header menu='shopify'/>
            <section className='hero-half'>
                <div className="inner-hero">
                    <h1>Services</h1>
                    <p>Our most popular services and a starting price</p>
                </div>
            </section>
            <section className="widths intro-services">
                <h2>Clear and affordable pricing for even small businesses.</h2>
                <p>For projects big and small. Our hourly rate goes from $90 - $125.</p>
            </section>
            <ul className="service-cat">
                <li onClick={clickDev}>Development</li>
                <li className="ll">|</li>
                <li onClick={clickEmail} ref={email}>Email</li>
            </ul>
            <section ref={development} className='widths service-spacing development active'>
                <ServiceItem 
                    job="Slide-Out Cart"
                    desc="Customize the functionality of the themes minicart to include what you feel is missing."
                    days="2 days"
                    price="199"
                />
                <ServiceItem 
                    job="Customize Product Page"
                    desc="Add more functionality to the product form and content on the page."
                    days="1 day"
                    price="150"
                />
                <ServiceItem 
                    job="In Cart Upsell"
                    desc="Extend your cart page/minicart to include upsells and boost sales."
                    days="2 days"
                    price="375"
                />
                <ServiceItem 
                    job="Better Website Performance/optimizations"
                    desc="A site audit/breakdown that will help to uncover what's causing the slow downs and how to resolve them."
                    days="3 days"
                    price="499"
                />
                <ServiceItem 
                    job="Product Bundles"
                    desc="Create a build a box product page where customers can choose to combine multiple products."
                    days="2 days"
                    price="375"
                />
                <ServiceItem 
                    job="Migrate to Shopify"
                    desc="Migrate your site over to Shopify from other ecommerce platforms like Wordpress, Big Commerce etc."
                    days="7 days"
                    price="999"
                />
                <ServiceItem 
                    job="Build a Custom Shopify Theme"
                    desc="Other themes not working for you and you want to do something more customized to your brand."
                    days="10 days"
                    price="1,900"
                />
                <ServiceItem 
                    job="Build a Wholesale Site with Accounts"
                    desc="Looking to get a wholesale portal working on Shopify, we can help."
                    days="9 days"
                    price="2,500"
                />
                <ServiceItem 
                    job="30 Hours per Month Retainer"
                    desc="A retainer basis may be better for you if you have a different tasks and expect to a continuous workflow."
                    days="Monthly"
                    price="2,500"
                />
                <ServiceItem 
                    job="Build a Custom Shopify App"
                    desc="Can't find something on the Shopify app store that works like how you want. Don't worry we can build anything to match your specifications."
                    days="14 days"
                    price="4,500"
                />
                <ServiceItem 
                    job="Custom Product Suggestion Quiz"
                    desc="Sometimes a product offering can be complicated, so it may be beneficial to qualify your customer to match them with the correct product/service."
                    days="7 days"
                    price="1,500"
                />
                <ServiceItem 
                    job="Headless Commerce with Hydrogen + Oxygen"
                    desc="Need a custom storefront that will connect to a single backend, no worries we got you."
                    days="14 days"
                    price="7,500"
                />
            </section>
            <section ref={email} className='widths service-spacing email'>
                <ServiceItem 
                    job="Email Marketing Audit"
                    desc="We'll take a look at your email metrics and share ideas you've never seen before to get you where you need to go."
                    days="3 days"
                    price="1000"
                />
                <ServiceItem 
                    job="Klaviyo Email Managemewnt"
                    desc="We'll do the setup and create brand and promo campaigns that are guarenteed to hit to pay you over and over again on the backend."
                    days="Monthly (no retainer)"
                    price="3500"
                />
                <ServiceItem 
                    job="SMS Management"
                    desc="Similar to the email marketing but over SMS and with certain differences made for mobile."
                    days="Monthly (no retainer)"
                    price="1000"
                />
            </section>
            <section className='widths'>
                <ContactFormServices />
            </section>
            <Footer white={true} />
            
        </motion.div>
    )
}

export default Services;