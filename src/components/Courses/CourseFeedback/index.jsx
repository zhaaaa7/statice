import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FeedbackGroup from './FeedbackGroup';


const styles = {
    container: {
        backgroundColor: '#fff',
        height: '500px'
    },
    root: {
        position: 'relative',
        height: '330px',
        overflow: 'hidden',
        width: '90%',
        margin: '0 auto'
    },
};

const feedback = [
    {
        content: "课程结构，老师态度，课程内容很详实密集",
        name: '​Y. Wang',
        title: 'JAVA Developer',
        company: '@Google',
        decImg: './asset/homepage/google.png'
    },
    {
        content: "直播课程讲得很清楚，答疑也很快，Career Service也很棒",
        name: '​Y. Wang',
        title: 'JAVA Developer',
        company: '@Google',
        decImg: './asset/homepage/google.png'
    },
    {
        content: "全面的cover到DS的知识点，以及project之后的简历build up的建议",
        name: '​Y. Wang',
        title: 'JAVA Developer',
        company: '@Google',
        decImg: './asset/homepage/google.png'
    }
    ,
    {
        content: "老师非常认真负责，大赞！答疑特别尽心尽力，而且非常及时，简直太感动了！",
        name: '​Y. Wang',
        title: 'JAVA Developer',
        company: '@Google',
        decImg: './asset/homepage/Adobe.png'
    },
    {
        content: "课程结构，老师态度，课程内容很详实密集",
        name: '​Y. Wang',
        title: 'JAVA Developer',
        company: '@Google',
        decImg: './asset/homepage/Adobe.png'
    },
    {
        content: "直播课程讲得很清楚，答疑也很快，Career Service也很棒",
        name: '​Y. Wang',
        title: 'JAVA Developer',
        company: '@Google',
        decImg: './asset/homepage/Adobe.png'
    }
    ,
    {
        content: "全面的cover到DS的知识点，以及project之后的简历build up的建议",
        name: '​Y. Wang',
        title: 'JAVA Developer',
        company: '@Google',
        decImg: './asset/homepage/Huawei.png'
    },
    {
        content: "老师非常认真负责，大赞！答疑特别尽心尽力，而且非常及时，简直太感动了！",
        name: '​Y. Wang',
        title: 'JAVA Developer',
        company: '@Google',
        decImg: './asset/homepage/Huawei.png'
    },
    {
        content: "老师非常认真负责，大赞！答疑特别尽心尽力，而且非常及时，简直太感动了！",
        name: '​Y. Wang',
        title: 'JAVA Developer',
        company: '@Google',
        decImg: './asset/homepage/Huawei.png'
    }

];


const CourseFeedback = (props) => {
    const { classes } = props;

    return (
        <div style={{ backgroundColor: '#fff', height: '500px' }} className="roots">
            <div>
                <h2 style={{ marginBottom: '30px' }}>学员课程反馈</h2>
                <section
                    className={classes.root}
                >
                    <FeedbackGroup data={feedback} />
                </section>
            </div>
        </div>
    );
};

export default withStyles(styles)(CourseFeedback);