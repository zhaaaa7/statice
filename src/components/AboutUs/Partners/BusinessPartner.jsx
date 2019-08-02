import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LogoBox from './LogoBox';



const styles = {

    logoGroup: {
        maxWidth: '920px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '0 auto'
    }
};


const BusinessPartner = (props) => {
    const { classes } = props;

    return (

        <div className={classes.logoGroup}>
            {
                [...Array(25)].map((ele, index) => {
                    return <LogoBox key={index} logo={`url("./asset/aboutus/partner${index + 1}.png")`} />
                })
            }
        </div>
    );
};

export default withStyles(styles)(BusinessPartner);