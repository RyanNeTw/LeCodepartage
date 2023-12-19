import { FC } from "react";
import { getMouth } from "../functions/getDate";
import { EventsType } from "../types";

const HeroWithList: FC<{ events: EventsType[] }> = ({ events }) => {
  const array: string[] = ["e", "e", "e", "e"];

  console.log({ events });
  return (
    <>
      <section className="bg-dark-blue px-page flex flex-row justify-between py-12 relative">
        <img
          src="./images/simpleLogo.png"
          alt="LeCodePartagé's logo"
          className="absolute -top-12 left-1/2"
        />
        <div className="flex flex-col gap-12 justify-between w-full">
          <h2 className="text-white-color text-2xl">
            Les prochains événements :
          </h2>
          <ul className="flex flex-wrap gap-4">
            {events?.length > 0
              ? events?.map((event, index) => (
                  <a
                    key={index}
                    href={event?.attributes?.eventLink}
                    target="_blank"
                    className="bg-dark-red rounded-lg w-5/12 px-small py-midSmall flex flex-row gap-4 items-center"
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
                ))
              : array.map((e, index) => (
                  <li
                    key={index}
                    className="bg-dark-red rounded-lg w-5/12 px-small py-midSmall flex flex-row gap-4 items-center"
                  >
                    <div className="h-16 w-16 bg-dark-blue p-small rounded-lg">
                      <div className="h-2 rounded-lg w-full bg-grey animate-pulse"></div>
                    </div>
                    <div className="flex flex-col gap-2 w-2/3">
                      <div className="h-2 w-full bg-grey rounded-3xl animate-pulse"></div>
                      <div className="h-2 w-full bg-grey rounded-3xl animate-pulse"></div>
                      <div className="h-2 w-1/4 bg-grey rounded-3xl animate-pulse"></div>
                    </div>
                  </li>
                ))}
          </ul>
        </div>
        <img src="./images/calender.svg" alt="calender" />
      </section>
    </>
  );
};

export default HeroWithList;
