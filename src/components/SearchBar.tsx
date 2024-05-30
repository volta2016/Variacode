import { SearchIcon } from "./SearchIcon";
import { RefObject, ChangeEvent, KeyboardEvent } from "react";

interface SearchBarProps {
  query: string;
  inputRef: RefObject<HTMLInputElement>;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  clearInput: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  query,
  inputRef,
  handleInputChange,
  handleKeyDown,
  clearInput,
}) => {
  return (
    <div className="wrapper-input">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for a favorite product to see its details"
        className="input"
      />
      {query ? (
        <button className="clear-button" onClick={clearInput}>
          X
        </button>
      ) : (
        <SearchIcon className="search-icon" />
      )}
    </div>
  );
};
