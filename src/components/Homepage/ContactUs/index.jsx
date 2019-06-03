import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        maxWidth: '1500px',
        display: 'flex',
        justifyContent: 'space-around',
        backgroundImage: `url('./asset/homepage/contact_bg.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: '0 auto',
        padding: '80px 5%'
    },
    '@media screen and (max-width: 700px)': {
        root: {
            flexDirection: 'column',
            alignItems: 'center',

        }
    }
};
const ContactUs = (props) => {
    const { classes } = props;
    return (
        <div style={{
            padding: '0',
        }}>
            <div className={classes.root}>
                <ContactForm />
                <ContactInfo />
            </div>
        </div>
    );
};

export default withStyles(styles)(ContactUs);