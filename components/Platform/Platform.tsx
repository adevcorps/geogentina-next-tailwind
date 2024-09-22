import React from "react";
import Link from "next/link";
import imgNewYork from '../../assets/new-york.png';
import imgInvest from '../../assets/investigation.svg';
import imgPublic from '../../assets/public.svg';
import imgCorporate from '../../assets/corporate.svg';

const Platform = ({ }) => {
    return (
        <div id="platform">
            <section className="w-full flex items-center justify-center bg-geo-dark px-6">
                <div className="w-full max-w-2xl lg:max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-8 mt-12 mb-12 md:mb-24">
                    <img alt="" loading="lazy" width="750" height="500" decoding="async" data-nimg="1" className="grid-span-1 w-full h-full aspect-[3/2] sm:aspect-[2/1] lg:aspect-auto object-cover rounded-3xl overflow-hidden bg-slate-800/20" src={imgNewYork.src} style={{color: `transparent`, visibility: `visible`}} data-xblocker="passed" />
                        <div className="grid-span-1 mx-0 lg:mx-16 my-6 xl:my-12 px-0 sm:px-8 md:px-16 lg:px-0">
                            <p className="text-lg leading-8 tracking-tight text-geo-blue text-center lg:text-left">About</p>
                            <h2 className="text-white text-3xl leading-[40px] md:text-4xl md:leading-[44px] mt-2 text-center lg:text-left">Discover the Power of Our Geospatial Analytics Platform</h2>
                            <p className="text-slate-400 font-light leading-[28px] mt-8 text-center lg:text-left">Our SaaS subscription service offers advanced geospatial analytics for the public sector, law enforcement, and investigative journalists. With powerful features and benefits, its the ultimate tool for uncovering insights and making data-driven decisions.</p>
                            <ul className="w-full max-w-sm mx-auto sm:max-w-full flex flex-col sm:flex-row gap-8 mt-8 px-8 sm:px-0">
                                <li className="flex flex-col gap-2 items-center">
                                    <img alt="" loading="lazy" width="750" height="500" decoding="async" data-nimg="1" className="w-12 h-12" src={imgInvest.src} style={{color: `transparent`}} />
                                        <h3 className="text-white text-lg text-center md:text-start">Investigations</h3>
                                        <p className="text-slate-400 text-sm font-light text-center">Our team of expert analysts provides personalized insights and solutions to meet your unique needs.</p>
                                </li>
                                <li className="flex flex-col gap-2 items-center">
                                    <img alt="" loading="lazy" width="750" height="500" decoding="async" data-nimg="1" className="w-12 h-12" src={imgPublic.src} style={{color: `transparent`}} />
                                        <h3 className="text-white text-lg text-center md:text-start">Public Sector</h3>
                                        <p className="text-slate-400 text-sm font-light text-center">We deliver actionable intelligence that empowers you to make informed decisions.</p>
                                </li>
                                <li className="flex flex-col gap-2 items-center">
                                    <img alt="" loading="lazy" width="750" height="500" decoding="async" data-nimg="1" className="w-12 h-12" src={imgCorporate.src} style={{color: `transparent`}} />
                                        <h3 className="text-white text-lg text-center md:text-start">Corporate</h3>
                                        <p className="text-slate-400 text-sm font-light text-center ">Our advanced analysis techniques keep you ahead of the competition.</p>
                                </li>
                            </ul>
                        </div>
                </div>
            </section>
        </div>
    )
}

export default Platform;