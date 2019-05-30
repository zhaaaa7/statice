import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        width: '200px',
        // height: '200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon: {
        width: '60px',
        height: '60px',
        backgroundColor: '#eaf1f8',
        borderRadius: '30px',
        backgroundSize: '33px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        position: 'relative',
        marginBottom: '30px',
        '&::after': {
            content: '""',
            position: 'absolute',
            top: '30px',
            left: '61px',
            width: '128px',
            border: '1.5px dashed #afcdea'
        }
    },
    info: {
        padding: '0 20px',
    },
    title: {
        fontWeight: '400',
        fontSize: '16px',
        color: '#404040'
    },
    description: {
        color: '#999999',
        fontSize: '13px',
        lineHeight: '1.77',
        margin: '10px 0'
    },

    '@media screen and (max-width: 740px)': {
        root: {
            width: '400px',
            height: '160px',
            flexDirection: 'row',
            justifyContent: 'center'
        },
        info: {
            padding: '0 20px',
            width: '200px'
        },
        icon: {
            marginRight: '10px',
            '&::after': {
                // content: '""',
                // position: 'absolute',
                top: '61px',
                left: '30px',
                transform: 'rotate(90deg)',
                transformOrigin: 'top left'
            }
        },
    }

};


const PlanCard = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>

            <div className={classes.icon} style={{ backgroundImage: props.icon }}></div>
            <div className={classes.info}>
                <h5 className={classes.title}>{props.title}</h5>
                <p className={classes.description}>{props.des}</p>
            </div>
        </div>
    );
};

export default withStyles(styles)(PlanCard);