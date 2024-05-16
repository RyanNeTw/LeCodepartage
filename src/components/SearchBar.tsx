import { ChangeEvent, KeyboardEvent, useContext, useEffect, useRef, useState } from 'react';
import Search from '../assets/Search';
import { SearchContext } from '../contexts/SearchProvider';

export default function SearchBar() {
  const { setSearchValue } = useContext(SearchContext);
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchInput, setSearchInput] = useState('' as string);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isIconClicked, setIsIconClicked] = useState(false);

  const handleIconMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsIconClicked(true);
    handleSubmit();
  };

  const handleBlur = () => {
    if (!isIconClicked) {
      setIsFocused(false);
    }
    setIsIconClicked(false);
  };

  const handleSubmit = () => {
    if (searchInput === '' && !isFocused) {
      setIsFocused(true);
    } else {
      setSearchValue(searchInput);
    }
  };

  useEffect(() => {
    if (isFocused) {
      searchRef.current?.focus();
    } else {
      searchRef.current?.blur();
    }
  }, [isFocused]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);

    if (event.target.value === '') {
      setSearchValue('');
    }
  };

  return (
    <div
      className={`flex flex-row relative [clip-path:inset(0_0_0_-999px)]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <input
        ref={searchRef}
        type={'text'}
        placeholder={'Chercher'}
        className={`h-full rounded-l-lg border focus:outline-none px-midSmall absolute transition-[transform,border-color,background-color] duration-500 ease-in-out z-0 w-[700%] ${
          isFocused
            ? 'bg-white-color border-light-blue -translate-x-full'
            : 'bg-dark-blue border-dark-blue translate-x-0'
        }`}
        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
        onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
          if (event.key === 'Enter') {
            handleSubmit();
          }
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
      />
      <div
        className={`p-midSmall cursor-pointer z-10 ${isHovered || isFocused ? 'bg-light-blue' : 'bg-dark-blue'} ${
          isFocused ? 'rounded-r-lg' : 'rounded-lg'
        }`}
        onMouseDown={handleIconMouseDown}
        onMouseUp={() => setIsIconClicked(false)}
      >
        <Search />
      </div>
    </div>
  );
}
