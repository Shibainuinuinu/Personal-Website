"use client";
import { useState, useEffect } from "react";

export default function Type( { text, time, wait } : { text: string, time: number, wait: number }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    let deleting : Boolean = false;
    let id : ReturnType<typeof setTimeout>;

    const tick = () => {
      i = deleting  ? i - 1 : i + 1;
      setDisplay(text.slice(0, i));
      
      let delay = time;

      if ((!deleting && i == text.length) || (deleting && i == 0)) {
        deleting = !deleting
        delay = wait;
      }
      id = setTimeout(tick, delay)

    }

    id = setTimeout(tick, time)
    return () => clearTimeout(id)
  }, [text, time]);

  return <span>{display}</span>
}