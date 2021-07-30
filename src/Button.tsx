import React from "react";

type ButtonPropsType = {
    title: string
    count: number
    addCount: () => void
    resetCount: () => void
    maxCount:number
}

export function Button(props: ButtonPropsType) {


    return (
        <>
            <button
                onClick={props.addCount}
                disabled={props.count === props.maxCount}
            >
                {props.title}
            </button>
        </>
    )
}