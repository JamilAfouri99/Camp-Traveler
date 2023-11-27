import React from "react";
import Image from "next/image";
import Button from "./button";

// images
import Camp from "@/public/svg/camp.svg";
import Star from "@/public/svg/star.svg";
import Play from "@/public/svg/play.svg";
import Close from "@/public/svg/close.svg";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
      <div className="hero-map" /> {/* BACKGROUND */}

      <div className="relative flex flex-1 flex-col xl:w-1/2">
        <Image
          src={Camp}
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px] lg:top-[-40px]"
        />
        <h1 className="bold-40 lg:bold-60">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[560px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just on app
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex item-center gep-2">
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <Image key={i} src={Star} alt="star" width={24} height={24} />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button title="Download App" type="button" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            icon={Play}
            variant="btn_white_text"
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <p className="regular-14 text-gray-20">Location</p>
              <Image src={Close} alt="close" width={24} height={24}></Image>
            </div>
            <p className="bold-16 text-white">Aguas Calientes</p>

            <div className="flex flex-wrap justify-between pt-4">
              <p className="regular-14 text-gray-20">Distance</p>
              <p className="regular-14 text-gray-20">Elevation</p>
            </div>

            <div className="flex flex-wrap justify-between">
              <p className="bold-16 text-white">173.28 mi</p>
              <p className="bold-16 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
