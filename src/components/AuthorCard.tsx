import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { MembersType } from '../types';

const AuthorCard: FC<{
  author?: MembersType | null;
  isRow?: boolean;
  isMain?: boolean;
  reactComponent?: ReactElement;
  isBackground?: boolean;
  isFetch?: boolean;
}> = ({ author, isRow = false, isMain = false, reactComponent, isBackground = true }) => {
  const navigate = useNavigate();

  const imageUrl = `https://api.lecodepartage.fr${author?.attributes?.picture?.data?.attributes?.url}`;

  if (!author?.id) {
    return (
      <>
        <div className="flex flex-row gap-2 items-center">
          <div className="w-16 h-16 bg-grey animate-pulse rounded-full"></div>
          <div className={`flex ${isRow ? 'flex-row' : 'flex-col'} gap-2`}>
            <div className="w-20 h-2 bg-grey animate-pulse rounded-lg"></div>
            <div className="w-8 h-2 bg-grey animate-pulse rounded-lg"></div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div
      className={`flex flex-row gap-4 ${isRow ? 'hover:shadow-lg rounded-lg px-6 py-2' : ''} ${
        isMain ? 'flex-col items-center text-center' : 'cursor-pointer'
      } ${reactComponent ? 'items-start' : 'items-center'}`}
      onClick={() => {
        navigate(`/auteur/${author?.attributes?.slug?.replace(/\s/g, '-')}`);
      }}
    >
      <div className="relative z-10 authorCard">
        <div
          className={`relative rounded-full bg-center bg-no-repeat bg-cover bg-white-color shadow-sm ${
            isMain ? 'w-64 h-64' : 'w-16 h-16'
          }`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
      <div className={`flex flex-col ${reactComponent ? 'mt-2' : null}`}>
        <div className="flex flex-row gap-4 relative items-center">
          <div className={`${isRow ? 'flex flex-col sm:flex-row gap-1' : 'hidden xsm:flex flex-col'}`}>
            <h1 className={`font-bold text-light-blue ${isMain ? 'text-2xl' : ''}`}>{author?.attributes?.fullName}</h1>
            <h2 className={`${isBackground ? 'text-white-color' : 'text-black-color'} ${isMain ? 'text-xl' : ''}`}>
              {isRow ? ' - ' : null} {author?.attributes?.job}
            </h2>
          </div>
        </div>
        {reactComponent}
      </div>
    </div>
  );
};

export default AuthorCard;
