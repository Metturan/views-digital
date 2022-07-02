import {useState, useEffect} from 'react'

const Quiz = (props) => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const scriptTag = document.createElement('script');
        scriptTag.src = 'https://viewscom.leadshook.io/s/js_embed'
        scriptTag.addEventListener('load', () => setLoaded(true))
        document.querySelector('.quiz-container').appendChild(scriptTag);
    }, [])

    useEffect(() => {
        if (!loaded) return;


    }, [loaded])

    return (
        <>
            <div ref={props.el} className="quiz-container" data-quiz="Tx2R8vEKfTPcQuzoDbpGqSb4Pnp5gda9yZjPqOuX" data-offset="0"></div>
            {loaded ? console.log('loaded') : null}
             
        </>
    )
}

export default Quiz;