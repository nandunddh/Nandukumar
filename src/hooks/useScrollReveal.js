import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — returns a ref to attach to any element.
 * When the element enters the viewport, `isVisible` flips to true.
 */
const useScrollReveal = (options = {}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el); // only trigger once
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
};

export default useScrollReveal;
