import ThreeDSlider from '../ThreeDSlider/ThreeDSlider'
import style from './OurProjects.module.css'
export default function OurProjects({ ViewNextLayout, ViewPreviousLayout }) {
    return (
        <section className={style.OurProjectsMain}>
            <div className={style.OurProjectsBanner}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center mb-3 mb-md-4 mb-lg-5'>
                            <div className={`position-relative ${style.OurProjectTitle}`}>
                                <h1>My <span>Projects</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-12 col-md-6'>
                            <div className={`${style.OurProjectThumbnail}`}>
                                <ThreeDSlider />
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className={`text-center text-md-start mt-2 mt-md-0 ps-md-2 ps-lg-3 ps-xl-5 position-relative ${style.OurProjectsContent}`}>
                                <p>Hey! 👋 I’m Nikhil Lodhi – I build modern, responsive websites using skills like HTML, CSS, JavaScript, PHP, React, Next.js, WordPress, and CSS frameworks.</p>
                                <p>From pure HTML/CSS projects to dynamic React & Next.js apps, and even WordPress custom sites, each project is designed to be interactive, mobile-friendly, and user-focused website.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
