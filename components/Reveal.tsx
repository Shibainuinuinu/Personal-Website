"use client";
import {useEffect, useRef, useState } from "react";

export default function Reveal({ children, duration = 1500 } : {children : React.ReactNode, duration?: number}) { 
    const ref = useRef(null);
    const [inView, setView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) {
            return
        }

        const observer = new IntersectionObserver(([entry]) => {
            setView(entry.isIntersecting);
        });

        observer.observe(el)
        return () => observer.disconnect() 

    }, []);

    return (
        <div ref={ref} className={`transition-all duration-${duration} ${inView ? `opacity-100` : `opacity-0`}`}>
            {children}
        </div>
    )
}