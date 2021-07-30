import React from "react";

export function Button() {
    return (
        <div>
            <button
                /*onClick={addCount}
                disabled={count === max_count}*/
            >
                inc
            </button>
            <button
                /*disabled={!count}
                onClick={resetCount}*/
            >
                reset
            </button>
        </div>
    )
}