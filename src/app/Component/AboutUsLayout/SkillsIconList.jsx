import React from "react";
import styles from "./AboutUs.module.css"; // CSS ko alag rakha hai

export default function SkillsIconList() {
    const skillsIcon = [
        { alt: "HTML Image", src: "/assets/images/TechnologyImg/HTML.svg" },
        { alt: "CSS Image", src: "/assets/images/TechnologyImg/CSS.svg" },
        { alt: "REACTJS Image", src: "/assets/images/TechnologyImg/react.svg" },
        { alt: "NEXTJS Image", src: "/assets/images/TechnologyImg/nextjs.svg", key: "nextjs" },
        { alt: "JS Image", src: "/assets/images/TechnologyImg/js.svg" },
        { alt: "BOOTSTRAP Image", src: "/assets/images/TechnologyImg/bootstrap.svg" },
        { alt: "TAILWINDCSS Image", src: "/assets/images/TechnologyImg/tailwind.svg" },
        { alt: "FIGMA Image", src: "/assets/images/TechnologyImg/figma.svg" },
        { alt: "SAAS Image", src: "/assets/images/TechnologyImg/sass.svg" },
        { alt: "WORDPRESS Image", src: "/assets/images/TechnologyImg/wordpress.svg" },
    ];

    // 👇 duplicate array for infinite loop
    const duplicatedIcons = [...skillsIcon, ...skillsIcon];

    return (
        <div className={styles.slider}>
            <ul className={styles.sliderItems}>
                {duplicatedIcons.map((item, i) => (
                    <li key={i}>
                        <img src={item.src} alt={item.alt} className={item?.key === "nextjs" ? 'filteradded' : ''} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
