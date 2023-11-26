import { FC } from "react";

type EventType = {
  date: string;
  text: string;
};

const HeroWithList: FC<{ events?: EventType[] }> = ({ events }) => {
  const array: string[] = ["e", "e", "e", "e"];

  return (
    <>
      <section className="bg-dark-blue px-page flex flex-row justify-between py-12 relative">
        <img
          src="./images/simpleLogo.png"
          alt="LeCodePartagé's logo"
          className="absolute -top-12 left-1/2"
        />
        <div className="flex flex-col justify-between w-full">
          <h2 className="text-white-color text-2xl">
            Les prochains événements :
          </h2>
          <ul className="flex flex-wrap gap-4">
            {events
              ? events?.map((event, index) => <li key={index}></li>)
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
        <img src="./images/calender.png" alt="calender" />
      </section>
    </>
  );
};

export default HeroWithList;
