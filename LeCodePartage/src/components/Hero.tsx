import { ReactElement } from "react";

const Hero: React.FC<{ image?: string; reactElement: ReactElement }> = ({
  image,
  reactElement,
}) => {
  return (
    <>
      <div
        className={`bg-dark-blue lg:rounded-br-full relative flex flex-row ${
          image ? "justify-between" : "justify-center"
        } px-8 lg:px-page items-center py-small`}
      >
        {reactElement}

        {image ? (
          <img
            src={`${window.location.origin}/images/${image}`}
            className="hidden md:block md:pr-16"
            alt="Illustration"
          />
        ) : null}
        <img
          src={`${window.location.origin}/images/banner.svg`}
          className={`${image ? "top-2/4" : ""} absolute -z-50 right-1/4`}
          alt="Illustration"
        />
      </div>
    </>
  );
};

export default Hero;
