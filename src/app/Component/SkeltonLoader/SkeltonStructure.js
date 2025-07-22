import React from 'react'
import style from './SkeltonStructure.module.css'; // Assuming you have a CSS file for styles
export default function SkeltonStructure({ height = '2rem', width = '100%', borderRadius = '4px', customClass = '' }) {
  return (
    <div className={`${style?.skeleton} ${customClass}`} style={{ height, width, borderRadius }}></div>
  )
}
