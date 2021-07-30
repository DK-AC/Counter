import React from "react";

type ButtonPropsType = {
    count: number
    addCount: () => void
    resetCount: () => void
    maxCount: number
}

export function Button(props: ButtonPropsType) {


    return (
        <>
            <button
                onClick={props.addCount}
                disabled={props.count === props.maxCount}
            >
                inc
            </button>
            <button
                onClick={props.resetCount}
                disabled={props.count === 0}
            >
                reset
            </button>
        </>
    )
}