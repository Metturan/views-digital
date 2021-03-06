import star from './images/star.png'

const TestimonialItem = (props) => {
    return (
        <>
            <div className='testy-desc'>
                <div className='desc-length'>
                    <p>{props.desc}</p>
                    <span className="client">{props.client}</span>
                </div>
                <div className='starsNclient'>
                    <span className="stars">
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                    </span>
                </div>
            </div>
        </>
    )
}

export default TestimonialItem;