import React from "react";
import Link from "next/link";

const Testimonial = ({ }) => {
    return (
        <div id="testimonials" className="bg-geo-dark w-full">
            <section className="w-full flex items-center justify-center bg-geo-dark-2">
                <div className="relative isolate py-12 md:py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-xl text-center">
                            <p className="text-lg leading-8 text-geo-blue">Testimonials</p>
                            <h2 className="mt-2 text-white text-3xl leading-[40px] md:text-4xl md:leading-[44px]">Empowering Insights: Real Stories from Our Clients</h2>
                        </div>
                        <div className="mx-auto mt-8 md:mt-12 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-flow-col lg:grid-cols-4">
                            <figure className="rounded-2xl bg-geo-dark shadow-lg ring-1 ring-slate-800/50 sm:col-span-2 lg:col-start-2 lg:row-end-2">
                                <blockquote className="p-6 text-lg leading-7 text-slate-400 sm:p-12 sm:text-xl sm:leading-8">
                                    <p>“We've integrated Geogentia Lens into every aspect of our cyber investigations. Its capabilities to swiftly bridge the gap between cybercrime and the physical world are unparalleled, whether dealing with online death threats, hacking, or even counterfeit investigations.”</p>
                                </blockquote>
                                <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:px-12 sm:py-8   sm:flex-nowrap"><div className="flex-auto">
                                    <div className="font-semibold text-white">Director of Cybersecurity</div>
                                    <div className="text-slate-500">Fortune 500 Company</div>
                                </div>
                                </figcaption>
                            </figure>
                            <div className="space-y-8 xl:contents xl:space-y-0">
                                <div className="xl:row-span-2 space-y-8">
                                    <figure className="rounded-2xl bg-geo-dark p-6 shadow-lg ring-1 ring-slate-800/50">
                                        <blockquote className="text-slate-400">
                                            <p>“Its capabilities to swiftly bridge the gap between cybercrime and the physical world are unparalleled, whether dealing with online death threats, hacking, or even counterfeit investigations.”</p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center gap-x-4">
                                            <div>
                                                <div className="font-semibold text-white">Chief of Police</div>
                                                <div className="text-slate-500">US Law Enforcement Agency</div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="space-y-8 xl:contents xl:space-y-0">
                                <div className="xl:row-span-2 space-y-8">
                                    <figure className="rounded-2xl bg-geo-dark p-6 shadow-lg ring-1 ring-slate-800/50">
                                        <blockquote className="text-slate-400">
                                            <p>“Lens is the first tool we use to understand the physical world around a crime scene. It's a game-changer for our investigations.”</p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center gap-x-4">
                                            <div>
                                                <div className="font-semibold text-white">Investigator</div>
                                                <div className="text-slate-500">Law Enforcement Agency</div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial;