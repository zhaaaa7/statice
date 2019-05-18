import React from 'react';
import CourseCard from './CourseCard';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '60px',
    },
    '@media screen and (max-width: 900px)': {
        root: {
            flexDirection: 'column'
        },
    }
};
const Courses = (props) => {
    const { classes } = props;

    return (
        <div style={{ backgroundColor: '#f8fafc' }}>
            <h2>旗舰求职课程</h2>
            <section className={classes.root}>
                <CourseCard title={'程序员算法面试课'}
                    des={'FLAG公司资深面试官10周高强度集训，帮助你通过一线公司算法面试。'}
                    decImg={'./asset/course 1.png'} />
                <CourseCard title={'程序员算法面试课'}
                    des={'FLAG公司资深面试官10周高强度集训，帮助你通过一线公司算法面试。'}
                    decImg={'./asset/course 2.png'} />
                <CourseCard title={'程序员算法面试课'}
                    des={'FLAG公司资深面试官10周高强度集训，帮助你通过一线公司算法面试。'}
                    decImg={'./asset/course 3.png'} />
            </section>
            <button type="submit" style={{
                width: '190px',
                height: '35px',
                border: 'none',
                borderRadius: '2px',
                backgroundColor: '#1f74d4',
                color: '#fff',
                fontSize: '14px',
                fontWeight: '500'

            }}>点击咨询课程</button>

        </div>
    );
};

export default withStyles(styles)(Courses);