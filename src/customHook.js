import { useState, useEffect } from 'react';


function debounce(fn) {
    let timer;
    return () => {
        if (timer) { clearTimeout(timer); }
        timer = setTimeout(() => { fn(); }, 100);
    };
}

const getWindowDimensions = () => {
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    // const height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

    // return { width, height };

    return width;
};

const getHTMLNodeList = () => {
    let roots = Array.from(document.querySelectorAll('.roots'));
    roots = roots.map(ele => {
        return ele.offsetTop;
    });

    return roots;
};

const getScroll = () => {
    return window.scrollY;
};



export function useWindowWidth() {
    const [windowWidth, getWindowWidth] = useState(getWindowDimensions());
    const [offsetTops, setOffSetTops] = useState([]);

    useEffect(() => {
        setOffSetTops(getHTMLNodeList());

        const resizeCallback = debounce(() => {
            getWindowWidth(getWindowDimensions());
            setOffSetTops(getHTMLNodeList());
        });
        window.addEventListener('resize', resizeCallback);

        return () => {
            window.removeEventListener('resize', resizeCallback);
        }
    }, []);

    return { windowWidth, offsetTops };
}


export function useWindowScroll() {
    const [windowScroll, getWindowScroll] = useState(getScroll());

    useEffect(() => {
        const scrollCallback = () => {
            getWindowScroll(getScroll());
        };
        window.addEventListener('scroll', scrollCallback);

        return () => { window.removeEventListener('scroll', scrollCallback); };
    }, []);

    return windowScroll;
}


export function useMediaQuery(query) {
    const mql = window.matchMedia(query);
    const [matches, setMatches] = useState(mql.matches);

    useEffect(() => {
        const listener = (e) => {
            if (e.matches) {
                setMatches(true);
            } else {
                setMatches(false);
            }
        };
        mql.addListener(listener);

        return () => { mql.removeListener(listener) };
    }, [mql]);

    return matches;
}