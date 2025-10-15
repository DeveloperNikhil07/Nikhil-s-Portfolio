'use client'
import React from 'react'
import styles from './ThreeDSlider.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Card = ({ name, role, desc }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.bgCard}></div>
      <div className={styles.contentCard}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faHeart} className={styles.heartIcon} />
        </div>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.role}>{role}</p>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  )
}

export default Card
