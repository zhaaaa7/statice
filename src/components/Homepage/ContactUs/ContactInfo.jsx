import React from 'react';

const CoontactInfo = () => {
    return (
        <div style={{ width: '400px', color: '#fff' }}>
            <h2 style={{
                color: '#fff',
                fontSize: '36px',
                fontWeight: '400',
                letterSpacing: '0.9px',
                textAlign: 'left',
                marginBottom: '10px'
            }}>联系我们</h2>
            <p style={{ textAlign: 'left', letterSpacing: '0.9px', lineHeight: '1.79' }}>请发送邮件至<span style={{ color: '#65abf1', fontWeight: '500' }}>services@flagdream.com</span>。课程组老师将在收到邮件后24小时内与你联系。</p>
            <div style={{
                marginTop: '40px', textAlign: 'left',
            }}>
                <p style={{ marginBottom: '20px' }}>微信公众号</p>
                <img src="./asset/courses/qr.png" alt="qrcode" width="150px" />
            </div>
        </div>
    );
};

export default CoontactInfo;