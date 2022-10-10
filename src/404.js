import notfound from './images/notfound.png'

const PageNotFound = () => {
    return (
        <section className="fourOfour">
            <img src={notfound} />
            <h1>Oops</h1>
            <p>We can't seem to find the page you are looking for</p>
        </section>
    )
}

export default PageNotFound;