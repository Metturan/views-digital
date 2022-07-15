
import Header from '../Header'
import Footer from '../Footer'
import ContactFormShopify from '../ContactFormShopify'

import shopifyarticleimage from '../articleImages/hydrogen.png'
import shopifyarticleimage2 from '../articleImages/customcms.png'
import shopifyarticleimage3 from '../articleImages/hydrogenadmin.png'

function ArticleHeadlessRightChoice () {
  return (
    <div className="page-top article">
      <Header menu="shopify" />
      <section className='hero-half articles'>
          <div className="inner-hero">
              <h1>Is a headless setup the right choice?</h1>
              <p>July 5th, 2022</p>
          </div>
      </section>
      <div className='page-width'>
        <br/>
        <br/>
        <p>There’s been a lot of talk recently about Shopify’s headless commerce setup of Hydrogen+Oxygen.</p>
        <br/>
        <h2>What is this headless commerce setup?</h2>
        <img src={shopifyarticleimage} alt="Headless Commerce" />
        <caption>Introducing Hydrogen</caption>
        <p>With all the FOMO you may get caught up in to thinking that you will need to go this route as well. Nobody wants to get left behind. But the question you as a store owner must ask yourself is what is the point of this and will this improve my business.</p>
        <p>According to Shopify: Headless commerce separates your back-end infrastructure from your front-end customer touchpoints, so you get more control over your buyer and developer experiences.</p>
        <p>Basically you'd be moving away from themes and creating your own custom storefront and creating your own backend that any device can now use, which opens up the possibilities to innovation, personalization and creativity.</p>
        <br/>
        <h2>What are the pros of a Headless Commerce setup?</h2>
        <img src={shopifyarticleimage2} alt="Customized CMS" />
        <caption>Customized Backend CMS</caption>
        <p>Just to preface - the majority of store owners will have no use for a headless commerce set up. Shopify has said that this feature was requested and built for larger merchants that wanted for more freedom to expand what was possible.</p>
        <p>The difference between a headless commerce set up vs the traditional set up should be looked as less control and less responsibility vs more control and more responsibility. Which is why it’s aimed at bigger merchants or merchants looking to innovate.</p>
        <p>Mobile app or other devices that can be tied into a single backend. If you are looking to build a mobile app a headless commerce would be required as you’d have to build a custom backend that could tie into Shopify from both web and mobile.</p>
        <p>Custom interactive storefront. If you are looking to build out an immersive user experience that is high performing you may have to look at a headless setup.</p>
        <p>Custom CMS that fits your needs. If you find the current backend for Shopify to not meet your requirements as you grow and scale, then you may want to look at using your own CMS like Contentful or a custom-developed Sanity CMS etc. Working with your own CMS would give you more control over your content.</p>
        <br/>
        <h2>Freedom for your store</h2>
        <img src={shopifyarticleimage3} alt="Hydrogen Shopify Admin" />
        <caption>Hydrogen Shopify Admin</caption>
        <p>Innovation - With a headless commerce setup you can essentially turn any screen into a digital storefront, from web pages to mobile apps to wearables.</p>
        <p>Developer Freedom - Let your developer's build out your custom storefront with speed using Shopify tools like Hydrogen and Oxygen.</p>
        <p>Flexibility - Gain control over your UI and customer experience with the restrictions of generic styled templates.</p>
        <p>Omnichannel Selling - With using a single backend you can sell on all digital mediums your customers use, making it easier to manage and streamline.</p>
      </div>
      <div className='cta-article'>
        <p>If you think a headless setup is of interest to you, send us a message and let’s discuss how we can help.</p>
      </div>
      <section style={{'margin':'0 auto','width':'90%'}}>
      <ContactFormShopify />
      </section>
      
      <Footer />
    </div>
  )
}

export default ArticleHeadlessRightChoice;