// pages/who-are-we.js

import Image from "next/image";

const WhoAreWe = () => {
  return (
    <section className="bg-white dark:bg-inherit">
      <div className="flex flex-col md:flex-row md:gap-12 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="w-full lg:w-2/3 mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Who Are We?</h2>
          <p className="text-gray-500 text-justify sm:text-lg dark:text-gray-400">
            We are a collective of seasoned tech enthusiasts, each with years of experience navigating the online and offline freelancing realms, spanning from platforms like Fiverr to Upwork. We hail from the vibrant lands of Bangladesh and India, unified by our fervent passion for technology and innovation.
          </p>
          <p className="mt-4 text-gray-500 text-justify sm:text-lg dark:text-gray-400">
            Together, we are on a quest to launch a revolutionary startup that aims to redefine the landscape of service-based enterprises. With a shared vision and a wealth of expertise, we aspire to create an unparalleled platform that unlocks long-term value, drives economic growth, and fosters innovation in every corner of the globe.
          </p>
        </div>
        <div className="w-full lg:w-1/3">
            <Image src="/content-gallery-2.png" className="h-auto mx-auto w-11/12 md:w-3/4 lg:w-full object-cover transition-all duration-300 rounded-lg cursor-pointer hover:scale-105 filter grayscale hover:grayscale-0" width={500} height={300} alt="Bangladesh Aesthetic"/>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
