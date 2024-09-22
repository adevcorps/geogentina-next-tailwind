import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Platform from "../components/Platform/Platform";
import Features from "../components/Features/Features";
import Testimonial from "../components/Testimonial/Testimonial";
import Faq from "../components/Faq/Faq";
import Contact from "../components/Contact/Contact";
// import Slider from "../components/Slider/Slider";
// import { SliderData } from "../components/Slider/SliderData";
// import Instagram from "../components/InstagramGallery/Instagram";
// import Portfolio from "../components/Portfolio/Portfolio";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Geogentia Geospatial Intelligence Software</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Transforming geospatial data into actionable insights." message="Our cutting-edge geospatial analytics solutions empower the public sector, law enforcement, and investigative journalists to make informed decisions and uncover hidden patterns." />
      <Platform />
      <Features />
      <Testimonial />
      <Faq />
      <Contact />
      {/* <Slider slides={SliderData} /> */}
      {/* <Instagram />
      <Portfolio />
      // <Contact /> */}
    </>
  );
};

export default Home;
