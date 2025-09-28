"use client";

import styles from "./NextLogo.module.css";

export default function WindowLoader({ size = 236 }) {
  return (
    <div className={styles.wrapper} style={{ width: size, height: size }}>
      <svg
        className={styles.logo}
        width={size}
        height={size}
        viewBox="0 0 236 236"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
      >
        <g filter="url(#filter0_d)">
          <circle cx="118" cy="114" r="91" className={styles.bgCircle} />
          <circle
            cx="118"
            cy="114"
            r="111.5"
            className={styles.ring}
            strokeWidth="5"
          />
          <path
            className={`${styles.path} ${styles.left}`}
            d="M79.2627 68.6146V140.131C79.9539 141.472 80.475 141.825 81.5549 141.965H88.8899L90.7237 140.131V87.4106C115.685 124.279 130.056 144.664 156.739 180.244L162.698 176.118C133.538 132.93 105.37 91.4998 88.8899 66.7809H81.5549L79.2627 68.6146Z"
            fill="white"
          />
          <path
            className={`${styles.path} ${styles.right}`}
            d="M146.424 66.7809V130.045L135.88 113.542V66.7809C135.87 65.4358 136.371 64.9052 137.943 64.2595H143.673C145.408 64.8569 145.795 65.5349 146.424 66.7809Z"
            fill="white"
          />
        </g>
        <defs>
          <filter id="filter0_d" x="0" y="0" width="236" height="236" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
