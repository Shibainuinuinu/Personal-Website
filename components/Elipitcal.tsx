"use client";
import { useState, useEffect } from "react";

export default function Elipiical({ text, time, status} : {text : string, time: number, status: string}) { 
    const [display, setDisplay] = useState("");

    useEffect(() => {
        if (status == "submitting") {
            return
        }
        const id = setInterval(() => {
            let i = 0;
            setDisplay( display.length > text.length ? "" : text.slice(0, i));
            i++; 

        }, time)
        return () => clearInterval(id)
    }, [display])
    return (
        <span>
            {display}
        </span>
    )
}