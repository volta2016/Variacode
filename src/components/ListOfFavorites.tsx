import React from "react";
import { Product } from "../types/types";

interface ListOfFavoritesProps {
  data: Product[];
}

export const ListOfFavorites: React.FC<ListOfFavoritesProps> = ({ data }) => {
  return (
    <div className="favorites-grid">
      {data.map((product) => (
        <div key={product.id} className="favorite-item">
          <span>{product.title}</span> <span>❤️</span>
        </div>
      ))}
    </div>
  );
};
