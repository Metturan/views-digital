
import {useRef} from 'react'
import emailjs from '@emailjs/browser';

const SidebarStartProject = () => {
    const form = useRef();
    const openBtn = useRef();
    const sidebar = useRef();
    const firstStep = useRef();
    const close = useRef();

    const openSidebar = () => {
        sidebar.current.classList.add('open')
        firstStep.current.classList.add('show')
        close.current.classList.add('show');
    }

    const closeSidebar = () => {
        sidebar.current.classList.remove('open')
        firstStep.current.classList.remove('show');
        close.current.classList.remove('show');
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
                        close <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill-rule="evenodd" stroke-width="2" stroke="black" clip-rule="evenodd" d="M23.414 2L2 23.414.586 22 22 .586 23.414 2z" fill="#214338"/><path fill-rule="evenodd" stroke-width="2" stroke="black" clip-rule="evenodd" d="M2 .586L23.414 22 22 23.414.586 2 2 .586z" fill="#214338"/></svg>
                    </button>
                    <div className="fixed-intro">
                        <h3>Welcome to Views Digital. Ready to start your first project?</h3>
                        <button className="openBtn" onClick={openSidebar} ref={openBtn}>Get started</button>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="first-part-sidebar" ref={firstStep}>
                            <label>Your Website</label>
                            <input className="normInp" type="text" name="user_name" placeholder='Enter your name' />
                                <br/>
                                <br/>
                            <label>Tell Us About Your Project</label>
                            <textarea name="message" placeholder='Enter as much details as possible' />
                            <input type="file" name="my_file" /> 
                        </div>
                    </form>
                </div>
        </>
    )
}

export default SidebarStartProject;