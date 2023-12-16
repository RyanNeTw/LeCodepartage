import AuthorCard from "../AuthorCard";

function HeroStats() {
  const stats: { title: string; text: string }[] = [
    { title: "004", text: "Postes publiés" },
    { title: "004", text: "Postes publiés" },
    { title: "004", text: "Postes publiés" },
  ];

  return (
    <>
      <section className="bg-dark-blue flex flex-row justify-between px-page py-small gap-16">
        <div className="bg-white-color flex flex-col justify-between gap-16 p-small rounded-lg w-2/4">
          {stats?.map((stat, index) => (
            <div className="flex flex-col justify-start" key={index}>
              <h4 className="text-light-red text-xl font-bold">{stat.title}</h4>
              <h5 className="text-black-color">{stat.text}</h5>
            </div>
          ))}
        </div>

        <div className="flex flex-row items-stretch">
          <img src="./images/arrowLeft.svg" className="w-16 self-start" />
          <div className="self-center flex flex-col gap-4">
            <p className="text-white-color">
              Notre mission est simple : éclairer, informer et connecter la
              communauté de développeurs autour des projets{" "}
              <span className="text-light-red">open source</span> qui façonnent
              l'avenir de notre industrie. Nous pensons que le partage de
              connaissances et la collaboration sont les clés pour faire avancer
              la technologie, et nous sommes ici pour faciliter cela.
            </p>
            <AuthorCard image="ryan.png" name="Ryan Ez Zerqti" role="CEO" />
          </div>
          <img src="./images/arrowRight.png" className="w-16 self-end" />
        </div>
      </section>
    </>
  );
}

export default HeroStats;
