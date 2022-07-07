import {Link} from 'react-router-dom'
const Menulist = (props) => {
    if (props.menu == 'shopify') {
        return (
            <>
                <li><Link to="/shopify/about">About</Link></li>
                <li><Link to="/shopify/services">Services</Link></li>
                <li><Link to="/shopify/contact" >Get in Touch</Link></li>
            </>
        )
    }

    if (props.menu == 'config') {
        return (
            <>
                <li><Link to="/shopify">What is the configurator?</Link></li>
                <li><Link to="/pricing-config">Case Studies</Link></li>
                <li><Link to="/contact" >See Demo</Link></li>
            </>
        )
    }

    if (props.menu == 'landing') {
        return (
            <>
                <li><Link to="/shopify">Shopify Development</Link></li>
                <li><Link to="/pricing-config">Lead Generation Configurator</Link></li>
                <li><Link to="/contact" >Get in Touch</Link></li>
            </>
        )
    }
}

export default Menulist;