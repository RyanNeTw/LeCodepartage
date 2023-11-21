import { ReactElement } from "react";

const Hero: React.FC<{ image?: string; reactElement: ReactElement }> = ({
  image,
  reactElement,
}) => {
  return (
    <>
      <div
        className={`bg-dark-blue rounded-br-full relative flex flex-row ${
          image ? "justify-between" : "justify-center"
        } px-page items-center py-small`}
      >
        {reactElement}

        {image ? <img src={`./images/${image}`} /> : null}
        <img
          src="./images/banner.png"
          className="absolute -z-50 top-2/4 right-1/4"
        />
      </div>
    </>
  );
};

export default Hero;
