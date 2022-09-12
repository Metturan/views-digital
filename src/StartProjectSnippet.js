import {Link} from 'react-router-dom'
import downArrow from './images/downarrow.png'

const StartProjectSnippet = () => {
    return (
        <section>
                    <img className="dwnarrow" src={downArrow} />
                    <h3 className="letstalk">Have a project in mind?<br/> Let’s get to work.</h3>
                    <Link to="/contact" id="footerStartProject">Start a Project</Link>
        </section>
    )
}

export default StartProjectSnippet;