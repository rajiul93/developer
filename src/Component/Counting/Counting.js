import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import "./Counting.css";
function Counting() {
    const [counter, setCounter] = useState(false);
    return (
        <>
            <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
            <section>
            <div className='counting mt-5'>
                    <div className='counting-container '>
                        <div className='counting-child'>
                        {
                                counter && <h1><CountUp start={0} end={400} duration={2} delay={0} />+</h1>
                            }
                            <p>WordPress website</p>
                        </div>
                        <div className='counting-child'>
                            {
                                counter && <h1><CountUp start={0} end={333} duration={2} delay={0} />+</h1>
                            }
                            <p>Fiverr jobs</p>
                        </div>
                        <div className='counting-child'>
                        {
                                counter && <h1><CountUp start={0} end={450} duration={2} delay={0} />+</h1>
                            }
                            <p>Satisfied clients</p>
                        </div>
                    </div>
                </div>
            </section>
            </ScrollTrigger>

        </>

    )
}

export default Counting