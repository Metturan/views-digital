import {Link} from 'react-router-dom'
import logo from './images/viewsLogoCroppedWhite.png'
import logo1 from './images/viewsLogoCropped.png'

const Footer = (props) => {
    return (
        <footer className="footHome">
          <div className="inner-footer">
            <div className="logotop">
              {props.white ? <img alt="Views Digital" src={logo1} /> : <img alt="Views Digital" src={logo} /> }
              <ul>
                <li>Shopify Development</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            {/* <img src={gpartner} /> */}
            <p>Copyright © 2022 Viewscom Corp.</p>
            <p>Registered office address: 2967 Dundas St. W. #88, Toronto, ON M6P 1Z2. </p>
            <p>This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
            <div className='regulation-links'>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/earnings">Earnings Disclaimer</Link>
            </div>
          </div>
      </footer>
    )
}

export default Footer;