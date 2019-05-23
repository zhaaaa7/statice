import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        display: 'flex',
        width: '25%',
        height: '70%',
        textAlign: 'center',
        justifyContent: 'center'
    },
    icon: {
        marginRight: '10px'
    },
    des: {
        fontSize: '14px',
        color: '#999999'
    },
    content: {
        fontSize: '20px',
        lineHeight: '1.15',
        color: '#515151'

    }

};

const Header = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <div className={classes.icon}>ICON</div>
            <div>
                <div className={classes.des}>{props.des}</div>
                <div className={classes.content}>{props.content}</div>
            </div>
        </div>
    );
};

export default withStyles(styles)(Header);