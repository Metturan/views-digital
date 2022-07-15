
import Header from '../Header'
import Footer from '../Footer'
import ContactFormShopify from '../ContactFormShopify'
// import featuredimage from '../articleImages/shopify-article-banenr.jpeg'
import shopifyarticleimage from '../articleImages/codemongo.png'
import shopifyarticleimage2 from '../articleImages/webhookEvents.png'
import shopifyarticleimage3 from '../articleImages/customsessionstorage.png'

function Article() {
  return (
    <div className="page-top article">
      <Header menu="shopify" />
      <section className='hero-half articles'>
          <div className="inner-hero">
              <h1>Webhooks for Custom Apps</h1>
              <p>June 28, 2022</p>
          </div>
      </section>
      <div className='page-width'>
        <br/>
        <br/>
        <p>Creating webhooks for custom apps can be confusing to say the least, Shopify's documentation doesn't help much and often has misleading info. Hopefully this can provide valuable info to other developers.</p>
        <br/>
        <h2>Online + Offline Tokens</h2>
        <img src={shopifyarticleimage} alt="Shopify App" />
        <caption>Including offline tokens</caption>
        <p>By default Shopify's boilerplate will include the set up for online tokens and Oauth functionality. However this will not work for webhooks. While online tokens work to get access to storefront data it won't work for any background jobs aka webhooks.</p>
        <p>This is where offline tokens are used. By creating a permanent offline token and saving it to the database, webhooks can use offline tokens to make background api calls.</p>
        <p>There isn't much information about this on Shopify's documentation on how to incorporate both offline and online tokens. But it requires a change from the default storage method to include a custom session storage.</p>
        <br/>
        <h2>Webhook Events</h2>
        <img src={shopifyarticleimage2} alt="Shopify 2.0 Metafields" />
        <caption>Listing of Webhook Events</caption>
        <p>Shopify provides a list of webhooks that the store can be set up for. In our example we show a webhook that listens to whenever a collection is updated. When a collection is updated we resave the products in the collection to our Mongo database.</p>
        <p>In a recent custom app we built for a client, they wanted an upsell on the cart page. The upsell was a selectable collection in the admin, thus it required a webhook to update the upsell collection whenever products were removed/added from the collection.</p>
        <p>For a list of available webhooks in your Shopify store you can check out this <a href="https://shopify.dev/api/admin-graphql/2021-07/enums/webhooksubscriptiontopic">link</a></p>
        <br/>
        <h2>Custom Session Storage</h2>
        <img src={shopifyarticleimage3} alt="Shopify 2.0 Editor" />
        <caption>Incorporating custom session storage.</caption>
        <p>.</p>
      </div>
      <div className='cta-article'>
        <p>If you'd like to get in touch and get some custom theme/app work done for your store. Reach out below by filling out the form.</p>
      </div>
      <section style={{'margin':'0 auto','width':'90%'}}>
      <ContactFormShopify />
      </section>
      <Footer />
    </div>
  )
}

export default Article;