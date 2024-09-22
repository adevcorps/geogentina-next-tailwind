import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavigationBar/NavBar";
import FooterBar from "../components/FooterBar/FooterBar";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://assets.calendly.com/assets/external/widget.js';
  //   script.async = true;
  //   document.body.appendChild(script);
  // }, []);
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <FooterBar />
    </>
  );
}

export default MyApp;
