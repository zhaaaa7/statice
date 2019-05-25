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

        '& > div:last-child': {
            borderRightColor: 'transparent'
        }
    },
    '@media screen and (max-width: 700px)': {
        adsData: {
            width: '100%',
            left: '0%'


        }
    },
    '@media screen and (max-width: 550px)': {
        adsData: {
            display: 'none'


        }
    }
};


const AdsData = (props) => {
    const { classes } = props;
    return (
        <div className={classes.adsData}>
            <AdsDataItem data={'$100,000+'} des={'学员平均薪资'} />
            <AdsDataItem data={'50+'} des={'顶级科技公司教师'} />
            <AdsDataItem data={'100+'} des={'北美合作企业'} />
            <AdsDataItem data={'1000+'} des={'企业直推Offer'} />
        </div>
    );
};

export default withStyles(styles)(AdsData);