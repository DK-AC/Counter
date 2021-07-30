import React, {useState} from "react";


export function Counter() {

    const max_count = 5;

    const [count, setCount] = useState(0)

    const addCount = () => setCount(count + 1)
    const resetCount = () => setCount(0)

    const offBtn = {
        color: count >= max_count ? 'red' : '',
    }

    return (
        <div className={'App-header'}>
            <div className={'App-wrapper'}>
                <div className={'App-number'} style={offBtn}>
                    {count}
                </div>
                <div className={'App-button'}>
                    <button
                        onClick={addCount}
                        disabled={count === max_count}
                    >
                        inc
                    </button>
                    <button
                        disabled={!count}
                        onClick={resetCount}
                    >
                        reset
                    </button>
                </div>
            </div>


        </div>
    )
}