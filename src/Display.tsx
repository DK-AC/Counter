import React from "react";

type DisplayPropsType = {
    count: number
}

export function Display(props: DisplayPropsType) {
    return (
        <div>
            {props.count}
        </div>
    )
}