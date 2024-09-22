import React, {useState, useEffect} from 'react';
import { PopupButton } from "react-calendly";

const PopupComponent = ({ }) => {
  const [rootElement, setRootElement] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setRootElement(document.getElementById("__next")!);
    }
  }, []);
  return (

    <PopupButton
        url="https://calendly.com/w-mkl-corp/geogentia-discovery-call"
        rootElement={rootElement}
        text="Schedule a demo"
        className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-geo-gree text-secondary-foreground shadow-sm hover:bg-geo-gree/80 h-10 px-6 py-3'
    />
  );
};

export default PopupComponent;