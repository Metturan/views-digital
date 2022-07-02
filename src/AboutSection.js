import aboutSection from './images/aboutsection.jpeg'
import aboutSection2 from './images/aboutsection2.jpeg'

const About = () => {
    return (
        <>
            <section className="about-section">
                <h3>WHAT WE DO</h3>
                <br/>
                <div className="aboutUsText">
                    <img src={aboutSection} />
                    <div className="msgBox">
                        <h3>We find customers that love you for who you are</h3>
                        <p>Your sales team are gonna love our leads. We've developed a system that allows us to fish out all the time-wasters and fence-sitters and only give you the customers that truly want what you've got.</p>
                    </div>
                </div>
                <div className="aboutUsText alt">
                    <img src={aboutSection2} />
                    <div className="msgBox">
                        <h3>Our relationship is uncomplicated and we won't leave you on "read"</h3>
                        <p>The truth is, you don't want to sign a contract for us to manage your campaigns behind closed doors. Ask us how many customers you want, and we'll deliver them to you on a cost-per-lead basis. Sweet, simple, and stress-free.</p>
                    </div>
                </div>
                <br />
                <br />
                <br/>
            </section>
        </>
    )
}

export default About;