import { FC } from "react";
import { getMouth } from "../functions/getDate";
import { EventsType } from "../types";

const HeroWithList: FC<{ events: EventsType[] }> = ({ events }) => {
  if (events?.length === 0) {
    return null;
  }

  return (
    <>
      <section className="bg-dark-blue px-8 lg:px-page flex flex-row justify-between py-12 relative">
        <img
          src="./images/simpleLogo.png"
          alt="LeCodePartagé's logo"
          className="absolute -top-[3.5rem] md:-top-12 left-[40%] md:left-1/2"
        />
        <div className="flex flex-col gap-12 justify-between w-full">
          <h2 className="text-white-color text-2xl">
            Les prochains événements :
          </h2>
          <ul className="flex flex-wrap gap-6 justify-center items-center md:justify-normal flex-col sm:flex-row">
            {events?.map((event, index) => (
              <a
                key={index}
                href={event?.attributes?.eventLink}
                target="_blank"
                className="bg-dark-red rounded-lg w-full md:w-5/12 px-small py-midSmall flex flex-row gap-4 items-center hover:scale-105 transition"
              >
                <div className="bg-dark-blue px-small py-midSmall rounded-lg flex flex-col items-center">
                  <h4 className="font-bold text-white-color text-xl">
                    {event?.attributes?.date?.split("-")[2]}
                  </h4>
                  <h4 className="text-white-color text-sm">
                    {getMouth(event?.attributes?.date?.split("-")[1])
                      .toUpperCase()
                      .substring(0, 3)}
                  </h4>
                </div>
                <div className="text-white-color font-bold">
                  {event?.attributes?.eventName}
                </div>
              </a>
            ))}
          </ul>
        </div>
        <img
          src="./images/calender.svg"
          alt="calender"
          className="hidden md:block"
        />
      </section>
    </>
  );
};

export default HeroWithList;
