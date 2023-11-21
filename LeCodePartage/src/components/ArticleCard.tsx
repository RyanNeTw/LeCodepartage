import { FC } from "react";

const ArticleCard: FC<{ articles?: string[]; isBig?: boolean }> = ({
  articles,
  isBig = false,
}) => {
  const elements = articles ?? [1, 2, 3, 4, 5, 6];

  console.log(isBig, articles?.length);

  return (
    <>
      <ul className="flex flex-wrap w-full gap-y-4 justify-between">
        {elements?.map((elements, index) => (
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
        className={`w-full flex ${
          isBig ? "flex-row" : " flex-col"
        } gap-4 animate-pulse`}
      >
        <div className="w-full bg-grey h-32 rounded-lg"></div>
        <div className="px-small flex flex-col gap-2 w-full">
          <div className="rounded-full w-full bg-grey h-4 "></div>
          <div className="rounded-full w-1/4 bg-grey h-4 "></div>
          <div className="rounded-full w-full bg-grey h-2 "></div>
          <div className="rounded-full w-3/4 bg-grey h-2 "></div>
          <div className="flex flex-row justify-between w-full items-center">
            <div className="flex flex-row gap-4 items-center w-full">
              <div className="rounded-full w-12 h-12 bg-grey"></div>
              <div className="w-full flex flex-col gap-2">
                <div className="rounded-full w-1/5 h-2 bg-grey"></div>
                <div className="rounded-full w-1/5 h-2 bg-grey"></div>
              </div>
            </div>
            <div className="rounded-full w-2/5 h-2 bg-grey"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
