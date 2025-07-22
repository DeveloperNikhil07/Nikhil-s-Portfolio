'use client'
import React from 'react'
import style from './homebanner.module.css'
import Link from 'next/link'
import { useWebsiteContent } from '@/app/context/WbContent'
import HomeBannerSkelton from './HomeBannerSkelton'

export default function HomeBanner() {
    const { websiteData, loading } = useWebsiteContent();
    const GetHeroContent = websiteData?.homeBanner?.heroMainTitle || {};

    // content replace
    const formattedTitle = GetHeroContent?.subtitle?.replace(
        /#(.*?)#/g,
        '<span class="highlight">$1</span>'
    );

    return (
        <section className={`${style?.herowrapper}`}>
            <div className={`${style?.heroimage}`}>
                {/* If You want to image then add here */}
                <div className={`${style?.herocontent}`}>
                    <div className={`container`}>
                        <div className={`row align-items-center`}>
                            {loading ? <><HomeBannerSkelton /></> : <>
                                <div className={`col-12 text-center text-lg-start col-lg-6`}>
                                    <div className={`${style.sectiontitle} section-title`}>
                                        <h1 className={`${style?.maincontent} mb-3 mb-lg-4`}>{GetHeroContent?.title || ""}</h1>
                                        <p dangerouslySetInnerHTML={{ __html: formattedTitle }}></p>
                                    </div>
                                    <Link href="" download={``} className={`mt-4 mt-lg-5 cm-button`}>{GetHeroContent?.buttonText || ""}</Link>
                                </div>
                                <div className={`col-12 col-md-6`}>

                                </div>
                            </>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
