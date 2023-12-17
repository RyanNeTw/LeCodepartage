import { useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import Hero from "../../components/Hero";
import HeroWithList from "../../components/HeroWithList";
import { getArticles } from "../../functions/getData";
import { ArticlesType } from "../../types";

function MainPage() {
  const [articles, setArticles] = useState<ArticlesType[]>([]);

  useEffect(() => {
    getArticles().then((data) => setArticles(data.data));
  }, []);

  return (
    <>
      <Hero image="lightInSpace.svg" reactElement={<HeroMainPage />} />
      <div className="w-full px-page py-medium">
        <ArticleCard
          isBig={true}
          title={"Notre article à la une :"}
          articles={articles}
        />
        <ArticleCard title={"Nos articles { } :"} articles={articles} />
      </div>
      <HeroWithList />
      <div className="w-full px-page py-medium">
        <ArticleCard
          twice={true}
          title={"Au cas où vous l’auriez manqué :"}
          articles={articles}
        />
      </div>
    </>
  );
}

const HeroMainPage = () => {
  return (
    <>
      <div className="flex flex-col items-start">
        <h1 className="text-white-color font-bold text-4xl">
          Bienvenue sur <span className="text-light-blue">LeCodePartagé</span>
        </h1>
        <h3 className="text-white-color text-2xl">
          Votre Guide de l'<span className="text-light-blue">Open Source</span>{" "}
          à la <span className="text-light-red">Française</span>
        </h3>
        <div className="flex flex-row gap-4 pt-8">
          <a
            href="#firstArticle"
            className="px-small py-reallySmall bg-dark-red text-white-color rounded-3xl hover:bg-light-red"
          >
            Découvrir
          </a>
          <LinkedinButton />
        </div>
      </div>
    </>
  );
};

export const LinkedinButton = () => {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/le-code-partage-3506492a2/"
        target="_blank"
        className="px-small py-reallySmall border border-light-blue text-light-blue rounded-3xl hover:bg-light-blue hover:text-white-color flex flex-row gap-2 items-center"
      >
        LinkedIn
      </a>
    </>
  );
};

export default MainPage;
