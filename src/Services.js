import Header from './Header'
import {motion} from 'framer-motion';
import ContactFormShopify from './ContactFormShopify'
import Footer from './Footer'
import ServiceItem from './ServiceItem';


const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]};

const Services = () => {
    return (
        <motion.div 
        key="shopifydiv"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}e
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
                <p>For projects big and small. Our hourly rate goes from $75 - $100.</p>
            </section>
            <section className='widths service-spacing'>
                <ServiceItem 
                    job="Slide-Out Cart"
                    desc="Customize the functionality of the themes minicart to include what you feel is missing."
                    days="2"
                    price="199"
                />
                <ServiceItem 
                    job="Customize Product Page"
                    desc="Add more functionality to the product form and content on the page."
                    days="1"
                    price="150"
                />
                <ServiceItem 
                    job="In Cart Upsell"
                    desc="Extend your cart page/minicart to include upsells and boost sales."
                    days="2"
                    price="375"
                />
                <ServiceItem 
                    job="Better Website Performance/optimizations"
                    desc="A site audit/breakdown that will help to uncover what's causing the slow downs and how to resolve them."
                    days="3"
                    price="499"
                />
                <ServiceItem 
                    job="Product Bundles"
                    desc="Create a build a box product page where customers can choose to combine multiple products."
                    days="2"
                    price="375"
                />
                <ServiceItem 
                    job="Migrate to Shopify"
                    desc="Migrate your site over to Shopify from other ecommerce platforms like Wordpress, Big Commerce etc."
                    days="7"
                    price="999"
                />
                <ServiceItem 
                    job="Build a Custom Shopify Theme"
                    desc="Other themes not working for you and you want to do something more customized to your brand."
                    days="10"
                    price="1,900"
                />
                <ServiceItem 
                    job="Build a Wholesale Site with Accounts"
                    desc="Looking to get a wholesale portal working on Shopify, we can help."
                    days="9"
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
                    days="14"
                    price="4,500"
                />
                <ServiceItem 
                    job="Custom Product Suggestion Quiz"
                    desc="Sometimes a product offering can be complicated, so it may be beneficial to qualify your customer to match them with the correct product/service."
                    days="7"
                    price="1,500"
                />
                <ServiceItem 
                    job="Headless Commerce with Hydrogen + Oxygen"
                    desc="Need a custom storefront that will connect to a single backend, no worries we got you."
                    days="14"
                    price="7,500"
                />
            </section>


            <section className='widths'>
                <ContactFormShopify />
            </section>
            <Footer />
            
        </motion.div>
    )
}

export default Services;