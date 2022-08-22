import {Link} from 'react-router-dom'
import articleFeaturedImage from './articleImages/shopify-article-banenr.jpeg'

function ArticleSnippet(props) {
  return (
    <section className='articlesnippet'>
      <div>
        {/* <div className='tags'>
          {
            props.tags.map(tag => {
              return <span key={tag}>{tag}</span>
            })
          }
        </div> */}
        <div>
        <h3 className="datesnippet">{props.date}</h3>
        <h3 className="titlesnippet">{props.title}</h3>
        {/* <p>{props.desc}</p> */}
        <Link to={props.path}><button className='basic-button'>Read More</button></Link>
        </div>
      </div>
      <div>
        <img src={props.img} alt="Article Featured" />
      </div>
    </section>
  )
}

export default ArticleSnippet;