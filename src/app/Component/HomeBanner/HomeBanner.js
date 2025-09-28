'use client'

import React from 'react';
import style from './homebanner.module.css';
import { useWebsiteContent } from '@/app/context/WbContent';
import ViewNextSectionButton from '../SectionCommonButton/ViewNextSectionButton';
import WindowLoader from '../WindowLoader/WindowLoader';

export default function HomeBanner({ ViewNextLayout }) {
    const { websiteData, loading } = useWebsiteContent();
    const GetHeroContent = websiteData?.homeBanner?.heroMainTitle || {};

    // Highlight logic for subtitle
    const formattedSubtitle = GetHeroContent?.subtitle?.replace(
        /#(.*?)#/g,
        `<span class="${style.highlightmesg}">$1</span>`
    );

    // Greet logic with emoji image
    const FormatHelloGreet = GetHeroContent?.greateTitle?.replace(
        /#(.*?)#/g,
        `<img class="${style.greetIcon}" src="/assets/gif/hello-gif.gif" alt="$1"/>`
    );

    return (
        <section className={style.herowrapper}>
            {loading ? (
                <div className="row align-items-center"><WindowLoader /></div>
            ) : (
                <div className={style.heroimage}>
                    <div className={style.herocontent}>
                        <div className="container position-relative">
                            <div className="row align-items-center">
                                {/* Left Column */}
                                <div className="col-12 text-center text-md-start col-md-6">
                                    <div className={`${style.Hometextwrapper} section-title`}>
                                        <p
                                            className={style.greetMesg}
                                            dangerouslySetInnerHTML={{ __html: FormatHelloGreet || "👋" }}
                                        ></p>

                                        <h1 className={`${style.maincontent} mb-3 mb-lg-4`}>
                                            {GetHeroContent?.firstName} {GetHeroContent?.middleName}{' '}
                                            <span>{GetHeroContent?.lastName},</span>
                                        </h1>

                                        <p
                                            dangerouslySetInnerHTML={{ __html: formattedSubtitle }}
                                        ></p>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="col-12 col-md-6 text-center text-md-end">
                                    <div className={style.ImageWrapper}>
                                        <div className={style.ImageInner}>
                                            <img
                                                src="/assets/images/nikhils-img.jpeg"
                                                className="img-fluid"
                                                alt="Nikhil Lodhi"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ViewNextSectionButton
                        ViewNextLayout={ViewNextLayout}
                        PageTitle={"HomeLayout"}
                        ButtonText={"Start Slide"}
                    />
                </div>
            )}
        </section>
    );
}
