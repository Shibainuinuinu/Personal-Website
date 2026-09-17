"use client";
import { useState, useEffect } from "react";

export default function Ellipsis({ text, time} : {text : string, time: number}) {
    const [display, setDisplay] = useState("");

    useEffect(() => {
        let i = 0;
        const id = setInterval(() => {
            setDisplay(text.slice(0, i % (text.length + 1)));
            i++; 

        }, time)
        return () => clearInterval(id)
    }, [])
    return (
        <span>
            {display}
        </span>
    )
}