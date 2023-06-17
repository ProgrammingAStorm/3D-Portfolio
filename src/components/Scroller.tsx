import React, { useEffect, useRef } from "react"

export default function Scroller() {
    // Sets window onScroll to handleScroll
    useEffect(() => {
        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        }
    }, []);

    const lastScroll = useRef(0);

    function handleScroll(e: WheelEvent) {
        console.log(e.deltaY)
        
        if (e.deltaY === -120) { 
            console.log("up")
        }

        if (e.deltaY === 120) {
            console.log("down")
        }
    }

    return <div className="absolute right-0 h-full w-[10px] p-[2px] bg-slate-500"></div>
}