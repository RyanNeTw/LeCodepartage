import AuthorCard from "../../components/AuthorCard";
import Hero from "../../components/Hero";
import { FC, useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import Breadcrumb from "../../components/breadCrumb";
import { MembersType } from "../../types";
import { getMemberByField } from "../../functions/getData";

const AuthorPage = () => {
  const [author, setAuthor] = useState<MembersType | null>(null);
  const path = window.location.href.split("/");
  useEffect(() => {
    getMemberByField("slug", path[4]).then((data) => setAuthor(data.data[0]));
  }, []);

  const articles = author?.attributes?.articles?.data ?? null;
  return (
    <>
      <Hero reactElement={<HeroAuthor author={author} />} />
      <div className="px-page py-medium">
        <ArticleCard
          title="Dernier article publié :"
          isBig={true}
          articles={articles}
        />
        <ArticleCard title="Ses articles { } :" articles={articles} />
        <ArticleCard
          title="Au cas où vous l’auriez manqué :"
          twice={true}
          articles={articles}
        />
      </div>
      <Breadcrumb />
    </>
  );
};

const HeroAuthor: FC<{
  author: MembersType | null;
}> = ({ author }) => {
  return (
    <>
      <AuthorCard
        author={author}
        isRow={true}
        reactComponent={
          <h4 className="text-white-color">
            Articles: {author?.attributes?.articles?.data?.length}
          </h4>
        }
      />
    </>
  );
};

export default AuthorPage;
