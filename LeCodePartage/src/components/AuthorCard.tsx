import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

const AuthorCard: FC<{
  image?: string;
  name?: string;
  role?: string;
  isRow?: boolean;
  reactComponent?: ReactElement;
}> = ({ image, name, role, isRow = false, reactComponent }) => {
  const imageUrl = `./images/${image}`;

  if (!image) {
    return (
      <>
        <div className="flex flex-row gap-2 items-center">
          <div className="w-16 h-16 bg-grey animate-pulse rounded-full"></div>
          <div className={`flex ${isRow ? "flex-row" : "flex-col"} gap-2`}>
            <div className="w-20 h-2 bg-grey animate-pulse rounded-lg"></div>
            <div className="w-8 h-2 bg-grey animate-pulse rounded-lg"></div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className={`flex flex-row gap-4 ${
          reactComponent ? "items-start" : "items-center"
        }`}
      >
        <Link
          to={`/auteur/${name?.replace(" ", "-")}`}
          className="relative z-10 authorCard"
        >
          <div
            className="relative w-16 h-16 rounded-full bg-center bg-no-repeat bg-cover bg-white-color"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        </Link>
        <div className={`flex flex-col ${reactComponent ? "mt-2" : null}`}>
          <div className="flex flex-row gap-4 relative items-center">
            <div className={`flex ${isRow ? "flex-row gap-2" : "flex-col"}`}>
              <div className="font-bold text-light-blue">{name}</div>
              <div className="text-white-color">
                {isRow ? " - " : null} {role}
              </div>
            </div>
          </div>
          {reactComponent}
        </div>
      </div>
    </>
  );
};

export default AuthorCard;
