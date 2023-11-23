import { FC } from "react";
import AuthorCard from "./AuthorCard";

const ArticleCard: FC<{
  articles?: string[];
  isBig?: boolean;
  title: string;
}> = ({ articles, isBig = false, title }) => {
  const elements = articles ?? [1, 2, 3, 4, 5, 6];
  return (
    <>
      <h2 className="text-light-red text-2xl pb-4">{title}</h2>
      <ul className="flex flex-wrap w-full gap-8 justify-between pb-12">
        {elements?.map((element, index) => (
          <li key={index} className={isBig ? "w-full" : "w-5/12"}>
            <ArticleCardSkelton isBig={isBig} />
          </li>
        ))}
      </ul>
    </>
  );
};

const ArticleCardSkelton: FC<{ isBig: boolean }> = ({ isBig = false }) => {
  return (
    <>
      <div
        className={`flex ${
          isBig ? "flex-row" : " flex-col"
        } gap-4 animate-pulse`}
      >
        <div
          className={`w-full bg-grey rounded-lg ${isBig ? "" : "h-32"}`}
        ></div>
        <div className="px-small flex flex-col gap-2 w-full">
          <div className="rounded-full w-full bg-grey h-4 "></div>
          <div className="rounded-full w-1/4 bg-grey h-4 "></div>
          <div className="rounded-full w-full bg-grey h-2 "></div>
          <div className="rounded-full w-3/4 bg-grey h-2 "></div>
          <div className="flex flex-row justify-between w-full items-center">
            <AuthorCard />
            <div className="rounded-full w-2/5 h-2 bg-grey"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
