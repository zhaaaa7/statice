import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SideNavCard from './SideNavCard';
import VideoCard from './VideoCard';


const styles = {
    container: {
        zIndex: '10',
        position: 'absolute',
        top: '460px',

        right: '10vw',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-around',

    },
    '@media screen and (max-width: 1150px)': {
        container: {
            right: '20px',
        },
    },
    '@media screen and (max-width: 1000px)': {
        container: {
            display: 'none'
        }
    }
};


const SideNav = (props) => {
    const { sideNavIndex, windowScroll, offsetTops, classes } = props;
    const scrollToPosition = windowScroll > 345;

    const firstLoad = <nav className={classes.container}>
        <div>
            <section className={classes.root}>
                <SideNavCard sideNavIndex={sideNavIndex} offsetTops={offsetTops} />
                <VideoCard />

            </section>
        </div>
    </nav>;

    const scrollLoad = <nav className={classes.container}
        style={{ position: 'fixed', top: '110px' }}>
        <div>
            <section className={classes.root}>
                <SideNavCard sideNavIndex={sideNavIndex} offsetTops={offsetTops} />
                <VideoCard />

            </section>
        </div>
    </nav>

    return (
        <Fragment>
            {
                scrollToPosition ? scrollLoad : firstLoad

            }
        </Fragment>
    );
};

export default withStyles(styles)(SideNav);