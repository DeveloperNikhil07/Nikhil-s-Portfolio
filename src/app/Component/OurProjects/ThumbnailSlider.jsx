"use client";
import React, { useState } from "react";
import styles from "./Slider.module.css";
import Link from "next/link";

export default function ThumbnailSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderData = [
        {
            img: "/assets/images/ProjectsThumnails/rivenox-thumbnail.svg",
            title: "Rivenox Website",
            desc: "Lorem ipsum dolor sit amet.",
            link: "https://rivenox.com/",
            icon: "/assets/images/TechnologyImg/wordpress.svg"
        },
        {
            img: "/assets/images/ProjectsThumnails/crmlogin.svg",
            title: "Travel CRM",
            desc: "Lorem ipsum dolor sit amet.",
            link: "https://crmnext.reservationcentre.us/",
            icon: "/assets/images/TechnologyImg/nextjs.svg"
        },
        {
            img: "/assets/images/ProjectsThumnails/jh.svg",
            title: "JourneyHoper Website",
            desc: "Lorem ipsum dolor sit amet.",
            link: "https://journeyhoper.com/",
            icon: "/assets/images/TechnologyImg/nextjs.svg"
        },
        {
            img: "/assets/images/ProjectsThumnails/Vishvash-delhi.svg",
            title: "Vishvash Delhi",
            desc: "Lorem ipsum dolor sit amet.",
            link: "https://vishvashdelhi.com/",
            icon: "/assets/images/TechnologyImg/wordpress.svg"
        },
        {
            img: "/assets/images/ProjectsThumnails/mibmuscat.svg",
            title: "MIB Muscat Website",
            desc: "Lorem ipsum dolor sit amet.",
            link: "https://mibmuscat.com/",
            icon: "/assets/images/TechnologyImg/wordpress.svg"
        },
        {
            img: "/assets/images/ProjectsThumnails/smklandscaping.svg",
            title: "SMK Landscaping Website",
            desc: "Lorem ipsum dolor sit amet.",
            link: "http://smklandscaping.com/",
            icon: "/assets/images/TechnologyImg/wordpress.svg"
        },
    ];

    return (
        <div className={styles.boxArea}>
            {sliderData.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.box} ${activeIndex === index ? styles.active : ""} position-relative`}
                    onClick={() => setActiveIndex(index)}
                >
                    {activeIndex === index ? (
                        <Link href={item.link} target="_blank" rel="noopener noreferrer">
                            <img src={item.img} alt={item.title} />
                            <span><img src={item.icon} alt="Icon" className={styles.icon} /></span>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <div className={styles.card_overlay}></div>
                        </Link>
                    ) : (
                        <>
                            <img src={item.img} alt={item.title} />
                            <span><img src={item.icon} alt="Icon" className={styles.icon} /></span>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <div className={styles.card_overlay}></div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}
