import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const styles = {
    root: {
        width: '90%',
        margin: '0 auto',
    },
    content: {
        fontSize: '14px',
        lineHeight: '1.79',
        color: '#676767',
        textAlign: 'left'
    },
    panel: {
        // boxShadow: '0px -1px 1px 0px rgba(0,0,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.2)',
        border: '1px solid #e6e6e6',
        boxShadow: 'unset',
        backgroundColor: '#fff',
        marginBottom: '20px',
        borderRadius: '0px !important',
        '&::before': {
            backgroundColor: 'transparent !important'
        }
    },
    question: {
        fontSize: '15px',
        color: '#404040'
    },
    answer: {
        fontSize: '14px',
        color: '#676767',
        lineHeight: '1.64',
        textAlign: 'left'
    }

};

const data = [
    {
        question: '参加培训后，要花多少时间才能获得Dream offer',
        answer: '参加来Offer课程后，有80%的同学会在3-6个月内拿到理想的offer。当然，求职的时长与您的基础、努力程度直接相关。有的同学甚至在参加课程1个月后，就拿到了心仪的offer。'
    },
    {
        question: '参加培训后，要花多少时间才能获得Dream offer',
        answer: '参加来Offer课程后，有80%的同学会在3-6个月内拿到理想的offer。当然，求职的时长与您的基础、努力程度直接相关。有的同学甚至在参加课程1个月后，就拿到了心仪的offer。'
    },
    {
        question: '参加培训后，要花多少时间才能获得Dream offer',
        answer: '参加来Offer课程后，有80%的同学会在3-6个月内拿到理想的offer。当然，求职的时长与您的基础、努力程度直接相关。有的同学甚至在参加课程1个月后，就拿到了心仪的offer。'
    },
    {
        question: '参加培训后，要花多少时间才能获得Dream offer',
        answer: '参加来Offer课程后，有80%的同学会在3-6个月内拿到理想的offer。当然，求职的时长与您的基础、努力程度直接相关。有的同学甚至在参加课程1个月后，就拿到了心仪的offer。'
    },
    {
        question: '参加培训后，要花多少时间才能获得Dream offer',
        answer: '参加来Offer课程后，有80%的同学会在3-6个月内拿到理想的offer。当然，求职的时长与您的基础、努力程度直接相关。有的同学甚至在参加课程1个月后，就拿到了心仪的offer。'
    },
    {
        question: '参加培训后，要花多少时间才能获得Dream offer',
        answer: '参加来Offer课程后，有80%的同学会在3-6个月内拿到理想的offer。当然，求职的时长与您的基础、努力程度直接相关。有的同学甚至在参加课程1个月后，就拿到了心仪的offer。'
    },
    {
        question: '参加培训后，要花多少时间才能获得Dream offer',
        answer: '参加来Offer课程后，有80%的同学会在3-6个月内拿到理想的offer。当然，求职的时长与您的基础、努力程度直接相关。有的同学甚至在参加课程1个月后，就拿到了心仪的offer。'
    },
    {
        question: '参加培训后，要花多少时间才能获得Dream offer',
        answer: '参加来Offer课程后，有80%的同学会在3-6个月内拿到理想的offer。当然，求职的时长与您的基础、努力程度直接相关。有的同学甚至在参加课程1个月后，就拿到了心仪的offer。'
    },
    {
        question: '参加培训后，要花多少时间才能获得Dream offer',
        answer: '参加来Offer课程后，有80%的同学会在3-6个月内拿到理想的offer。当然，求职的时长与您的基础、努力程度直接相关。有的同学甚至在参加课程1个月后，就拿到了心仪的offer。'
    },
];

const QuestionPanel = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            {
                data.map((ele, index) => {
                    return <ExpansionPanel className={classes.panel} key={index}>
                        <ExpansionPanelSummary>
                            <p className={classes.question}>&gt;{ele.question}</p>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <p className={classes.answer}>{ele.answer}</p>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                })
            }
        </div>
    );
};

export default withStyles(styles)(QuestionPanel);