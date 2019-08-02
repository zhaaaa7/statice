import React from 'react';

const NoMatch = () => {
    return <div style={{
        width: '300px',
        height: '300px',
        position: 'fixed',
        fontSize: '40px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
    }}>页面待开发
    <a href="./" style={{ color: 'red' }}>回首页</a>
    </div>
};

export default NoMatch;