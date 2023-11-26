import AuthorCard from "../../components/AuthorCard";
import Hero from "../../components/Hero";
import { FC } from "react";
import ArticleCard from "../../components/ArticleCard";

const AuthorPage = () => {
  const auteur = {
    name: "Ryan Ez Zerqti",
    image: "error404.png",
    role: "CTO",
    articles: 19,
  };

  return (
    <>
      <Hero
        reactElement={
          <HeroAuthor
            name={auteur.name}
            role={auteur.role}
            image={auteur.image}
            articles={auteur.articles}
          />
        }
      />
      <div className="px-page py-medium bg-white-color">
        <ArticleCard title="Dernier article publié :" isBig={true} />
        <ArticleCard title="Ses articles { } :" />
        <ArticleCard title="Au cas où vous l’auriez manqué :" twice={true} />
      </div>
    </>
  );
};

const HeroAuthor: FC<{
  name: string;
  role: string;
  image: string;
  articles: number;
}> = ({ name, role, image, articles }) => {
  return (
    <>
      <AuthorCard
        image={image}
        name={name}
        role={role}
        isRow={true}
        reactComponent={
          <h4 className="text-white-color">Articles: {articles}</h4>
        }
      />
    </>
  );
};

export default AuthorPage;
