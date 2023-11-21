import HeroStats from "../../components/about/HeroStats";
import MembersList from "../../components/about/MembersList";
import Hero from "../../components/Hero";
import Testimonial from "../../components/Testimonial";

function AboutPage() {
  const text1 =
    "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.";

  return (
    <>
      <Hero image="computeWithGuy.png" reactElement={<HeroElement />} />
        <div className="flex flex-col gap-12 py-medium">
            <div className="px-page flex flex-col gap-12">
                <Testimonial
                title="Notre Histoire :"
                text={text1}
                />
                <Testimonial title="En Quelques mots :" text={text1} direction={true} />
            </div>
            <HeroStats />
            <div className="px-page">
                <MembersList />
            </div>
        </div>
    </>
  );
}

function HeroElement() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-light-blue font-bold text-4xl">Découvrez nous !</h1>
        <p className="w-1/2 text-white-color">
          Explorez l'histoire fascinante et rencontrez l'équipe talentueuse de{" "}
          <span className="text-light-red">LeCodePartagé</span> pour approfondir
          votre compréhension de notre univers unique.
        </p>
      </div>
    </>
  );
}

export default AboutPage;
