import "./App.css";

function App() {
  return (
    <>
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

export default App;
