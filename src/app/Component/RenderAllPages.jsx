'use client'
import React, { useState } from 'react'
import HomeBanner from './HomeBanner/HomeBanner'
import AboutUs from './AboutUsLayout/AboutUs'
import OurProjects from './OurProjects/OurProjects'

export default function RenderAllPages() {
    const [activeSection, setActiveSection] = useState("HomeLayout")
    // Next Layout Slide
    const ViewNextLayout = (data) => {
        console.log("Nextslide", data);
        if (data === "HomeLayout") {
            setActiveSection("AboutLayout")
        }
        else if (data === "ProjectLayout") {
            setActiveSection("ProjectLayout")
        }
        else if (data === "AboutLayout") {
            setActiveSection("ProjectLayout")
        }
        else if (data === "ContactLayout") {
            setActiveSection("ContactLayout")
        }
    }

    // Previous Layout Slide
    const ViewPreviousLayout = (data) => {
        console.log("Previous", data);
        if (data === "HomeLayout") {
            setActiveSection("HomeLayout")
        }
        else if (data === "AboutLayout") {
            setActiveSection("AboutLayout")
        }
        else if (data === "ProjectLayout") {
            setActiveSection("AboutLayout")
        }
    }
    return (
        <>
            {activeSection === "HomeLayout" && <HomeBanner ViewNextLayout={ViewNextLayout} />}
            {activeSection === "AboutLayout" && <AboutUs ViewPreviousLayout={ViewPreviousLayout} ViewNextLayout={ViewNextLayout} />}
            {activeSection === "ProjectLayout" && <OurProjects ViewPreviousLayout={ViewPreviousLayout} ViewNextLayout={ViewNextLayout} />}
            {activeSection === "ContactLayout" && <HomeBanner />}
        </>
    )
}
