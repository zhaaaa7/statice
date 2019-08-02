import React from 'react';
import AdsDataItem from './AdsDataItem';
import Star from './Star';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    adsData: {
        display: 'flex',
        alignItems: 'center',
        width: '90%',
        height: '110px',
        position: 'absolute',
        top: '85%',
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
    },
    score: {
        display: 'flex',
        alignItems: 'center'
    },
    '@media screen and (max-width: 710px)': {
        adsData: {
            display: 'none'
        }
    },
    '@media screen and (max-width: 825px)': {
        adsData: {
            width: '100%',
            left: '0%',
        }
    }
};


const AdsData = (props) => {
    const { classes } = props;

    return (
        <div className={classes.adsData}>
            <section className={classes.courseDes}>
                <AdsDataItem des={'背景要求'} content={'无'} icon={`url("./asset/courses/course.png")`} />
                <AdsDataItem des={'课程长度'} content={'10周'} icon={`url("./asset/courses/time.png")`} />
                <AdsDataItem des={'开课时间'} content={'5月18日'} icon={`url("./asset/courses/schedule.png")`} />
            </section>
            <Star des={'学员课程评分'} content={'4.5分'} icon={`url("./asset/courses/thumb.png")`} />
        </div>
    );
};

export default withStyles(styles)(AdsData);