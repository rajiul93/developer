import React from 'react';
import "./ContactComponent.css";

function ContactComponent() {
    return (
        <div>
        
            <div style={{ width: "360px", margin: "0 auto" }} className='my-5'>
                <form action="https://formspree.io/f/mayzangz" method='POST' className='d-flex flex-column gap-3 bg-white p-3 rounded'>
                    <h2 className='text-center'>Contact Us</h2>
                    <input autoComplete='off' name='email' type="email" placeholder='Email' required className='p-2 fw-light ' />
                    <input autoComplete='off' name='username' type="text" placeholder='Title' required className='p-2 fw-light' />
                    <input autoComplete='off' name='massage' type="text" placeholder='Text' required className='p-2 fw-light' />
                    <input autoComplete='off' className='button-1 p-2' type="submit" value="Send" />
                </form>
            </div>
      
        </div>
    )
}

export default ContactComponent