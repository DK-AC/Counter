import React, {useState} from "react";

export function CountValue() {

    const max_count = 5;

    const [count, setCount] = useState(0)

    const addCount = () => setCount(count + 1)
    const resetCount = () => setCount(0)

    const offBtn = {
        color: count >= max_count ? 'red' : '',
    }

    return (
        <div className={'App-number'}
             style={offBtn}>
            {count}
        </div>
    )
}