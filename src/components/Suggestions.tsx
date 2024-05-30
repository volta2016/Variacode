import { Product } from "../types/types";

interface SuggestionsProps {
  filteredData: Product[];
  highlightIndex: number;
  handleItemClick: (item: Product) => void;
  highlightText: (text: string, query: string) => JSX.Element[];
  query: string;
}

export const Suggestions: React.FC<SuggestionsProps> = ({
  filteredData,
  highlightIndex,
  handleItemClick,
  highlightText,
  query,
}) => {
  return (
    <ul className="suggestions">
      {filteredData.map((item, index) => (
        <li
          key={item.id}
          className={`suggestion ${
            index === highlightIndex ? "highlightedSuggestion" : ""
          }`}
          onMouseDown={() => handleItemClick(item)}
        >
          {highlightText(item.title, query)}
        </li>
      ))}
    </ul>
  );
};
