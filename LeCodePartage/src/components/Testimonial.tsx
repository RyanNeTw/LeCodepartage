import { FC } from "react";
import Title from "./Title";

const Testimonial: FC<{
  direction?: boolean;
  title: string;
  text: string;
  image?: string;
}> = ({ direction = false, title, text, image }) => {
  return (
    <>
      <section
        className={`flex ${
          direction ? "flex-row" : "flex-row-reverse"
        } justify-between gap-12`}
      >
        <div className="flex flex-col gap-2 w-1/2 py-small">
          <Title title={title} />
          <p className="text-black-color">{text} </p>
        </div>
        {image ? (
          <>
            <div className="relative">
              <img src={`./images/${image}`} className="rounded-3xl" />
              <img
                src="./images/simpleLogo.png"
                alt="LeCodePartagé's logo"
                className={`absolute top-0 z-50 ${
                  direction ? "left-0" : "right-0"
                }`}
              />
            </div>
          </>
        ) : (
          <>
            <div className="w-1/2 rounded-lg animate-pulse bg-grey"></div>
          </>
        )}
      </section>
    </>
  );
};

export default Testimonial;
