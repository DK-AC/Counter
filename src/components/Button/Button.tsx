import React from "react";
import s from './Button.module.css'

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
                className={s.gradientButton}
                onClick={props.addCount}
                disabled={props.count === props.maxCount}
            >
                inc
            </button>
            <button
                className={s.gradientButton}
                onClick={props.resetCount}
                disabled={props.count === 0}
            >
                reset
            </button>
        </>
    )
}