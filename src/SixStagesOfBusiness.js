import planning from './icos/planning.png'
import building from './icos/building.png'
import design from './icos/design.png'
import testing from './icos/testing.png'
import wireframe from './icos/wireframe.png'

const SixStagesOfBusiness = () => {
    return (
        <>
            <section className="processes">
                <div className="widths intro-process">
                <h2>The Development Process</h2>
                <p>Our stress free process that will ensure you get exactly what you want.</p>
                </div>
                <div className="widths process">
                    <div>
                        <img id="planningico" src={planning} alt="Planning" />
                        <h3>Planning</h3>
                        <p>We work with you to get a complete understanding of your business and objectives are. From there we create a strategy that will allow you to reach your target market more effectively.</p>
                    </div>
                    <div>
                        <img src={wireframe} alt="Wireframes" />
                        <h3>Wireframes</h3>
                        <p>We'll provide you with mockups based on your requirements. From start to finish and every page in between. We'll make sure the site is intuitive for your customer and easy on the eyes.</p>
                    </div>
                    <div>
                        <img id="designico" src={design} alt="Customer Remarks" />
                        <h3>Customer Remarks</h3>
                        <p>Our designer will work with you by your side to get the feel and the strategy correct. This stage will finalize the design process.</p>
                    </div>
                    <div>
                        <img src={building} alt="Building" />
                        <h3>Building</h3>
                        <p>This is where our talented developers take over to produce a quality website that's performant and smooth. Our set of talent makes sure that any job is feasible and quality is always of the highest standards.</p>
                    </div>
                    <div>
                        <img src={testing} alt="Testing" />
                        <h3>Testing & Launching</h3>
                        <p>After the buildout, we do a QA process to make sure that any bugs are addressed. We won't just leave you high and dry, we'll also give a 2 week post launch guarentee to fix any bugs that may arise.</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default SixStagesOfBusiness;