import React from 'react';
import "../styles/Contact.css";

const Contact = () => {
    return (
        <>
            <section className='text-center w-100 py-5 contact-main'>
                <h1 className='fw-bold'>Contact</h1>
                <div>Get in Touch with me</div>
            </section>
            <section className='form-main'>
                <section className="form-section">
                    <div className="input-group">
                        <input type="text" id="name" required placeholder='Full Name' />
                        <input type="email" id="email" required placeholder='Email Id' />
                    </div>
                    <div className="form-field w-100">
                        <textarea id="message" required placeholder='Message Here' className='w-100'></textarea>
                    </div>
                    <button className='message-button'>
                Message me
            </button>
                </section>
            </section>
            
        </>
    );
};

export default Contact;
