import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '25%',
        height: '70%',
        borderRight: '1px solid #ececec',
        textAlign: 'center',
        justifyContent: 'center'
    }

};

const Header = (props) => {
    const { data, money, classes } = props;
    const initalNum = data > 50 ? data * 0.5 : 0;
    const step = data > 100 ? data * 0.01 : 1;
    const [num, setNum] = useState(initalNum);

    useEffect(() => {
        let timer;
        if (num < data) {
            timer = setTimeout(() => {
                setNum(num + step);
            }, 50);
        }

        return () => { clearTimeout(timer) };
    }, [num, data, step]);

    return (
        <div className={classes.root}>
            <div style={{
                fontFamily: 'Avenir',
                fontSize: '28px',
                fontWeight: '500',
                color: '#1f74d4'
            }}>
                {money ? '$' : ''}
                {num.toLocaleString('en-IN')}{'+'}</div>
            <div style={{
                fontSize: '16px',
                color: '#5e5e5e'
            }}>{props.des}</div>
        </div>
    );
};

export default withStyles(styles)(Header);