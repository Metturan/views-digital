
import {useRef, useEffect} from 'react'
import emailjs from '@emailjs/browser';

const SidebarStartProject = (props) => {
    useEffect(() => {
        const handleClick = event => {
            openSidebar();
        };

        const element = props.footerButton.current;
        const elementLanding = props.landerButton.current;

        element.addEventListener('click', handleClick);
        elementLanding.addEventListener('click', handleClick);

        return () => {
            elementLanding.addEventListener('click', handleClick);
            element.removeEventListener('click', handleClick);
        };
    }, []);

    const form = useRef();
    const openBtn = useRef();
    const sidebar = useRef();
    const firstStep = useRef();
    const secondStep = useRef();
    const close = useRef();
    const firststepNextBtn = useRef();
    const secondstepBackBtn = useRef();
    const submitBtn = useRef();

    const openSidebar = () => {
        sidebar.current.classList.add('open')
        firstStep.current.classList.add('show')
        close.current.classList.add('show');
        firststepNextBtn.current.classList.add('show')
    }

    const closeSidebar = () => {
        // one set of actions if on step1
        if (firststepNextBtn.current.classList.contains('show')) {
            sidebar.current.classList.remove('open')
            firstStep.current.classList.remove('show');
            close.current.classList.remove('show');
            firststepNextBtn.current.classList.remove('show')
        }

        // one set of actions if on step2 when closing.
        if (secondstepBackBtn.current.classList.contains('show')) {
            sidebar.current.classList.remove('open')
            secondstepBackBtn.current.classList.remove('show')
            submitBtn.current.classList.remove('show');
            secondStep.current.classList.remove('show')
            close.current.classList.remove('show');
        }
    }

    const firststepNext = () => {
        firstStep.current.classList.remove('show')
        firststepNextBtn.current.classList.remove('show')
        secondStep.current.classList.add('show')
        secondstepBackBtn.current.classList.add('show')
        submitBtn.current.classList.add('show')
    }

    const secondstepBack = () => {
        firstStep.current.classList.add('show')
        firststepNextBtn.current.classList.add('show')
        secondStep.current.classList.remove('show')
        secondstepBackBtn.current.classList.remove('show')
        submitBtn.current.classList.remove('show');
    }



    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_bp6li5j', 'template_fkhvqxw', form.current, 'user_OJdLjW4coK6cy7d5ELFzC')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };

    return (
        <>
                <div className="overlay-sidebar"></div>
                <div className='fixed-msg' ref={sidebar}>
                    <button className="closeX" onClick={closeSidebar} ref={close}>
                        close <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fillRule="evenodd" strokeWidth="2" stroke="black" clipRule="evenodd" d="M23.414 2L2 23.414.586 22 22 .586 23.414 2z" fill="#214338"/><path fillRule="evenodd" strokeWidth="2" stroke="black" clipRule="evenodd" d="M2 .586L23.414 22 22 23.414.586 2 2 .586z" fill="#214338"/></svg>
                    </button>
                    <div className="fixed-intro">
                        <h3>Welcome to Views Digital. Ready to start your first project?</h3>
                        <button className="openBtn" onClick={openSidebar} ref={openBtn}>Get started</button>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="first-part-sidebar" ref={firstStep}>
                            <h3>Get Started</h3>
                            <p>Take a few minutes to give us some information about your project. We'll respond to you within 24 hours.</p>
                            <label>Your Website</label>
                            <input className="normInp" type="text" name="user_website" placeholder='Enter your website' />
                                <br/>
                                <br/>
                            <label>Tell Us About Your Project</label>
                            <textarea name="message" placeholder='Enter as much details as possible' />
                            <input type="file" name="my_file" /> 
                        </div>
                        <div className="second-part-sidebar" ref={secondStep}>
                            <h3>Give us a way to reach you.</h3>
                            <p>You'll hear from us shortly.</p>
                            <div>
                                <div>
                                    <label>First Name</label>
                                    <input className="normInp" type="text" name="first_name" placeholder='First Name' />
                                </div>
                                <div>
                                    <label>Last Name</label>
                                    <input className="normInp" type="text" name="last_name" placeholder='Last Name' />
                                </div>
                            </div>
                            <br className="hidebr"/>
                            <br/>
                            <label>Your Email</label>
                            <input style={{'maxWidth':'340px'}} className="normInp" type="email" name="user_email" placeholder='Email Address'/>
                            <br className="hidebr"/>
                            <br/>
                            <br/>
                            <label>Prefer To Text? (optional)</label>
                            <input style={{'maxWidth':'340px'}} className="normInp" type="number" name="user_phone" placeholder='Phone Number'/>
                            <br/>
                        </div>
                        <button ref={submitBtn} className="submitstep-btn" onClick={sendEmail}>Submit</button>
                    </form>
                    <button ref={secondstepBackBtn} className="secondstep-back" onClick={secondstepBack}>Back</button>
                    <button ref={firststepNextBtn} className="firststep-next" onClick={firststepNext}>Next</button>
                    
                </div>
        </>
    )
}

export default SidebarStartProject;