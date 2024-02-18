import { useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import Hero from "../../components/Hero";
import HeroWithList from "../../components/HeroWithList";
import {
  getArticles,
  getArticlesByField,
  getEvents,
} from "../../functions/getData";
import { ArticlesType, EventsType } from "../../types";

function MainPage() {
  const [articles, setArticles] = useState<ArticlesType[]>([]);
  const [events, setEvents] = useState<EventsType[]>([]);
  const [articlesIsMissed, setArticlesIsMissed] = useState<ArticlesType[]>([]);

  useEffect(() => {
    getArticles().then((data) => setArticles(data.data));
    getEvents().then((data) => setEvents(data.data));
    getArticlesByField("[isMissed]", "true").then((data) =>
      setArticlesIsMissed(data?.data),
    );
  }, []);

  return (
    <>
      <Hero image="lightInSpace.svg" reactElement={<HeroMainPage />} />
      <div className="w-full px-8 lg:px-page py-medium">
        <ArticleCard
          isBig={true}
          title={"Notre article à la une :"}
          articles={articles}
        />
        <ArticleCard title={"Nos articles { } :"} articles={articles} />
      </div>
      <HeroWithList events={events.slice(0, 4)} />
      <div className="w-full px-8 lg:px-page py-medium">
        <ArticleCard
          twice={true}
          title={"Au cas où vous l’auriez manqué :"}
          articles={articlesIsMissed}
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
        className="px-small py-reallySmall border border-white-color-blue text-white-color rounded-3xl hover:bg-light-blue hover:text-white-color hover:border-light-blue flex flex-row gap-2 items-center justify-center xsm:justify-normal text-center w-3/4 xsm:w-fit"
      >
        LinkedIn
      </a>
    </>
  );
};

export default MainPage;
