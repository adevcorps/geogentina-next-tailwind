import React from "react";
import Link from "next/link";

interface Props {
  heading: string;
  message: string;
}

const Hero = ({ heading, message }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img opacity-100 lg:opacity-100" id="hero">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/5 z-[2]" />
      <div className="relative z-10 w-full max-w-[1240px] h-[560px] md:h-[760px] flex flex-col items-start justify-center mt-[72px] py-12 px-4">
        <div className="w-full max-w-2xl mx-auto lg:mx-0 space-y-6 px-0 sm:px-8 md:px-16 lg:px-0">
          <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-[60px] text-white">{heading}</h1>
          <p className="text-slate-400 leading-[28px] font-light">{message}</p>
          <Link href="/#portfolio" passHref>
            <button className="px-6 py-2 font-medium text-sm rounded-md bg-geo-gree">Schedule a demo</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
