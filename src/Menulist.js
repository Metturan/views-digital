import {Link} from 'react-router-dom'
const Menulist = (props) => {
    const link1Click = () => {
        props.link1.current.scrollIntoView({block: "start", behavior:"smooth"});
    }
    const link2Click = () => {
        props.link2.current.scrollIntoView({block: "start", behavior:"smooth"});
    }
    const link3Click = () => {
        props.link3.current.scrollIntoView({block: "start", behavior:"smooth"});
    }
    if (props.menu == 'shopify') {
        return (
            <>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link className="outline" to="/contact" >Get a Free Quote</Link></li>
            </>
        )
    }

    if (props.menu == 'config') {
        return (
            <>
                <li><button class="navBtn" onClick={link1Click} >What is the configurator?</button></li>
                <li><button class="navBtn" onClick={link2Click}>Case Studies</button></li>
                <li><button class="navBtn" onClick={link3Click}>See Demo</button></li>
            </>
        )
    }

    if (props.menu == 'landing') {
        return (
            <>
                <li><Link to="/shopify">Shopify Development</Link></li>
                {/* <li><Link to="/shopify/email-marketing">Email marketing</Link></li> */}
                <li><Link to="/contact" >Get in Touch</Link></li>
            </>
        )
    }
}

export default Menulist;