import { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from "react";
import { SearchBar } from "./SearchBar";
import { Suggestions } from "./Suggestions";
import { ProductCard } from "./ProductCard";
import { Skeleton } from "./Skeleton";
import { Product } from "../types/types";
import "../styles/auto-complete.css";

interface AutocompleteProps {
  data: Product[];
}

export const Autocomplete: React.FC<AutocompleteProps> = ({ data }) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false); // State to show/hide suggestions
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query && !selectedProduct) {
      const timeoutId = setTimeout(() => {
        setFilteredData(
          data.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
          )
        );
        setShowSuggestions(true); // Show suggestions when there are results
      }, 300);

      return () => clearTimeout(timeoutId);
    } else {
      setFilteredData([]);
      setShowSuggestions(false); // Hide suggestions when there are no results
    }
  }, [query, data, selectedProduct]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setHighlightIndex(-1);
    setSelectedProduct(null);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setHighlightIndex((prevIndex) =>
        Math.min(prevIndex + 1, filteredData.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      setHighlightIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === "Enter" && highlightIndex >= 0) {
      const selected = filteredData[highlightIndex];
      setQuery(selected.title);
      setSelectedProduct(selected);
      setFilteredData([]);
      setShowSuggestions(false); // Hide suggestions when a suggestion is selected
    }
  };

  const handleItemClick = (item: Product) => {
    setQuery(item.title);
    setIsLoading(true);
    setSelectedProduct(null); // Clear the selected product
    setShowSuggestions(false); // Hide suggestions on click
    setTimeout(() => {
      setSelectedProduct(item);
      setIsLoading(false);
    }, 1000);
  };

  const clearInput = () => {
    setQuery("");
    setFilteredData([]);
    setSelectedProduct(null);
    inputRef.current?.focus();
  };

  const highlightText = (text: string, query: string) => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <div className="autoComplete">
      <SearchBar
        query={query}
        inputRef={inputRef}
        handleInputChange={handleInputChange}
        handleKeyDown={handleKeyDown}
        clearInput={clearInput}
      />
      {isLoading ? (
        <Skeleton count={1} />
      ) : (
        !selectedProduct &&
        (showSuggestions ? (
          <Suggestions
            filteredData={filteredData}
            highlightIndex={highlightIndex}
            handleItemClick={handleItemClick}
            highlightText={highlightText}
            query={query}
          />
        ) : null)
      )}
      {!isLoading && selectedProduct && (
        <ProductCard selectedProduct={selectedProduct} />
      )}
    </div>
  );
};
