import React from 'react'
import style from './StarBackground.module.css'
export default function StarBackground() {
    return (
        <div className={style.bgAnimation}>
            <div id={style?.stars}></div>
            <div id={style?.stars2}></div>
            <div id={style?.stars3}></div>
            <div id={style?.stars4}></div>
        </div>
    )
}
