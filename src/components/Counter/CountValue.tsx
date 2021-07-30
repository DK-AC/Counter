import React, {useState} from "react";
import {Button} from "../Button/Button";
import {Display} from "../Display/Display";


export function CountValue() {

    const max_count = 5;

    const [count, setCount] = useState(0)

    const addCount = () => setCount(count + 1)
    const resetCount = () => setCount(0)

    const offCnt = {
        color: count >= max_count ? 'red' : '',
    }

    return (
        <div>
            <div
                className={'App-number'}
                style={offCnt}>
                <Display count={count}/>
            </div>
            <div>
                <Button
                    count={count}
                    addCount={addCount}
                    maxCount={max_count}
                    resetCount={resetCount}
                />
            </div>
        </div>
    )
}

