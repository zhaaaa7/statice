import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BusinessPartner from './BusinessPartner';



const styles = {
    root: {
        marginTop: '60px',
    }
};


const Partner = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <h2 style={{ textAlign: 'center' }}>合作企业</h2>
            <BusinessPartner />
        </div>
    );
};

export default withStyles(styles)(Partner);