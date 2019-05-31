import React from 'react';
import Carousel from './Carousel';
import Content from './Content';

const header = () => {
    return (
        <header style={{ height: '395px', position: 'relative', marginTop: '90px', }}>
            <Carousel />
            <Content />
        </header>
    );
};

export default header;