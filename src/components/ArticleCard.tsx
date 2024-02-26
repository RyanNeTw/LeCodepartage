import { FC, useEffect, useState } from "react";
import { getMember } from "../functions/getData";
import { ArticlesType, MembersType } from "../types";
import AuthorCard from "./AuthorCard";
import Title from "./Title";
import { Link } from "react-router-dom";
import getDate from "../functions/getDate";

const ArticleCard: FC<{
  articles: ArticlesType[] | null;
  isBig?: boolean;
  title?: string;
  twice?: boolean;
  isArticle?: boolean;
}> = ({ articles, isBig = false, title, twice = false, isArticle = false }) => {
  const elements: ArticlesType[] | undefined = isBig
    ? articles?.slice(articles?.length - 1)
    : twice
      ? articles?.slice(articles?.length - 2)
      : articles?.slice(0, articles?.length - 1).reverse();

  return (
    <>
      {title ? <Title title={title} /> : null}
      <ul
        className="flex flex-wrap w-full gap-y-12 justify-between pb-12 pt-8"
        id={`${isBig ? "" : "firstArticle"}`}
      >
        {elements?.map((article, index) => (
          <Link
            to={`/article/${article?.attributes?.slug}`}
            state={article}
            key={index}
            className={`${isBig ? "w-full" : "w-5/12 min-w-[80vw] sm:min-w-[20rem] xsm:max-w-[40vw]"}`}
          >
            <Article article={article} isBig={isBig} isArticle={isArticle} />
          </Link>
        ))}
        {isBig && elements?.length === 0 ? (
          <ArticleCardSkelton isBig={true} />
        ) : twice && elements?.length === 0 ? (
          <>
            <ArticleCardSkelton />
            <ArticleCardSkelton />
          </>
        ) : elements?.length === 0 ? (
          <>
            <ArticleCardSkelton /> <ArticleCardSkelton /> <ArticleCardSkelton />
            <ArticleCardSkelton /> <ArticleCardSkelton /> <ArticleCardSkelton />
          </>
        ) : null}
      </ul>
    </>
  );
};

const Article: FC<{
  article: ArticlesType;
  isBig: boolean;
  isArticle: boolean;
}> = ({ article, isBig, isArticle }) => {
  const imageUrl = `${article?.attributes?.image?.data?.attributes?.url}`;
  const [member, setMember] = useState<MembersType | null>(null);

  useEffect(() => {
    getMember(article?.attributes?.member?.data?.id).then((data) =>
      setMember(data.data),
    );
  }, [article]);

  return (
    <>
      <div
        className={`flex bg-center cursor-pointer rounded-lg shadow hover:shadow-md ${
          isBig ? "flex-col sm:flex-row" : " flex-col"
        }`}
      >
        <div
          className={`w-full bg-no-repeat bg-cover bg-center relative group overflow-hidden ${
            isBig ? "rounded-l-lg h-72" : "h-52 rounded-t-lg"
          }`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute w-full h-full bg-black-color opacity-40 hidden group-hover:block transition"></div>
          <h4 className="text-white-color absolute text-2xl font-bold hidden group-hover:block transition top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {article?.attributes?.name}
          </h4>
        </div>
        <div
          className={`px-small pb-small flex flex-col gap-4 w-full p-8 ${
            isBig ? "rounded-r-lg" : "rounded-b-lg"
          }`}
        >
          <h2 className="font-bold text-2xl">{article?.attributes?.title}</h2>
          <p className="text-wrap whitespace-break-spaces break-words">
            {isArticle
              ? article?.attributes?.description
              : article?.attributes?.description?.substring(0, 150) + "..."}
          </p>
          <div className="flex flex-row items-center xsm:items-end justify-between w-full">
            {!isArticle ? (
              <AuthorCard author={member} isBackground={false} />
            ) : null}
            <div className="flex flex-col">
              <h4 className="">Le {getDate(article?.attributes?.date)}</h4>
              {isArticle ? (
                <h4 className="">
                  Temps de lecture: {article?.attributes?.readTime} minutes
                </h4>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ArticleCardSkelton: FC<{ isBig?: boolean }> = ({ isBig = false }) => {
  return (
    <>
      <div
        className={`flex flex-col ${
          isBig
            ? "w-full"
            : "w-5/12 min-w-[80vw] sm:min-w-[20rem] xsm:max-w-[40vw]"
        } gap-4 animate-pulse`}
      >
        <div
          className={`w-full bg-grey rounded-lg ${isBig ? "" : "h-40"}`}
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
