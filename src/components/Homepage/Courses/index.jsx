import React from 'react';
import CourseCard from './CourseCard';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
    },
    button: {
        width: '190px',
        height: '35px',
        border: 'none',
        borderRadius: '2px',
        backgroundColor: '#1f74d4',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '500',
        '&:hover': {
            backgroundColor: '#11539d',
            boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)'

        }
    }
};

const data = [
    {
        title: '程序员算法面试课',
        des: '资深FLAG级别面试官8周高强度集训，达到一线公司求职标准。',
        decImg: './asset/homepage/course 1.png'
    },
    {
        title: '程序员全栈开发实战课',
        des: '顶级FLAG公司老师带你实战3大工业级项目，全面提升背景',
        decImg: './asset/homepage/course 2.png'
    },
    {
        title: '数据科学求职实战课',
        des: '一站式解决数据方向求职问题，获取心仪Offer',
        decImg: './asset/homepage/course 3.png'
    },
];

const Courses = (props) => {
    const { classes } = props;

    const contactUsTop = document.getElementById('hp-contactUs');

    return (
        <div style={{ backgroundColor: '#f8fafc' }}>
            <h2 style={{ marginTop: '40px' }}>旗舰求职课程</h2>
            <section className={classes.root}>
                {
                    data.map((ele, index) => {
                        return <CourseCard
                            key={index}
                            title={ele.title}
                            cardIndex={index}
                            des={ele.des}
                            decImg={ele.decImg} />;
                    })
                }

            </section>
            <Button variant="contained" size="medium" color="primary" className={classes.button}
                onClick={() => {
                    contactUsTop.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                }}>
                点击咨询课程
        </Button>
        </div>
    );
};

export default withStyles(styles)(Courses);