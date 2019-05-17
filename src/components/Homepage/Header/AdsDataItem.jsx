import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '25%',
        height: '70%',
        borderRight: '1px solid #ececec',
        textAlign: 'center',
        justifyContent: 'center'
    }

};

const Header = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <div style={{
                fontFamily: 'Avenir',
                fontSize: '28px',
                fontWeight: '500',
                color: '#1f74d4'
            }}>{props.data}</div>
            <div style={{
                fontSize: '16px',
                color: '#5e5e5e'
            }}>{props.des}</div>
        </div>
    );
};

export default withStyles(styles)(Header);