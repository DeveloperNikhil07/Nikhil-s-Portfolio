import React from 'react'
import style from './OurProjects.module.css'
import ViewNextSectionButton from '../SectionCommonButton/ViewNextSectionButton'
import ViewPreviousSectionButton from '../SectionCommonButton/ViewPreviousSectionButton'
import Square from '../Square/Square'
export default function OurProjects({ ViewNextLayout, ViewPreviousLayout }) {
    return (
        <section className={style.OurProjectsMain}>
            <div className={style.OurProjectsBanner}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <div className={`ps-5 position-relative ${style.OurProjectsContent}`}>
                                {/* <span className={style.QuotesIcn}><QuotesIcon /></span> */}
                                <h1>Our Projects</h1>
                            </div>
                        </div>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-6'>
                            <div className={`${style.OurProjectThumbnail}`}>

                            </div>
                        </div>
                        <div className='col-6'>

                        </div>
                    </div>
                </div>
            </div>
            {/* Next Module button */}
            <ViewNextSectionButton ButtonText={"Next Slide"} ViewNextLayout={ViewNextLayout} PageTitle={"ContactUs"} />

            {/* Previous Module button */}
            <ViewPreviousSectionButton ButtonText={"Previous Slide"} ViewPreviousLayout={ViewPreviousLayout} PageTitle={"AboutLayout"} />
        </section>
    )
}
