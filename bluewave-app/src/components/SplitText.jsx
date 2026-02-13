import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const SplitText = ({
    text,
    className = '',
    delay = 0,
    duration = 0.5,
    ease = 'power1.out',
    splitType = 'chars', // 'chars' | 'words'
    from = { opacity: 0, y: 20 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = '0px',
    textAlign = 'left',
    onLetterAnimationComplete,
    showCallback = false // debug flag
}) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold, rootMargin }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    useGSAP(() => {
        if (!isVisible) return;

        const elements = containerRef.current.querySelectorAll('.split-item');

        gsap.fromTo(
            elements,
            from,
            {
                ...to,
                duration: duration,
                ease: ease,
                stagger: delay / 1000,
                onComplete: () => {
                    if (onLetterAnimationComplete) {
                        onLetterAnimationComplete();
                    }
                }
            }
        );
    }, { dependencies: [isVisible], scope: containerRef });

    const getItems = () => {
        if (splitType === 'chars') {
            return text.split('').map((char, index) => (
                <span key={index} className="split-item" style={{ display: 'inline-block', whiteSpace: 'pre' }}>
                    {char}
                </span>
            ));
        } else {
            // Split by words
            return text.split(' ').map((word, index) => (
                <span key={index} className="split-item" style={{ display: 'inline-block', whiteSpace: 'pre' }}>
                    {word}&nbsp;
                </span>
            ));
        }
    };

    return (
        <div
            ref={containerRef}
            className={className}
            style={{ textAlign, display: 'block' }} // Added block display for headline behavior
        >
            {getItems()}
        </div>
    );
};

export default SplitText;
