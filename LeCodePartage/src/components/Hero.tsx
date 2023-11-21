import { ReactElement } from "react";

const Hero: React.FC<{ image: string; reactElement: ReactElement }> = ({
  image,
  reactElement,
}) => {
  return (
    <>
      <div className="bg-dark-blue rounded-br-full relative flex flex-row justify-between px-page items-center">
        {reactElement}

        <img src={`./images/${image}`} />
        <img
          src="./images/banner.png"
          className="absolute -z-50 top-1/3 right-1/4"
        />
      </div>
    </>
  );
};

export default Hero;
