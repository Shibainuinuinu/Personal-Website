"use client";
import {useEffect, useRef, useState } from "react";

export default function Reveal({ children, duration = "1500" } : {children : React.ReactNode, duration?: string}) { 
    const ref = useRef<HTMLDivElement>(null);
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
        <div ref={ref} style={{transitionDuration: duration + "ms"}} className={`transition-all ${inView ? `opacity-100` : `opacity-0`}`}>
            {children}
        </div>
    )
}