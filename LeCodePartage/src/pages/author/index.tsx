import AuthorCard from "../../components/AuthorCard";
import Hero from "../../components/Hero";
import { FC } from "react";
import ArticleCard from "../../components/ArticleCard";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/breadCrumb";

const AuthorPage = () => {
  const location = useLocation();
  const author = location.state;

  return (
    <>
      <Hero
        reactElement={
          <HeroAuthor
            name={author.name}
            role={author.role}
            image={author.image}
            articles={0}
          />
        }
      />
      <div className="px-page py-medium">
        <ArticleCard title="Dernier article publié :" isBig={true} />
        <ArticleCard title="Ses articles { } :" />
        <ArticleCard title="Au cas où vous l’auriez manqué :" twice={true} />
      </div>
      <Breadcrumb />
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
