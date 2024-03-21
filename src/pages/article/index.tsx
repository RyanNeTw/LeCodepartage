import { FC, ReactElement, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard";
import AuthorCard from "../../components/AuthorCard";
import Breadcrumb from "../../components/Breadcrumb";
import CommentCard from "../../components/Comment";
import Title from "../../components/Title";
import { getArticlesByField, getCommentsAricle } from "../../functions/getData";
import {
  ArticlesType,
  TypeText,
  Content,
  Chlidren,
  DataAttributes,
  Comment,
} from "../../types";

const ArticlePage = () => {
  const [article, setArticle] = useState<ArticlesType[]>([]);
  const [articleIsMissed, setArticleIsMissed] = useState<ArticlesType[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);

  const path = window.location.href.split("/");
  let location = useLocation();

  useEffect(() => {
    getArticlesByField("[slug]", path[4]).then((data) =>
      setArticle(data?.data),
    );
    getArticlesByField("[isMissed]", "true").then((data) =>
      setArticleIsMissed(data?.data),
    );
  }, [location]);

  useEffect(() => {
    getCommentsAricle(article[0]?.id.toString()).then((data) =>
      setComments(data),
    );
  }, [location, article]);

  return (
    <>
      <div className="px-8 lg:px-page py-medium flex flex-col gap-4">
        <ArticleCard articles={article} isArticle={true} isBig={true} />
        <ul>
          {article[0]?.attributes?.content?.map((content, index) => (
            <li key={index}>
              <ArticleContent content={content} />
            </li>
          ))}
        </ul>
        <div>
          <CommentCard
            comments={comments.slice(Math.max(comments.length - 2, 1))}
            setComments={setComments}
            id={article[0]?.id.toString()}
          />
          {comments?.length > 0 && (
            <Link
              to={`/article/comments/${article[0]?.id}`}
              className="text-light-blue flex justify-end pt-small"
            >
              Lire tous les commentaires
            </Link>
          )}
        </div>
        <div className="h-0.5 w-full bg-dark-red my-4"></div>
        <div className="flex w-full xsm:justify-end">
          <AuthorCard
            author={article[0]?.attributes?.member?.data}
            isBackground={false}
            isRow={true}
            reactComponent={<ShareLinks article={article} />}
          />
        </div>
        <ArticleCard
          articles={articleIsMissed.filter(
            (i) => i?.attributes?.slug != article[0]?.attributes?.slug,
          )}
          twice={true}
          title={"Au cas où vous l’auriez manqué :"}
        />
      </div>
      <Breadcrumb />
    </>
  );
};

const ShareLinks: FC<{ article: ArticlesType[] }> = ({
  article,
}): ReactElement => {
  const shareText: string = `Je viens de lire cet article incroyable sur LeCodePartagé et je devais le partager ! Jetez un œil : ${article[0]?.attributes?.name}. #ÀLire #Inspiration`;
  return (
    <>
      <div className="flex flex-row gap-1 ">
        <p className="font-bold">Partager :</p>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
          target="_blank"
          className="hover:underline"
        >
          Linkedin,
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${shareText}&url=${window.location.href}`}
          target="_blank"
          className="hover:underline"
        >
          X
        </a>
      </div>
    </>
  );
};

const ArticleContent: FC<{ content: Content }> = ({
  content,
}): ReactElement => {
  return (
    <>
      <div
        className={`flex flex-wrap gap-1 ${content?.image ? "flex justify-center" : ""}`}
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

  if (content?.text?.length === 0 && type !== TypeText.IMAGE) return <></>;

  switch (type) {
    case TypeText.HEADING:
      return (
        <div className="py-8">
          <Title title={content?.text} />
        </div>
      );
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
      return <img src={image?.url} alt="" className="py-4" />;
    case TypeText.CODE:
      return (
        <div className="bg-dark-blue rounded-lg group relative my-2">
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
        <div className="bg-dark-blue border-l-4 border-light-blue my-2 rounded-r-lg flex justify-center">
          <p className="font-bold italic text-white-color p-4 text-center">
            {content?.text}
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
          className={`inline-block ${content?.italic ? "italic" : ""} ${content?.bold ? "font-bold" : ""} ${
            content?.underline ? "underline" : ""
          }`}
        >
          {content?.text}{" "}
        </p>
      );
  }
};

export default ArticlePage;
