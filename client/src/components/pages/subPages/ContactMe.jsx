import React from 'react';
import ContactForm from '../../ContactForm';

function ContactMe() {
    return (
        <>
        <div id='formContainer' style={{paddingBottom: '70px'}}>
            <ContactForm />
            <div className="arrow "></div>
        </div>
        </>
    )
}

export default ContactMe