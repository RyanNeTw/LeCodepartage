import { FC } from "react";

const GrowthChart: FC<{ size: string; color?: string }> = ({
  size,
  color = "fill-white-color",
}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`${size} ${color}`}
      >
        <path d="M2 12H4V21H2V12ZM5 14H7V21H5V14ZM16 8H18V21H16V8ZM19 10H21V21H19V10ZM9 2H11V21H9V2ZM12 4H14V21H12V4Z"></path>
      </svg>
    </>
  );
};

export default GrowthChart;
