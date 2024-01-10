import { FC } from "react";

const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <div className="flex flex-row gap-2">
        <div className="w-1 rounded-lg bg-light-blue"></div>
        <h2 className="text-light-red text-2xl">{title}</h2>
      </div>
    </>
  );
};

export default Title;
