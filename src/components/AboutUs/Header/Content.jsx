import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        alignItems: "center",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        '& > *': {
            marginBottom: '30px'
        }
    },
    text1: {
        color: '#fff',
        textAlign: 'center',
        fontSize: '28px',
        letterSpacing: '0.7px',
        fontWeight: '500'
    },
    text2: {
        color: '#fff',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: '400',
        opacity: '0.92',
        letterSpacing: '0.4px'
    }
};


const Content = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <h1 className={classes.text1}>关于我们</h1>
            <p className={classes.text2}>​FLAG Dream致力于为未来科技从业者提供完整的学习与求职解决方案，打造一流一站式学习求职平台。每年，FLAG Dream通过高质量的课程和顶级的就业服务衔接工业界和学界，将数百位学员送入硅谷和全球的顶级公司。</p>

            <p className={classes.text2}>身处硅谷，我们相信，每一位愿意学习、乐于拥抱变化的人都能在当今时代中寻找到合适自己的岗位。FLAG Dream将用最优质的资源，帮助下一代科技从业者实现求职梦想。</p>
        </div>
    );
};

export default withStyles(styles)(Content);