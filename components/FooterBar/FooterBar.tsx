import React, { useState, useEffect } from "react";
import logSvg from '../../assets/geogentia-logo.svg';
import Link from "next/link";

const FooterBar = ({ }) => {
    return (
        <section className="w-full flex bg-geo-dark text-slate-500 text-w items-center justify-center px-6">
            <div className="hidden md:flex flex-col w-full max-w-[1400px]  items-center justify-between py-8">
                <div className="w-full flex justify-between">
                    <img alt="Geogentia" loading="lazy" width="130" height="65" decoding="async" data-nimg="1" className="h-6" src={logSvg.src} style={{color: `transparent`}} />
                        <ul className="space-x-10 text-sm ">
                            <li className="inline-block">
                                <a className="hover:text-geo-green transition ease-in-out duration-100" href="../#platform">Platform</a>
                            </li>
                            <li className="inline-block">
                                <a className="hover:text-geo-green transition ease-in-out duration-100" href="../#features">Features</a>
                            </li>
                            <li className="inline-block">
                                <a className="hover:text-geo-green transition ease-in-out duration-100" href="../#testimonials">Testimonials</a>
                            </li>
                            <li className="inline-block">
                                <a className="hover:text-geo-green transition ease-in-out duration-100" href="../#contact">Contact</a>
                            </li>
                        </ul>
                </div>
                <div className="w-full h-px bg-slate-500/20 mt-4"></div>
                <div className="w-full flex justify-between mt-4 text-sm">
                    <p>© 2023 Geogentia. All rights reserved.</p>
                    <ul className="space-x-10 inline-block">
                        <li>
                            <Link className="hover:text-geo-green" href="/privacy">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex md:hidden flex-col w-full max-w-[1400px]  items-center justify-between py-8 gap-8">
                <img alt="Geogentia" loading="lazy" width="130" height="65" decoding="async" data-nimg="1" className="h-6 mx-auto" src={logSvg.src} style={{color: `transparent`}} />
                    <div className="w-full flex">
                        <div className="w-full flex justify-center">
                            <ul className="min-w-[160px] flex flex-col gap-6 text-sm px-3">
                                <li>
                                    <a className="hover:text-geo-green transition ease-in-out duration-100" href="../#platform">Platform</a>
                                </li>
                                <li>
                                    <a className="hover:text-geo-green transition ease-in-out duration-100" href="../#features">Features</a>
                                </li>
                                <li>
                                    <a className="hover:text-geo-green transition ease-in-out duration-100" href="../#testimonials">Testimonials</a>
                                </li>
                                <li>
                                    <a className="hover:text-geo-green transition ease-in-out duration-100" href="../#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full  flex justify-center">
                            <ul className="min-w-[160px] flex flex-col gap-6 text-sm px-3">
                                <li>
                                    <Link className="hover:text-geo-green" href="/privacy">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-sm">© 2023 Geogentia.&nbsp; All rights reserved.</p>
            </div>
        </section>
    )
}

export default FooterBar;