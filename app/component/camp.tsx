import Image from "next/image";
import React from "react";
import { PEOPLE_URL } from "../utils/constants";

// image
import FoldedMap from "@/public/svg/folded-map.svg";
import Quote from "@/public/svg/quote.svg";

type CampItemProps = {
  background: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
};
const CampItem = ({
  background,
  title,
  subtitle,
  peopleJoined: peopleJoined,
}: CampItemProps) => {
  return (
    <div
      className={`flex flex-col min-w-[1100px] p-6 bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl ${background}`}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-start gap-4">
          <div className="flex flex-start bg-green-50 rounded-full p-4">
            <Image src={FoldedMap} alt="Folded Map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flex flex-row justify-start gap-4">
          <span className="flex -space-x-4">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="text-white bold-16 md:bold-20">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex justify-start gap-8 overflow-x-auto w-full h-[340px] lg:h-[400px] xl:h-[640px]">
        <CampItem
          background="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampItem
          background="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="100+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5x xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That is why we are here for those of you who want to start an
            adventure.
          </p>
          <Image
            src={Quote}
            alt="Quote"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
