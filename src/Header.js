import {Link} from 'react-router-dom'
import {useRef} from 'react'
import ButtonMailto from './ButtonMailto';
import Menulist from './Menulist';

const Header = (props) => {
  const menu = useRef();
  const mobnav = useRef();

  const onMenuClick = () => {
    menu.current.classList.toggle('is-active')
    mobnav.current.classList.toggle('is-active')
  }
  return (
    <section className={`header ${props.menu == 'config' ? 'home' : null}`}>
      <div ref={menu} className="mobile-menu">
        <ul className='mobile-mob'>
          <Menulist menu={props.menu}/>
        </ul>
      </div>
      <div className='inner-header'>
      <Link className="logotop" to="/">VIEWS DIGITAL</Link>
      <ul className='moboff'>
        <Menulist menu={props.menu}/>
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

