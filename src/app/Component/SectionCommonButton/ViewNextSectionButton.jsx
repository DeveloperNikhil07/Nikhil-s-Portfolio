import style from './Button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
export default function ViewNextSectionButton({ ButtonText, PageTitle, ViewNextLayout }) {
    return (
        <button onClick={() => ViewNextLayout(PageTitle)} className={`${style?.ViewNextSection}`}>
            {ButtonText} <FontAwesomeIcon icon={faAnglesRight} />
        </button>
    )
}
