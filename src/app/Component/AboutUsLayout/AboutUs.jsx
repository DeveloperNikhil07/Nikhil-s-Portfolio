'use client'
import React, { useEffect } from 'react'
import style from './AboutUs.module.css'
import ViewNextSectionButton from '../SectionCommonButton/ViewNextSectionButton'
import ViewPreviousSectionButton from '../SectionCommonButton/ViewPreviousSectionButton'
import SkillsIconList from './SkillsIconList'
import LinearProgress from '../Progressbar/LinearProgress'  // ✅ correct import
import { usePathname } from "next/navigation";

export default function AboutUs({ ViewNextLayout, ViewPreviousLayout }) {
    const GetPathName = usePathname();
    const [hideBottomNavButtons, setHideBottomNavButtons] = React.useState(false);
    useEffect(() => {
        if (GetPathName === "/aboutus") {
            setHideBottomNavButtons(true);
        } else {
            setHideBottomNavButtons(false);
        }
    }, [GetPathName])

    const skills = [
        { skill: "HTML", percentage: 90, gradient: ["#ff512f", "#ff5722"] },
        { skill: "CSS", percentage: 85, gradient: ["#1fa2ff", "#2196f3"] },
        { skill: "ReactJs", percentage: 75, gradient: ["#61dafb", "#00d8ff"] },
        { skill: "NextJs", percentage: 70, gradient: ["#000000", "#434343"] },
        { skill: "Bootstrap", percentage: 80, gradient: ["#563d7c", "#7451a7ff"] },
        // { skill: "Saas", percentage: 65, gradient: ["#cb6698", "#be6f97ff"] },
    ];

    return (
        <section className={style.aboutUsMain}>
            <div className={style.aboutUsInner}>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-12'>
                            <div className={`${style.aboutUsLeftContent} section-title text-center mb-2 mb-md-3`}>
                                <h1>About Us</h1>
                            </div>
                        </div>
                    </div>

                    <div className='row align-items-center'>
                        {/* Progress Bars Section */}
                        <div className='col-12 col-md-5'>
                            <div className={style.aboutUsRightContent}>
                                {skills.map((skillObj, i) => (
                                    <LinearProgress
                                        key={i}
                                        skill={skillObj.skill}
                                        percentage={skillObj.percentage}
                                        gradient={skillObj.gradient}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* About Me Text Section */}
                        <div className='col-12 col-md-7 mt-2'>
                            <div className={style.aboutUsContent}>
                                <p>
                                    Hi there! I'm <span>Nikhil Lodhi</span>, a <span>Frontend Developer</span> specializing in
                                    <span> React.js</span>, <span>Next.js</span>, and modern <span>CSS</span> frameworks.
                                </p>
                                <p>
                                    In my previous company, I worked on <span>WordPress</span> theme customization and
                                    developed custom features using <span>PHP (core)</span>.
                                </p>
                                <p>
                                    Currently, I’m working as a <span>Frontend Developer</span> where I focus on building
                                    <span> CRM</span> applications using <span>Next.js</span>, <span>React.js</span>, and
                                    <span> CSS</span> frameworks to deliver fast, scalable, and user-friendly solutions.
                                </p>
                                <p>
                                    I enjoy crafting clean <span>UI</span>, writing efficient code, and continuously
                                    improving my skills with modern web technologies.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Skills Icons Section */}
                    <div className='row'>
                        <div className='col-12'>
                            <div className={style.skillsList}>
                                <SkillsIconList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {hideBottomNavButtons ? null :
                <ViewNextSectionButton
                    ButtonText={"Next Slide"}
                    ViewNextLayout={ViewNextLayout}
                    PageTitle={"ProjectLayout"}
                />
            }
            {hideBottomNavButtons ? null :
                <ViewPreviousSectionButton
                    ButtonText={"Previous Slide"}
                    ViewPreviousLayout={ViewPreviousLayout}
                    PageTitle={"HomeLayout"}
                />
            }
        </section>
    )
}
