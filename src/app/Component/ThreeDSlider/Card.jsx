'use client'
import React from 'react'
import styles from './ThreeDSlider.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Card = ({ name, role, desc, image, skillsImage }) => {
  return (
    <div className={styles.cardContainer}>
      {/* Background Image */}
      <img src={image} alt={name} className={styles.projectImage} />

      <div className={styles.bgCard}></div>

      <div className={styles.contentCard}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faHeart} className={styles.heartIcon} />
        </div>

        <h2 className={styles.name}>{name}</h2>
        <p className={styles.role}>{role}</p>
        <p className={styles.desc}>{desc}</p>

        {/* Skills Icons */}
        <ul className={styles.skillsList}>
          {Array.isArray(skillsImage)
            ? skillsImage.map((skill, index) => (
              <li key={index} className={styles.skillItem}>
                <img src={skill.skillsImage} alt={skill.alt} className={styles.skillIcon}/>
              </li>
            ))
            : skillsImage && (
              <li className={styles.skillItem}>
                <img
                  src={skillsImage}
                  alt="Skill Icon"
                  className={styles.skillIcon}
                />
              </li>
            )}
        </ul>
      </div>
    </div>
  )
}

export default Card
