import React from 'react';
import AdsDataItem from './AdsDataItem';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    adsData: {
        display: 'flex',
        alignItems: 'center',
        width: '90%',
        height: '142px',
        position: 'absolute',
        top: '80%',
        left: '5%',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.28)',
    },
    courseDes: {
        width: '70%',
        display: 'flex',
        justifyContent: 'space-around',
        borderRight: '1px solid #ececec',

    }
};


const AdsData = (props) => {
    const { classes } = props;
    return (
        <div className={classes.adsData}>
            <section className={classes.courseDes}>
                <AdsDataItem des={'背景要求'} content={'无'} />
                <AdsDataItem des={'课程长度'} content={'10周'} />
                <AdsDataItem des={'开课时间'} content={'5月18日'} />
            </section>
        </div>
    );
};

export default withStyles(styles)(AdsData);