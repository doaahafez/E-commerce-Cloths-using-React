import React, { useEffect, useRef, useState } from "react";

export default function DynamicCounter() {
    const [count, setCount] = useState(0);
    const stopHandler = () => {
        clearInterval(myInt.current);
    };
    const myInt = useRef(null);
    useEffect(() => {
        myInt.current = setInterval(() => {
            setCount((prevState) => prevState + 1);
            console.log("working interval");
        }, 1000);
        return () => {
            clearInterval(myInt.current);
        };
    }, []);

    return (
        <div>
            {count}
            <button className="btn btn-warning" onClick={stopHandler}>
                {" "}
                stop{" "}
            </button>{" "}
        </div>
    );
}
