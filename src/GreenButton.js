
import arrowGif from './images/arrowgif.gif'

const GreenButton = (props) => {
    const handleClick = () => {
        props.el.current.scrollIntoView({behavior:'smooth'})
    }

    return (
        <div onClick={handleClick} className='greenBtn'>Yes! I want Leads Like This<img src={arrowGif} /></div>
    )
}

export default GreenButton;