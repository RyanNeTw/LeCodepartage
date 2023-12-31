import { FC } from "react";

const Macbook: FC<{ size: string; color?: string }> = ({
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
        <path d="M4 5V16H20V5H4ZM2 4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V18H2V4.00748ZM1 19H23V21H1V19Z"></path>
      </svg>
    </>
  );
};

export default Macbook;
