import React from 'react'
import style from './Square.module.css'

export default function Square({ height, width, LeftPos, TopPos, TranslateAll, RightPos, BottomPs }) {
    return (
        <span style={{ height: height, width: width, left: LeftPos, top: TopPos, transform: TranslateAll, right: RightPos, bottom: BottomPs }} className={style?.square}></span>
    )
}
