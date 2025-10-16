'use client'
import React, { useState } from 'react'
import styles from './ThreeDSlider.module.css'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons'

const slides = [
  {
    name: 'Next.js Projects',
    role: 'Dynamic CRM & Admin Panels',
    desc: 'Created custom CRM and admin panel solutions using Next.js, Tailwind CSS, and MongoDB for efficient data management and user-friendly interfaces.',
    image: '/assets/images/ProjectsThumnails/crmlogin.svg',
    skillsImage: [
      { skillsImage: '/assets/images/TechnologyImg/nextjs.svg', alt: 'Next.js' },
      { skillsImage: '/assets/images/TechnologyImg/tailwind.svg', alt: 'Tailwind CSS' },
      { skillsImage: '/assets/images/TechnologyImg/html.svg', alt: 'HTML' },
      { skillsImage: '/assets/images/TechnologyImg/css.svg', alt: 'CSS' },
      { skillsImage: '/assets/images/TechnologyImg/bootstrap.svg', alt: 'Bootstrap' },
      { skillsImage: '/assets/images/TechnologyImg/wordpress.svg', alt: 'Wordpress' },
    ],
  },
  {
    name: 'Next.js Projects',
    role: 'Full-Stack Web Applications',
    desc: 'Developed high-performance web apps using Next.js with App Router, API integration, and server-side rendering for lightning-fast experiences and improved SEO.',
    image: '/assets/images/ProjectsThumnails/nextjs-project.jpg',
    skillsImage: [
      { skillsImage: '/assets/images/TechnologyImg/nextjs.svg', alt: 'Next.js' },
      { skillsImage: '/assets/images/TechnologyImg/tailwind.svg', alt: 'Tailwind CSS' },
      { skillsImage: '/assets/images/TechnologyImg/html.svg', alt: 'HTML' },
      { skillsImage: '/assets/images/TechnologyImg/css.svg', alt: 'CSS' },
      { skillsImage: '/assets/images/TechnologyImg/bootstrap.svg', alt: 'Bootstrap' },
      { skillsImage: '/assets/images/TechnologyImg/wordpress.svg', alt: 'Wordpress' },
    ],
  },
  {
    name: 'React.js Projects',
    role: 'Interactive UI Development',
    desc: 'Built dynamic single-page applications (SPAs) with smooth animations, reusable components, and real-time features powered by Socket.IO and REST APIs.',
    image: '/assets/images/ProjectsThumnails/reactjs-project.jpg',
    skillsImage: [
      { skillsImage: '/assets/images/TechnologyImg/nextjs.svg', alt: 'Next.js' },
      { skillsImage: '/assets/images/TechnologyImg/tailwind.svg', alt: 'Tailwind CSS' },
      { skillsImage: '/assets/images/TechnologyImg/html.svg', alt: 'HTML' },
      { skillsImage: '/assets/images/TechnologyImg/css.svg', alt: 'CSS' },
      { skillsImage: '/assets/images/TechnologyImg/bootstrap.svg', alt: 'Bootstrap' },
      { skillsImage: '/assets/images/TechnologyImg/wordpress.svg', alt: 'Wordpress' },
    ],
  },
  {
    name: 'Custom PHP Projects',
    role: 'Tailored Web Solutions',
    desc: 'Developed fully customized PHP applications including business websites, booking systems, and admin dashboards with secure backend logic and MySQL databases.',
    image: '/assets/images/ProjectsThumnails/php-project.jpg',
    skillsImage: [
      { skillsImage: '/assets/images/TechnologyImg/nextjs.svg', alt: 'Next.js' },
      { skillsImage: '/assets/images/TechnologyImg/tailwind.svg', alt: 'Tailwind CSS' },
      { skillsImage: '/assets/images/TechnologyImg/html.svg', alt: 'HTML' },
      { skillsImage: '/assets/images/TechnologyImg/css.svg', alt: 'CSS' },
      { skillsImage: '/assets/images/TechnologyImg/bootstrap.svg', alt: 'Bootstrap' },
      { skillsImage: '/assets/images/TechnologyImg/wordpress.svg', alt: 'Wordpress' },
    ],
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
