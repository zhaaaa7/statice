import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: '164px',
        height: '65px',
        backgroundSize: '80%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#f6f6f6',
        margin: '10px'
    },
};

const LogoBox = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root} style={{ backgroundImage: props.logo }}></div>
    );
};

export default withStyles(styles)(LogoBox);