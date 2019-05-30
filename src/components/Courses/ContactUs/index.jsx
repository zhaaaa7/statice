import React from 'react';
import ContactForm from './ContactForm';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        maxWidth: '1500px',
        display: 'flex',
        justifyContent: 'space-around',
        backgroundImage: `url('./asset/homepage/contact_bg.png')`,
        margin: '0 auto',
        padding: '80px 5%'
    }
};


const ContactUs = (props) => {
    const { classes } = props;
    return (
        <div style={{
            padding: '0',
            backgroundImage: `url('./asset/homepage/contact_bg.png')`,

        }} className="roots">
            <div>
                <section className={classes.root}>
                    <ContactForm />
                </section>
            </div>
        </div>
    );
};

export default withStyles(styles)(ContactUs);