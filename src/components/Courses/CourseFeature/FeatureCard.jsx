import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        width: '220px',
        height: '250px',
        boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.4)',
        backgroundColor: '#fff',
        margin: '0 10px 60px',
    },
    icon: {
        width: '82px',
        height: '82px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        margin: '0 auto',
    },
    title: {
        padding: '0 10px',
        fontWeight: '600',
        fontSize: '16px',
        color: '#404040',
    },
    description: {
        padding: '0 30px',
        color: '#999999',
        fontSize: '13px',
        margin: '10px 0'
    },

};
const FeatureCard = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <section>
                <div className={classes.icon} style={{ backgroundImage: props.icon }}></div>
                <h5 className={classes.title}>{props.title}</h5>
                <p className={classes.description}>{props.des}</p>
            </section>
        </div>
    );
};

export default withStyles(styles)(FeatureCard);