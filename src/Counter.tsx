import React from "react";
import {Button} from "./Button";
import {CountValue} from "./CountValue";


export function Counter() {

    return (
        <div className={'App-header'}>
            <div className={'App-wrapper'}>
                <div >
                    <CountValue />
                </div>

            </div>
        </div>
    )
}

