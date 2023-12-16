import { Link } from "react-router-dom";
import Arrow from "../assets/Arrow";

const Breadcrumb = () => {
  const path = window.location.href.split("/");

  return (
    <>
      <div className="bg-dark-red px-page flex flex-row gap-2 items-center py-small">
        <Link to="/" className="text-white-color uppercase">
          Home
        </Link>
        <Arrow size="w-4 rotate-180" />
        <h3 className="text-white-color">
          {path[3].replace("-", " ").replace("%C3%A9", "é").toUpperCase()}
        </h3>
      </div>
    </>
  );
};

export default Breadcrumb;
