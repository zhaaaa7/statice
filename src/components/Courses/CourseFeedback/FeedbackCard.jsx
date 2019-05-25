import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: '160px',
        height: '230px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.28)',
        backgroundColor: '#fff',
        position: 'relative',
        padding: '20px 4px 0',
        margin: '20px',
        flex: 'none',
    },

    company: {
        width: '76px',
        height: '76px',
        borderRadius: '50%',
        boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.4)',
        backgroundColor: '#ffffff',
        position: 'absolute',
        left: '50%',
        bottom: '-30px',
        transform: 'translateX(-50%)',
        backgroundSize: 'cover'
    },
    content: {
        color: '#999999',
        margin: '12px 10px',
        fontSize: '14px'

    },
    name: {
        color: '#404040',
        fontSize: '16px',
        letterSpacing: '0.5px',
        margin: '6px 0',
        fontWeight: '600',
    },
    info: {
        color: '#6b757d',
        fontSize: '14px',
        fontWeight: '600',
    }
};

const FeedbackCard = (props) => {
    const { classes } = props;

    return (

        <div className={classes.root}>
            <section style={{ textAlign: 'center' }}>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.info}>{props.title}</p>
                <p className={classes.content}>{props.content}</p>

            </section>
            <div className={classes.company} style={{ backgroundImage: `url('${props.decImg}')` }}></div>
        </div>
    );
};

export default withStyles(styles)(FeedbackCard);