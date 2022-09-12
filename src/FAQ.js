import Footer from './Footer'
import Header from './Header'
import {motion} from 'framer-motion';

const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]};

const FAQ = () => {
    return (
        <motion.div 
        key="shopifydiv"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={transition}
        >
            <Header menu="shopify" />
            <section className='hero-half'>
                <div className="inner-hero">
                    <h1>Frequently Asked Questions</h1>
                    <p>Answers to some of the most questions that new clients have</p>
                </div>
            </section>
            
            <section className="no-max-widths-faq faq-body">
                <p>There's always questions that people want to know when working with someone new. These are a list of questions that I've been asked the most over the years. If you feel that there is a question you'd like to know the answer to please send me your question through the contact page.</p>
                <ul className="faq-list">
                    <li>
                        <h3>What do you do?</h3>
                        <p>Great question! I'm a freelance Shopify developer. My background is a web developer for many years and now I focus solely on Shopify development. I help Shopify store owners with theme customizations, troubleshooting problems with their website that can cause user experience issues, or optimizing their speed and SEO scores by looking their Core Web Vitals.</p>
                    </li>
                    <li>
                        <h3>Can you give me examples of the services you provide?</h3>
                        <p>Of course! I help store owners with any of the following plus more:</p>
                        <ul className="list-style">
                            <li>New store setups</li>
                            <li>Store redesigns and rebuilds</li>
                            <li>Custom theme modifications
                                <ul>
                                    <li>New custom theme sections</li>
                                    <li>Changing layout of the home/collection/product page</li>
                                    <li>Modifying functionality of the product page</li>
                                    <li>Customizing the header menu and navigation</li>
                                    <li>Integrating third party plugins like facebook pixel or apps from the Shopify app store</li>
                                    <li>Create custom apps for your store</li>
                                </ul>
                            </li>
                            <li>Speed optimization / Core Web Vitals improvements</li>
                            <li>Fixing complicated issues around currency, language, geolocation, taxes and shipping services.</li>
                        </ul>
                        This is a few of the types of jobs I do regularly. If you have something in mind give me a shout out, I'm happy to chat about it.
                    </li>
                    <li>
                        <h3>What does your process look like?</h3>
                        <p>It generally starts with a store owner reaching out to me with a problem they need solved. From there it goes from conversation (email or video call) to contract.</p>
                        <p>It can be more trusting for many people to do a video call and you don't have to turn on your camera. Once you've spoken to me about your current problems, I'll be able to recommend a strategy and let you know what you're options are. I explain things in a non-technical way so you won't feel overwhelmed.</p>
                        <p>After the call, I'll request collaborator access to your store. You'll approve the permissions you feel comfortable with. Scoping out your site allows me to give you an accurate estimate.</p>
                        <p>Finally I'll send you a proposal with the cost and a detailed scope of work so that were on the same page.</p>
                        <p>Once everything looks good, I'll begin by copying your main site and working on the backup so as not to disrupt your normal business. After the work is done, we can hop on a call to review it or I'll send a video walkthrough to make sure it's done correctly. Then you'll be able to publish the draft site or we can move the changes to the existing site.</p>
                    </li>
                    <li>
                        <h3>How much do you charge?</h3>
                        <p>It's hard to say. I used to have an hourly rate but it didn't work well as it would reward me for taking longer and would disadvantage me if I knew what I was doing and could complete a task fast, It doesn't work well from a business perspective. For a budget you should be at least $1000, small project can be less than this but on average it will be that amount to start most customizations.</p>
                    </li>
                    <li>
                        <h3>I just received an invoice from Viewscom Corp. is that you?</h3>
                        <p>Yes, that's me. It's my official business registered here in Canada. I also have an EIN and ITIN number provided to me by my tax guy.</p>
                    </li>
                    <li>
                        <h3>Is it really safe to send you money online?</h3>
                        <p>I understand it can be worrisome to deal with online strangers. If you're not very comfortable with me billing you directly, you can chat with me about using an escrow service through one of my platforms that I use called Storetasker.</p>
                        <p>Funds that are held in escrow mean that I am not able to receive the money until after you've approved the project to be completed. It also ensures safety as theres a trusted third-party between us.</p>
                    </li>
                    <li>
                        <h3>Do you need the username and password to my Shopify store?</h3>
                        <p>No, I will never ask for your username/password to your store. Make sure to not give this information out to anyone. Any Shopify Partner such as myself can request access to your store through sending an invite out. The invite will give me collaborator access and permission to your site that you're okay with. I will only request access to the parts of your site I need to fulfill my work.</p>
                    </li>
                    <li>
                        <h3>If I approve collaborator access to my store, can you see my credit card information?</h3>
                        <p>No. Collaborators do not have access to merchant's payment details.</p>
                    </li>
                    <li>
                        <h3>Do you outsource your work?</h3>
                        <p>In 95% of cases I do the work myself. I generally don't outsource, I may in the future if I choose to scale up this business but for now I don't. And if I do for some reason you will of course know about this ahead of time. The one set of skills that I do always outsource on is stores designs or graphic design.</p>
                        <p>I belive in high quality work and I have a good roster of designers that are top talented, I would rather focus on what I do best which is providing the highest quality development work.</p>
                    </li>
                </ul>
            </section>
            <Footer white={true}/>
    </motion.div>
    )
}

export default FAQ;