import { useState, useEffect, useRef } from 'react';

export default function useAnimateOnScroll(threshold = 0.3) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
            else {
                setIsVisible(false);
            }
        },
        {
            threshold,
        });

        observer.observe(ref.current);

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    return [ref, isVisible];
}