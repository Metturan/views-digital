import star from './images/star.png'

const TestimonialItem = (props) => {
    return (
        <>
            <div className='testy-desc'>
                <div className='desc-length'>
                    <p>{props.desc}</p>
                    <span className="client">{props.client}</span>
                </div>
                <div className={`starsNclient ${props.last == true ? 'starlast' : null}`}>
                    <span className={`stars`}>
                        <img src={star} alt="5 star reviews" />
                        <img src={star} alt="5 star reviews" />
                        <img src={star} alt="5 star reviews" />
                        <img src={star} alt="5 star reviews" />
                        <img src={star} alt="5 star reviews" />
                    </span>
                </div>
            </div>
        </>
    )
}

export default TestimonialItem;