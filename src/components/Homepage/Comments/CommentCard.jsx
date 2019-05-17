import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: '300px',
        height: '357px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.28)',
        backgroundColor: '#fff',
        position: 'relative',
        padding: '30px 10px 0'
    },
    quote: {
        height: '20px',
        backgroundImage: `url('./asset/quote.png')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        margin: '10px 0 26px 0'
    },
    company: {
        width: '95px',
        height: '95px',
        borderRadius: '50%',
        boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.4)',
        backgroundColor: '#ffffff',
        position: 'absolute',
        left: '50%',
        bottom: '-20px',
        transform: 'translateX(-50%)',
        backgroundSize: 'cover'
    },
    content: {
        color: '#999999',
        margin: '22px 18px',
        fontSize: '14px'

    },
    name: {
        color: '#404040',
        fontSize: '16px',
        letterSpacing: '0.5px',
        margin: '12px 0',
        fontWeight: '600',
    },
    info: {
        color: '#6b757d',
        fontSize: '14px',
        fontWeight: '600',
    }
};

const CommentCard = (props) => {
    const { classes } = props;

    return (

        <div className={classes.root}>
            <section style={{ textAlign: 'center' }}>
                <div className={classes.quote}></div>
                <p className={classes.content}>{props.content}</p>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.info}>{props.title}</p>
                <p className={classes.info}>{props.company}</p>
            </section>
            <div className={classes.company} style={{ backgroundImage: `url('${props.decImg}')` }}></div>
        </div>
    );
};

export default withStyles(styles)(CommentCard);