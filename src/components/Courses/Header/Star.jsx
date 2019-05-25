import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        display: 'flex',
        width: '25%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left'
    },
    icon: {
        marginRight: '10px',
        width: '34px',
        height: '34px',
        backgroundSize: 'contain'
    },
    des: {
        fontSize: '14px',
        color: '#999999',
        marginBottom: '4px'
    },
    content: {
        fontSize: '16px',
        lineHeight: '1.44',
        color: '#515151'

    },
    star1: {
        width: '76px',
        height: '17px',
        background: `url("./asset/courses/star1.png") left top repeat`,
        backgroundSize: '17px',
        zIndex: '1'
    },
    star2: {
        width: '17px',
        height: '17px',
        background: `url("./asset/courses/star2.png") right bottom no-repeat`,
        backgroundSize: '17px',
        marginLeft: '-8px',

    }
};

const Star = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <div className={classes.icon} style={{ backgroundImage: props.icon }}></div>
            <div>
                <div className={classes.des}>{props.des}</div>
                <div style={{ display: 'flex' }}>

                    <div style={{ height: '17px', width: '93px', display: 'flex', marginTop: '4px' }}>
                        <div className={classes.star1}></div>
                        <div className={classes.star2}></div>
                    </div>


                    <div className={classes.content}>{props.content}</div>
                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(Star);