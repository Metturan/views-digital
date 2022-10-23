import shopifylogo1 from './images/shopify-logo-1.png'
import greencheck from'./images/greenCheck.png'

const WhyChooseViews = () => {
    return (
        <div className="whychoose-section">
            <img src={shopifylogo1} alt="Shopify Partner" />
            <h2>How can Views Digital help you with your Shopify Requirements?</h2>
            <div>
                <ul>
                    <li><img src={greencheck} alt="Green Check" /> The team at Views Digital including the owner has over 7+ years working on Shopify stores. You can feel comfortable knowing your store is in good hands and the job can get done.</li>
                    <li><img src={greencheck} alt="Green Check"/> We work with all sizes of businesses. Small, medium or enterprise. We have top talented developers (designers as well) and can take on complicated jobs that other agencies can’t.  You can come to use for all your needs no problem.</li>
                    <li><img src={greencheck} alt="Green Check"/> We understand ultimately you’re the job you want is to increase your sales. We will work with you to understand the problem and can help you think of ideas that you may not have thought about.</li>
                </ul>
                <ul>
                    <li><img src={greencheck} alt="Green Check"/> We won’t disappear after the site or app is built. Our team can provide on-going support and help you keep you’re business growing in more then one way.</li>
                    <li><img src={greencheck} alt="Green Check"/> We can offer flexibility in your schedule. If you need something done quickly then we can offer an express service with the same quality you can rely on.</li>
                    <li><img src={greencheck} alt="Green Check"/> Our built out designs will always be responsive and work well across all devices and browsers. We do rigorous QA to make sure there are no problems. </li>
                </ul>
            </div>
        </div>
    )
}

export default WhyChooseViews;