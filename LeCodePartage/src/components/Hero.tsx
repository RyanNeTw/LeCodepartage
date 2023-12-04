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

        {image ? (
          <img
            src={`${window.location.origin}/images/${image}`}
            className="pr-16"
          />
        ) : null}
        <img
          src={`${window.location.origin}/images/banner.svg`}
          className={`${image ? "top-2/4" : ""} absolute -z-50 right-1/4`}
        />
      </div>
    </>
  );
};

export default Hero;
