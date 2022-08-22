import ArticleSnippet from './ArticleSnippet'
import articleSnippetImg from './articleImages/codemongo.png'
import articleFeaturedImage from './articleImages/shopify-article-banenr.jpeg'
import articleHydrogenImage from './articleImages/hydrogen.png'

const RecentInsights = () => {
    return (
        <section className="featured-example">
        <div className="introduction articles-recent">
          <div>
              <span className="arrows">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M2.24491 24L13 11.9966L2.24491 -4.7012e-07L-1.09223e-07 2.49874L8.5162 11.9966L-9.3985e-07 21.5013L2.24491 24Z" fill="#FF4700"/><path d="M14.2449 -4.7012e-07L12 2.50476L20.5102 12.0067L12 21.502L14.2449 24L25 12.0067L14.2449 -4.7012e-07Z" fill="#FF4700"/></svg>
              </span>
              <span>Recent Insights</span>
          </div>
          <div>
              <ArticleSnippet 
                  tags={['Development']} 
                  date="July 5, 2022" 
                  title="Is a headless setup the right choice? Find out." 
                  path="/blog/headless-right-choice"
                  img={articleHydrogenImage}
                  desc="Shopify recently announced Hydrogen+Oxygen a react framework for creating custom storefronts but is it for everyone?" 
              />
              <br/>
              <br/>
              <ArticleSnippet 
                  tags={['Custom App', 'Development']} 
                  date="June 28, 2022" 
                  title="Complications of Webhooks for Custom Apps" 
                  path="/blog/shopify-webhook"
                  img={articleSnippetImg}
                  desc="Shopify allows for background jobs in your store. Some of these jobs can be for listening for a certain collection to update. We also touch on the importance of offline + online tokens and why they're both needed." 
              />
              <br/>
              <br />
              <ArticleSnippet 
                  tags={['Shopify 2.0', 'Development']} 
                  date="July 13, 2021" 
                  path="/blog/shopify-20"
                  title="Shopify 2.0 - Should Small Business Owners Care?" 
                  img={articleFeaturedImage}
                  desc="Shopify introduces store 2.0 and the company is going in a clear decision towards making editing content and managing products easier. And this is all good for the end user to make Shopify more accessible and friendly." 
              />
          </div>
        </div>
      </section>
    )
}
export default RecentInsights;