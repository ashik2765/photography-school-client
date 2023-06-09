import anime from 'animejs';
import { useEffect, useRef } from 'react';

const Instructor = () => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        anime({
            targets: element,
            translateX: 250,
            rotate: '1turn',
            backgroundColor: '#ff0000',
            duration: 2000,
            easing: 'easeInOutSine',
        });
    }, []);
    return (
        <div>
            <div ref={elementRef} className="bg-blue-500 p-4 text-white w-72">
                Hello, Anime.js!
            </div>
        </div>
    );
};

export default Instructor;