import React, {useState} from "react";
import {Button} from "./Button";


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
            <div className={'App-number'}
                 style={offCnt}>
                {count}
            </div>
            <div className={'App-button'}>
                <Button
                    title={'inc'}
                    count={count}
                    addCount={addCount}
                    maxCount={max_count}
                    resetCount={resetCount}
                />
                <Button
                    title={'reset'}
                    count={count}
                    resetCount={resetCount}
                    maxCount={max_count}
                    addCount={addCount}
                />
            </div>
        </div>
    )
}