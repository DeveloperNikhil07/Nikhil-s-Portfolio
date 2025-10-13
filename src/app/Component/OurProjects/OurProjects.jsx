'use client'
import React, { useEffect, useState } from 'react'
import style from './OurProjects.module.css'
import ViewNextSectionButton from '../SectionCommonButton/ViewNextSectionButton'
import ViewPreviousSectionButton from '../SectionCommonButton/ViewPreviousSectionButton'
import { usePathname } from 'next/navigation'
export default function OurProjects({ ViewNextLayout, ViewPreviousLayout }) {
    const GetPathName = usePathname();
    const [hideBottomNavButtons, setHideBottomNavButtons] = useState(false);
    useEffect(() => {
        if (GetPathName === "/ourprojects") {
            setHideBottomNavButtons(true);
        } else {
            setHideBottomNavButtons(false);
        }
    }, [GetPathName])
    return (
        <section className={style.OurProjectsMain}>
            <div className={style.OurProjectsBanner}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center mb-3 mb-md-4 mb-lg-5'>
                            <div className={`position-relative ${style.OurProjectTitle}`}>
                                <h1>Our Projects</h1>
                            </div>
                        </div>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-12 col-md-7'>
                            <div className={`${style.OurProjectThumbnail}`}>
                            </div>
                        </div>
                        <div className='col-12 col-md-5'>
                            <div className={`text-center text-md-start mt-2 mt-md-0 ps-md-2 ps-lg-3 ps-xl-5 position-relative ${style.OurProjectsContent}`}>
                                <p>Hey! 👋 I’m Nikhil Lodhi – I build modern, responsive websites using skills like HTML, CSS, JavaScript, PHP, React, Next.js, WordPress, and CSS frameworks.</p>
                                <p>From pure HTML/CSS projects to dynamic React & Next.js apps, and even WordPress custom sites, each project is designed to be interactive, mobile-friendly, and user-focused website.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Next Module button */}
            {hideBottomNavButtons ? null : <ViewNextSectionButton ButtonText={"Next Slide"} ViewNextLayout={ViewNextLayout} PageTitle={"ContactUs"} />}

            {/* Previous Module button */}
            {hideBottomNavButtons ? null : <ViewPreviousSectionButton ButtonText={"Previous Slide"} ViewPreviousLayout={ViewPreviousLayout} PageTitle={"AboutLayout"} />}
        </section>
    )
}
