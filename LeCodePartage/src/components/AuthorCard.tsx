import { FC } from "react";

const AuthorCard: FC<{
  image?: string;
  name?: string;
  role?: string;
  isRow?: boolean;
}> = ({ image, name, role, isRow = false }) => {
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
      <div>
        <div className="flex flex-row gap-4 relative items-center">
          <div className="relative z-10 authorCard">
            <div
              className="relative w-16 h-16 rounded-full bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
          </div>
          <div className={`flex ${isRow ? "flex-row" : "flex-col"}`}>
            <div className="font-bold text-light-blue">{name}</div>
            <div className="text-white-color">{role}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorCard;
