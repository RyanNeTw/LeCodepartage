import { FC, ReactElement } from "react";
import { useLocation } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard";
import Breadcrumb from "../../components/breadCrumb";
import Title from "../../components/Title";
import {
  ArticlesType,
  TypeText,
  Content,
  Chlidren,
  DataAttributes,
} from "../../types";

const ArticlePage = () => {
  const location = useLocation();
  const article = location.state as ArticlesType;
  console.log({ article });

  return (
    <>
      <div className="px-page py-medium flex flex-col gap-12">
        <ArticleCard articles={[article]} isArticle={true} isBig={true} />
        <ul>
          {article?.attributes?.content?.map((content, index) => (
            <li key={index} className="pb-4">
              <ArticleContent content={content} />
            </li>
          ))}
        </ul>
        <ArticleCard
          articles={[]}
          twice={true}
          title={"Au cas où vous l’auriez manqué :"}
        />
      </div>
      <Breadcrumb />
    </>
  );
};

const ArticleContent: FC<{ content: Content }> = ({
  content,
}): ReactElement => {
  return (
    <>
      <div
        className={`${
          content?.children?.some((i) => i.type === TypeText.LINK)
            ? "flex flex-wrap gap-1 "
            : ""
        } ${content?.image ? "flex justify-center" : ""}`}
      >
        {content?.children?.map((item, index) => (
          <div key={index}>
            {guessTextType(
              item.type === TypeText.TEXT ? content.type : item.type,
              item,
              content.image,
            )}
          </div>
        ))}
      </div>
    </>
  );
};

const guessTextType = (
  type: TypeText,
  content: Chlidren,
  image?: DataAttributes,
): ReactElement => {
  const Copy = (link: string) => {
    navigator.clipboard.writeText(link);
  };

  switch (type) {
    case TypeText.HEADING:
      return <Title title={content?.text} />;
    case TypeText.LINK:
      return (
        <a
          href={content?.url}
          className="text-light-blue hover:underline"
          target={"_blank"}
        >
          {content?.children[0]?.text ??
            content?.children[1]?.text ??
            content?.children[2].text}
        </a>
      );
    case TypeText.IMAGE:
      return <img src={image?.url} alt="" />;
    case TypeText.CODE:
      return (
        <div className="bg-dark-blue rounded-lg group relative">
          <p
            className="text-white-color p-4 cursor-pointer"
            onClick={() => Copy(content?.text)}
          >
            {content?.text}
          </p>
        </div>
      );
    case TypeText.QUOTE:
      return (
        <div className="bg-dark-blue border-l-4 border-light-blue">
          <p className="font-bold italic text-white-color p-4">
            "{content?.text}"
          </p>
        </div>
      );
    case TypeText.LIST:
      return (
        <ul>
          {content?.children
            ?.filter((list) => list?.text?.length > 0)
            .map((list, index) => (
              <li key={index} className="pl-4 flex flex-row gap-2 items-center">
                <div className="w-2 h-2 bg-light-blue rounded-full"></div>
                <p>{list.text}</p>
              </li>
            ))}
        </ul>
      );
    default:
      return (
        <p
          className={`inline-block ${content?.italic ? "italic" : ""} ${
            content?.bold ? "font-bold" : ""
          } ${content?.underline ? "underline" : ""}`}
        >
          {content?.text}{" "}
        </p>
      );
  }
};

export default ArticlePage;
