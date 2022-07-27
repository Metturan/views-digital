import { useRef} from 'react'
import PriceItem from './PriceItem'

function PricingEmail () {
  const smallRef = useRef();
  const mediumRef = useRef();
  const largeRef = useRef();
  const xlRef = useRef();

  const sizeRef = useRef();

  const arrayofRefs = [smallRef, mediumRef, largeRef, xlRef]

  function changeSlide (size) {

    const sizeMenu = Array.from(sizeRef.current.children);
    
    sizeMenu.map((sizeTitle) => {
      let sizeName = sizeTitle.innerHTML.toLowerCase();
      if (size == sizeName) {
        sizeTitle.classList.add('active')
      } else {
        sizeTitle.classList.remove('active')
      }
    })

    arrayofRefs.map(item => {
      if (item.current.classList.contains(`${size}-price`)) {
        item.current.classList.remove('hide');
        setTimeout(() => { 
          item.current.classList.remove('visuallyhidden');
        }, 100)
      } else {
        
        item.current.classList.add('hide');
        setTimeout(() => { 
          item.current.classList.add('visuallyhidden');
        }, 100)
      }
    })
  }

  return (
    <div className='widths pricingStructure email-market-price'>
      <h2>Clear and affordable pricing</h2>
      <p style={{'marginBottom':'35px'}}>For brands medium and big. No lock in contracts.</p>
      <div ref={sizeRef} className='sizes'>
        <h3 className='active' onClick={() => changeSlide('small') } >Email + SMS Packages</h3>
      </div>
      <section className='price-settings'>
        <div ref={smallRef} className='small-price'>
          <PriceItem 
            name='Email Marketing Audit'
            item1detail='3 days'
            item2detail='$1000' />
          <PriceItem 
            name='Klaviyo Email Monthly Campaigns' 
            item1detail='Monthly (no retainer)' 
            item2detail='$3500' />
          <PriceItem 
            name='SMS Monthly Campaigns' 
            item1detail='Monthly (no retainer)' 
            item2detail='$1000' />
        </div>
      </section>
    </div>
  )
}

export default PricingEmail;