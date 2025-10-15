'use client'
import React, { useState } from 'react'
import styles from './ThreeDSlider.module.css'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons'

const slides = [
  {
    name: 'Nikhil Lodhi',
    role: 'Gloves Collector',
    desc: 'Nihil eum omnis et quis nihil.',
  },
  {
    name: 'Harsh Sharama',
    role: 'Watch Designer',
    desc: 'Doloribus magni unde autem sint.',
  },
  {
    name: 'Shubham Singh',
    role: 'Art Enthusiast',
    desc: 'Perferendis voluptates accusamus eos.',
  },
  {
    name: 'Ashmit Sharama',
    role: 'Art Enthusiast',
    desc: 'Perferendis voluptates accusamus eos.',
  },
]

const ThreeDSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const getCircularIndex = (index) => {
    const total = slides.length
    return ((index % total) + total) % total
  }

  return (
    <div className={styles.sliderContainer}>
      <FontAwesomeIcon
        icon={faLeftLong}
        className={`${styles.arrow} ${styles.leftArrow}`}
        onClick={prevSlide}
      />

      <div className={styles.slider}>
        {slides.map((_, i) => {
          const offset = ((i - activeIndex + slides.length) % slides.length)
          const realOffset =
            offset > slides.length / 2 ? offset - slides.length : offset

          const card = slides[getCircularIndex(i)]

          return (
            <div
              key={i}
              className={styles.slide}
              style={{
                transform: `
                  translateX(${realOffset * 67}%)
                  scale(${realOffset === 0 ? 1 : 0.85})
                  rotateY(${realOffset * 25}deg)
                `,
                zIndex: slides.length - Math.abs(realOffset),
                opacity: Math.abs(realOffset) > 2 ? 0 : 1,
              }}
            >
              <Card {...card} active={realOffset === 0} />
            </div>
          )
        })}
      </div>

      <FontAwesomeIcon
        icon={faRightLong}
        className={`${styles.arrow} ${styles.rightArrow}`}
        onClick={nextSlide}
      />
    </div>
  )
}

export default ThreeDSlider
