"use client"

import { useState } from "react";
import Counter from "./new-item";

export default function CounterPage(){

    const [counter, setCounter] = useState(1);

    const incrementCounter = () => {
        let currentCount = counter;
        if(counter <= 19){
            setCounter(currentCount + 1);
        }
    }
    const oppositeCounter = () =>{
        let currentCount = counter;
        if(counter >= 2){
        setCounter(currentCount - 1);
        }
    }
    

    return(
        <main>
            <Counter currentCount={counter} incrementCountFunction={incrementCounter} oppositeCounterFunction={oppositeCounter} />
        </main>
    );
}