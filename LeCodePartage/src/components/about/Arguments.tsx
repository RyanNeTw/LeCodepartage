import GlobeSvg from "../../assets/Globe";
import GrowthChart from "../../assets/GrowthChart";
import Macbook from "../../assets/Macbook";
import People from "../../assets/People";
import Team from "../../assets/Team";

type ArgumentsType = {
  icon: JSX.Element;
  text: string;
};

const Arguments = () => {
  const size = "w-12";

  // eslint-disable-next-line no-shadow-restricted-names
  const elements: ArgumentsType[] = [
    {
      icon: <Macbook size={size} />,
      text: "Innovation et liberté dans l'informatique française.",
    },
    {
      icon: <GrowthChart size={size} />,
      text: "Évolution constante de la tech française.",
    },
    {
      icon: <GlobeSvg size={size} />,
      text: "Rayonnement mondial de l'innovation française.",
    },
    {
      icon: <People size={size} />,
      text: "Visons l'excellence numérique en France.",
    },
    {
      icon: <Team size={size} />,
      text: "Ensemble, bâtissons l'avenir numérique français.",
    },
  ];

  return (
    <>
      <section>
        <ul className="flex flex-wrap justify-center gap-4">
          {elements?.map((element, index) => (
            <li
              key={index}
              className="bg-dark-blue hover:bg-light-blue w-1/4 p-small rounded-lg relative overflow-hidden group"
            >
              <div>{element.icon}</div>
              <p className="text-white-color">{element.text}</p>
              <div className="bg-dark-red w-1/4 h-1/4 rotate-45 absolute top-0 -right-8 group-hover:bg-light-red"></div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Arguments;
