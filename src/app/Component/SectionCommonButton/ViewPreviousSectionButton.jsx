import style from './Button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function ViewPreviousSectionButton({ ButtonText, PageTitle, ViewPreviousLayout }) {
    return (
        <button onClick={() => ViewPreviousLayout(PageTitle)} className={style?.ViewPreviousSection}>
            <FontAwesomeIcon icon={faAnglesLeft} /> {ButtonText}
        </button>
    )
}
