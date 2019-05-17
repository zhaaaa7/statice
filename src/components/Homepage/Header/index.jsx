import React from 'react';
import Carousel from './Carousel';
import Content from './Content';
import AdsData from './AdsData';
const header = () => {
    return (
        <header style={{ height: '571px', position: 'relative' }}>
            <Carousel />
            <Content />
            <AdsData />
        </header>
    );
};

export default header;