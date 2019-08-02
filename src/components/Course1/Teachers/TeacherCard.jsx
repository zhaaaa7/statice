import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: '300px',
        height: '400px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.28)',
        backgroundColor: '#fff',
        position: 'relative',
        padding: '0 30px',
        margin: '0 auto 60px',
        '&:hover': {
            boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)'

        }
    },
    avatar: {
        width: '95px',
        height: '95px',
        borderRadius: '50%',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.28), 0 2px 10px 0 rgba(0, 0, 0, 0.5)',
        backgroundColor: '#ffffff',
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%,-20px)',
        backgroundSize: 'cover'
    },
    name: {
        color: '#404040',
        fontSize: '16px',
        letterSpacing: '1.1px',
        fontWeight: '600'
    },
    title: {
        color: '#6c757d',
        fontSize: '14px',
        letterSpacing: '0.9px',
        fontWeight: '600',
        margin: '10px 0'
    },
    description: {
        color: '#999',
        fontSize: '14px',
    }

};

const teacherCard = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>

            <div className={classes.avatar} style={{ backgroundImage: `url('${props.decImg}')` }}></div>
            <section style={{ textAlign: 'center' }}>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.title}>{props.title}</p>
                <p className={classes.description}>{props.des}</p>
            </section>
        </div>
    );
};

export default withStyles(styles)(teacherCard);