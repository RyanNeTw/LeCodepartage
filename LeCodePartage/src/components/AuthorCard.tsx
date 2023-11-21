import { FC } from "react";

const AuthorCard: FC<{ image?: string; name?: string; role?: string }> = ({
  image,
  name,
  role,
}) => {
  if (!image) {
    return (
      <>
        <div className="flex flex-row gap-2 items-center">
          <div className="w-16 h-16 bg-grey animate-pulse rounded-full"></div>
          {name ? (
            <div className="flex flex-col gap-2">
              <div className="w-20 h-2 bg-grey animate-pulse rounded-lg"></div>
              <div className="w-12 h-2 bg-grey animate-pulse rounded-lg"></div>
            </div>
          ) : null}
        </div>
      </>
    );
  }

  return (
    <>
      <div></div>
    </>
  );
};

export default AuthorCard;
