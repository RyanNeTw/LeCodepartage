import { createContext, useState } from 'react';

// Create a context for the search provider
export const SearchContext = createContext<{
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}>({
  searchValue: '',
  setSearchValue: () => {},
});

// Create the search provider component
export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');

  return <SearchContext.Provider value={{ searchValue, setSearchValue }}>{children}</SearchContext.Provider>;
};
