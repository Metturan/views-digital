import {Link} from 'react-router-dom'
import {useRef} from 'react'
import ButtonMailto from './ButtonMailto';

const Header = (props) => {
  const menu = useRef();
  const mobnav = useRef();

  const onMenuClick = () => {
    menu.current.classList.toggle('is-active')
    mobnav.current.classList.toggle('is-active')
  }
  return (
    <section className={`header ${props.home ? 'home' : null}`}>
      <div ref={menu} className="mobile-menu">
        <ul className='mobile-mob'>
          <li><Link to="/shopify">Custom Shopify Development</Link></li>
          <li><Link to="/pricing-config">Home Improvement Contractors</Link></li>
          <li><Link to="/contact" >Get in Touch</Link></li>
        </ul>
      </div>
      <div className='inner-header'>
      <Link className="logotop" to="/">VIEWS DIGITAL</Link>
      <ul className='moboff'>
        <li><Link to="/shopify">Custom Shopify Development</Link></li>
        <li><Link to="/pricing-config">Home Improvement Contractors</Link></li>
        <li><Link to="/contact" >Get in Touch</Link></li>
      </ul>
        <div onClick={onMenuClick} className='outer-mobnav'>
          <div ref={mobnav} className="mobnav">
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
      </div>
    </section>
  )
}

export default Header;

