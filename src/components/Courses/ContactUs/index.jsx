import React from 'react';
import ContactForm from './ContactForm';

const ContactUs = () => {
    return (
        <div style={{
            padding: '0',
            backgroundImage: `url('./asset/contact_bg.png')`,

        }}>
            <div style={{
                maxWidth: '1500px',
                display: 'flex',
                justifyContent: 'space-around',
                backgroundImage: `url('./asset/contact_bg.png')`,
                margin: '0 auto',
                padding: '80px 5%'
            }}>
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactUs;