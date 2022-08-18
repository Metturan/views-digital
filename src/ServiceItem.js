const ServiceItem = (props) => {
    return (
        <div className="serviceItem">
                <h3>{props.job}</h3>
                <p>{props.desc}</p>
                <div className="bottomBar">
                    <div>
                        <span>timeline</span>
                        <span>{props.days}</span>
                    </div>
                    <div>
                        <span>starting at</span>
                        <span>${props.price}</span>
                    </div>
                </div>
                <button>
                    <span className="arrows">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M2.24491 24L13 11.9966L2.24491 -4.7012e-07L-1.09223e-07 2.49874L8.5162 11.9966L-9.3985e-07 21.5013L2.24491 24Z" fill="#FF4700"/><path d="M14.2449 -4.7012e-07L12 2.50476L20.5102 12.0067L12 21.502L14.2449 24L25 12.0067L14.2449 -4.7012e-07Z" fill="#FF4700"/></svg>
                        </span>
                        Enquire
                </button>
        </div>
    )
}

export default ServiceItem;