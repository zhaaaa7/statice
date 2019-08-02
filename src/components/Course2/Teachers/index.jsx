import React from 'react';
import TeacherCard from './TeacherCard';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '60px',
    },
    '@media screen and (max-width: 640px)': {
        root: {
            flexDirection: 'column'
        },
    }
};

const data = [
    {
        name: '​金一粟',
        title: 'CEO @ IntelliPro',
        des: 'FLAGDream Co-Founder，首席职业发展和就业咨询师。现任美国华人最大人才生态圈IntelliPro Group创始人兼CEO。曾先后在Oracle, IBM, Cisco等公司从事技术开发、咨询、项目管理等工作。多年来，为Google、Apple、Amazon、Samsung、LinkedIn, Airbnb、阿里巴巴、腾讯、百度、京东、头条、滴滴等知名中美企业输送数千人才。',
        decImg: './asset/homepage/t1.png'
    },

    {
        name: '​阮巨城教授',
        title: 'Sr.SDE @ Google AI',
        des: 'FLAGDream Lead DS Instructor，台湾清华大学兼任教授，开设机器学习理论等相关课程。获得卡内基梅隆大学电机电脑工程博士与机器学习硕士。现就职于 Google AI，专注研发人工智能、深度学习技术以及相关产品开发。在机器学习相关领域已发表数十篇论文，包含理论创新及优化、系统分析和计算机视觉等。开发课程获誉“最好的华语深度学习课程”。',
        decImg: './asset/homepage/t2.png'
    }
];

const Teachers = (props) => {
    const { classes } = props;

    return (
        <div className="roots">
            <div>
                <h2>讲师介绍</h2>
                <section className={classes.root}>
                    {
                        data.map((ele, index) => {
                            return <TeacherCard
                                key={index}
                                name={ele.name}
                                title={ele.title}
                                des={ele.des}
                                decImg={ele.decImg} />;
                        })
                    }
                </section>

            </div>
        </div>
    );
};

export default withStyles(styles)(Teachers);