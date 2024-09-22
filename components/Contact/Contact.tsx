import React from "react";
import PopupComponent from "../PopupComponent/PopupComponent";

const contact = () => {
  return (
    <div id="contact" className="bg-geo-dark-2 w-full">
      <section className="w-full flex items-center justify-center bg-geo-dark-2 px-6">
        <div className="w-full max-w-2xl lg:max-w-5xl flex flex-col lg:flex-row py-20 md:py-28 gap-8 justify-center">
          <h1 className="w-full text-white text-4xl leading-[44px] md:text-5xl md:leading-[60px] font-medium text-center lg:text-left">
            <span className="text-geo-green-lg">Contact</span> our sales team today
          </h1>
          <div className="w-full flex flex-col justify-center items-center lg:items-start">
            <p className="text-slate-400 text-center sm:text-left">Learn how our geospatial analytics can benefit your organization.</p>
            <div className="w-full sm:w-min flex flex-col sm:flex-row gap-4 mt-6">
              <div className="w-full sm:w-min flex flex-col sm:flex-row gap-4 mt-6">
                <PopupComponent />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;
