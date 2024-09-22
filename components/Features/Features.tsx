import React from "react";
import imgAnalyze from '../../assets/advanced-analytics.jpg';
import imgCta from '../../assets/cta.png';
import imgDataVisual from '../../assets/data-visualization.jpg';
import imgGraph from '../../assets/graph.jpg';
import imgHistory from '../../assets/history.jpg';
import dynamic from "next/dynamic";
const PopupComponent = dynamic(() => import("../PopupComponent/PopupComponent"), {
  ssr: false
})


const Features = ({ }) => {
    return (
        <div id="features">
            <section className="w-full flex flex-col items-center justify-center px-6 bg-geo-dark">
                <div className="mx-auto max-w-xl text-center">
                    <p className="text-lg leading-8 tracking-tight text-geo-blue">Features</p>
                    <h2 className="mt-2 text-3xl leading-[40px] md:text-4xl md:leading-[44px] text-white">See some of the powerful included features</h2>
                </div>
                <div className="w-full max-w-2xl lg:max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 md:mt-12 mb-12 md:mb-24">
                    <div className="relative grid-span-1 gap-4 aspect-[3/4] sm:aspect-[3/2] lg:aspect-square xl:aspect-[5/4] rounded-2xl flex items-center justify-center overflow-hidden shadow-lg ">
                        <div className="absolute w-full h-full opacity-50">
                            <img alt="" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="w-full h-full object-cover" src={imgAnalyze.src} style={{color: `transparent`, visibility: `visible`}} data-xblocker="passed" />
                        </div>
                        <h3 className="relative z-10 w-full items-center text-3xl leading-[38px] md:text-4xl md:leading-[44px] p-8 md:p-16 text-white font-semibold">Unlock valuable insights with our cutting-edge
                            <span className="text-geo-red">geospatial advanced analytics</span> platform. Empower your investigations today.
                        </h3>
                    </div>
                    <div className="relative grid-span-1 gap-4 aspect-[3/4] sm:aspect-[3/2] lg:aspect-square xl:aspect-[5/4] rounded-2xl flex items-end justify-center overflow-hidden bg-blue-500/10 shadow-lg">
                        <div className="w-full h-full">
                            <img alt="" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="absolute w-full h-full object-cover" src={imgHistory.src} style={{color: `transparent`, visibility: `visible`}} data-xblocker="passed" />
                        </div>
                        <div className="absolute z-10 p-8 md:p-16">
                            <h3 className="text-white text-2xl leading-[32px]">Track Historical Data</h3>
                            <p className="text-slate-400 font-light leading-[28px] mt-4">With our geospatial analytics solution, you can track and analyze historical data to identify trends, patterns, and anomalies. Gain valuable insights from past data to inform your present and future strategies.
                            </p>
                        </div>
                    </div>
                    <div className="relative grid-span-1 gap-4 aspect-[3/4] sm:aspect-[3/2] lg:aspect-square xl:aspect-[5/4] rounded-2xl flex items-end justify-center overflow-hidden bg-white/5 shadow-lg">
                        <div className="w-full h-full opacity-50 sm:opacity-100">
                            <img alt="" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="absolute w-full h-full object-cover" src={imgGraph.src} style={{color: `transparent`, visibility: `visible`}} data-xblocker="passed" />
                        </div>
                        <div className="absolute z-10 p-8 md:p-16">
                            <h3 className="text-white text-2xl leading-[32px]">Custom Report Generation</h3>
                            <p className="text-slate-400 font-light leading-[28px] mt-4">Generate custom reports tailored to your specific needs. Our platform offers flexible reporting options, allowing you to visualize and present data in a way that is meaningful and actionable for your organization.</p>
                        </div>
                    </div>
                    <div className="relative grid-span-1 gap-4 aspect-[3/4] sm:aspect-[3/2] lg:aspect-square xl:aspect-[5/4] rounded-2xl flex items-center justify-center overflow-hidden shadow-lg">
                        <div className="w-full h-full opacity-30">
                            <img alt="" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className="absolute w-full h-full object-cover" src={imgDataVisual.src} style={{color: `transparent`, visibility: `visible`}} data-xblocker="passed" />
                        </div>
                        <h3 className="absolute z-10 w-full text-3xl leading-[38px] md:text-4xl md:leading-[44px] p-8 md:p-16 text-white font-semibold">Complex <span className="text-geo-blue">data visualization</span> sets with ease and gain a deeper understanding of your investigations.
                        </h3>
                    </div>
                    <div className="col-span-1 lg:col-span-2 shadow-lg">
                        <div className="relative w-full flex aspect-[3/4] sm:aspect-[3/2] lg:aspect-auto rounded-3xl overflow-hidden bg-slate-800/30 col-span-2 gap-0 lg:gap-8">
                            <img alt="" loading="lazy" width="750" height="1000" decoding="async" data-nimg="1" className="absolute w-full lg:w-3/4 h-full opacity-20 lg:opacity-100 object-cover" src={imgCta.src} style={{color: `transparent`, visibility: `visible`}} data-xblocker="passed" />
                            <div className="w-0 lg:w-1/2" >
                            </div>
                                <div className="relative z-20 w-full lg:w-1/2 justify-center flex flex-col gap-6 p-8 md:p-16">
                                    <h2 className="text-4xl leading-[44px] text-white">Unlock the Power of Geospatial Analytics</h2>
                                    <p className="text-slate-400 leading-[28px] font-light">Discover actionable insights and make informed decisions with our geospatial analytics platform.</p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="w-full sm:w-min flex flex-col sm:flex-row gap-4 mt-6">
                                            <PopupComponent />
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features;