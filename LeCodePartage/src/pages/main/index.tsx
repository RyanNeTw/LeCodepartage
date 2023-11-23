import ArticleCard from "../../components/ArticleCard";
import Hero from "../../components/Hero";

function MainPage() {
  return (
    <>
      <Hero image="lightInSpace.png" reactElement={<HeroMainPage />} />
      <div className="w-full px-page py-medium">
        <ArticleCard
          isBig={true}
          articles={["e"]}
          title={"Nos articles à la une :"}
        />
        <ArticleCard title={"Nos articles { } :"} />
        <ArticleCard
          articles={["e", "e"]}
          title={"Au cas où vous l’auriez manqué :"}
        />
      </div>
    </>
  );
}

const HeroMainPage = () => {
  return (
    <>
      <div className="flex flex-col gap-2 items-start">
        <h1 className="text-white-color font-bold text-4xl">
          Bienvenue sur <span className="text-light-blue">LeCodePartagé</span>
        </h1>
        <h3 className="text-white-color text-2xl">
          Votre Guide de l'<span className="text-light-blue">Open Source</span>{" "}
          à la <span className="text-light-red">Française</span>
        </h3>
        <button className="px-small py-reallySmall bg-dark-red text-white-color rounded-3xl">
          Découvrir
        </button>
      </div>
    </>
  );
};

export default MainPage;
