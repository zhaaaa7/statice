import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CommentGroup from './CommentGroup';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const styles = {
    slideShowControl: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '-20px',
        '& div': {
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            margin: '0 10px',
            backgroundColor: 'rgba(107, 120, 132, 0.3)'
        }

    }
};

const comments = [
    [
        {
            content: "教育的门槛不低，但等到真正完成了课程，我觉得这是很值得的投资。FLAGDream教会了我很多东西，也拯救了求职时困难和迷茫的我。",
            name: '​Y. Wang',
            title: 'JAVA Developer',
            company: '@Google',
            decImg: './asset/google.png'
        },
        {
            content: "教育的门槛不低，但等到真正完成了课程，我觉得这是很值得的投资。FLAGDream教会了我很多东西，也拯救了求职时困难和迷茫的我。",
            name: '​Y. Wang',
            title: 'JAVA Developer',
            company: '@Google',
            decImg: './asset/google.png'
        },
        {
            content: "教育的门槛不低，但等到真正完成了课程，我觉得这是很值得的投资。FLAGDream教会了我很多东西，也拯救了求职时困难和迷茫的我。",
            name: '​Y. Wang',
            title: 'JAVA Developer',
            company: '@Google',
            decImg: './asset/google.png'
        }
    ],
    [
        {
            content: "教育的门槛不低，但等到真正完成了课程，我觉得这是很值得的投资。FLAGDream教会了我很多东西，也拯救了求职时困难和迷茫的我。",
            name: '​Y. Wang',
            title: 'JAVA Developer',
            company: '@Google',
            decImg: './asset/Adobe.png'
        },
        {
            content: "教育的门槛不低，但等到真正完成了课程，我觉得这是很值得的投资。FLAGDream教会了我很多东西，也拯救了求职时困难和迷茫的我。",
            name: '​Y. Wang',
            title: 'JAVA Developer',
            company: '@Google',
            decImg: './asset/Adobe.png'
        },
        {
            content: "教育的门槛不低，但等到真正完成了课程，我觉得这是很值得的投资。FLAGDream教会了我很多东西，也拯救了求职时困难和迷茫的我。",
            name: '​Y. Wang',
            title: 'JAVA Developer',
            company: '@Google',
            decImg: './asset/Adobe.png'
        }
    ],
    [
        {
            content: "教育的门槛不低，但等到真正完成了课程，我觉得这是很值得的投资。FLAGDream教会了我很多东西，也拯救了求职时困难和迷茫的我。",
            name: '​Y. Wang',
            title: 'JAVA Developer',
            company: '@Google',
            decImg: './asset/Huawei.png'
        },
        {
            content: "教育的门槛不低，但等到真正完成了课程，我觉得这是很值得的投资。FLAGDream教会了我很多东西，也拯救了求职时困难和迷茫的我。",
            name: '​Y. Wang',
            title: 'JAVA Developer',
            company: '@Google',
            decImg: './asset/Huawei.png'
        },
        {
            content: "教育的门槛不低，但等到真正完成了课程，我觉得这是很值得的投资。FLAGDream教会了我很多东西，也拯救了求职时困难和迷茫的我。",
            name: '​Y. Wang',
            title: 'JAVA Developer',
            company: '@Google',
            decImg: './asset/Huawei.png'
        }
    ],
];

let timer;
const Comments = (props) => {
    const { classes } = props;

    const [count, setCount] = useState(0);


    useEffect(() => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            setCount((count + 1) % 3);
        }, 3000);
        // console.log('hhh', count);
    });


    return (
        <div style={{ backgroundColor: '#f8fafc', height: '700px' }}>
            <h2>学员感言</h2>
            <section style={{ position: 'relative', height: '430px', overflow: 'hidden' }}>
                <ReactCSSTransitionGroup

                    transitionName="example"
                    transitionEnterTimeout={400}
                    transitionLeaveTimeout={200}
                >

                    {
                        count === 0 && <CommentGroup key={1} data={comments[count]} />

                    }
                    {
                        count === 1 && <CommentGroup key={2} data={comments[count]} />
                    }
                    {
                        count === 2 && <CommentGroup key={3} data={comments[count]} />
                    }




                </ReactCSSTransitionGroup>
            </section>

            <div className={classes.slideShowControl}>
                {
                    [...Array(3)].map((ele, index) => {
                        if (index === count) {
                            return <div
                                key={index}
                                style={{ backgroundColor: '#6b7884' }}
                                onClick={() => { setCount(index); }}>
                            </div>

                        } else {
                            return <div
                                key={index}
                                onClick={() => { setCount(index); }}>
                            </div>
                        }
                    })
                }
            </div>


        </div>
    );
};

export default withStyles(styles)(Comments);