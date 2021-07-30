import React, {useState} from "react";
import {Button} from "./Button";
import {CountValue} from "./CountValue";


export function Counter() {

    return (
        <div className={'App-header'}>
            <div className={'App-wrapper'}>
                <div className={'App-number'}>
                    <CountValue />
                </div>
                <div className={'App-button'}>
                    <Button title={'inc'}/>
                    <Button title={'reset'}/>
                </div>
            </div>
        </div>
    )
}

