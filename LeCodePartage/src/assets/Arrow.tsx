import { FC } from "react";

const Arrow: FC<{ size: string; color?: string }> = ({
  size,
  color = "fill-white-color",
}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className={`${size} ${color} `}
      >
        <g id="_4-Arrow_Left" data-name="4-Arrow Left">
          <path d="M32,15H3.41l8.29-8.29L10.29,5.29l-10,10a1,1,0,0,0,0,1.41l10,10,1.41-1.41L3.41,17H32Z" />
        </g>
      </svg>
    </>
  );
};

export default Arrow;
