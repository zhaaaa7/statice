import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        display: 'flex',
        // width: '25%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left'
    },
    icon: {
        marginRight: '10px',
        width: '46px',
        height: '46px',
        backgroundSize: 'contain'
    },
    des: {
        fontSize: '14px',
        color: '#999999',
        marginBottom: '4px'
    },
    content: {
        fontSize: '20px',
        lineHeight: '1.15',
        color: '#515151'

    }
};

const AdsDataItem = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <div className={classes.icon} style={{ backgroundImage: props.icon }}></div>
            <div>
                <div className={classes.des}>{props.des}</div>
                <div className={classes.content}>{props.content}</div>
            </div>
        </div>
    );
};

export default withStyles(styles)(AdsDataItem);