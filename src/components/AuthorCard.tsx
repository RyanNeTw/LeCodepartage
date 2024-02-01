import { FC, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { MembersType } from "../types";

const AuthorCard: FC<{
  author?: MembersType | null;
  isRow?: boolean;
  reactComponent?: ReactElement;
  isBackground?: boolean;
  isFetch?: boolean;
}> = ({ author, isRow = false, reactComponent, isBackground = true }) => {
  const navigate = useNavigate();

  const imageUrl = `http://localhost:1337${author?.attributes?.picture?.data?.attributes?.url}`;

  if (!author?.id) {
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
    <div
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/auteur/${author?.attributes?.slug?.replace(/\s/g, "-")}`);
      }}
    >
      <div
        className={`flex flex-row gap-4 ${isRow ? "hover:shadow-lg rounded-lg px-6 py-2" : ""} ${
          reactComponent ? "items-start" : "items-center"
        }`}
      >
        <div className="relative z-10 authorCard">
          <div
            className="relative w-16 h-16 rounded-full bg-center bg-no-repeat bg-cover bg-white-color shadow-sm"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        </div>
        <div className={`flex flex-col ${reactComponent ? "mt-2" : null}`}>
          <div className="flex flex-row gap-4 relative items-center">
            <div
              className={`${isRow ? "flex flex-col sm:flex-row gap-1" : "hidden xsm:flex flex-col"}`}
            >
              <div className="font-bold text-light-blue">
                {author?.attributes?.fullName}
              </div>
              <div
                className={`${isBackground ? "text-white-color" : "text-black-color"}`}
              >
                {isRow ? " - " : null} {author?.attributes?.job}
              </div>
            </div>
          </div>
          {reactComponent}
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
