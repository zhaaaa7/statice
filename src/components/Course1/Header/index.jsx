import React from 'react';
import Carousel from './Carousel';
import Content from './Content';
import AdsData from './AdsData';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        height: '395px',
        position: 'relative',
    }
};
const Header = (props) => {
    const { classes } = props;


    return (
        <header className={classes.root}>
            <Carousel />
            <Content />
            <AdsData />
        </header>
    );
};

export default withStyles(styles)(Header);