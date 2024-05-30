import { useEffect, useState } from "react";
import { Autocomplete } from "./components/AutoComplete";
import { Product } from "./types/types";
import { Loader } from "./components/Loader";
import { ListOfFavorites } from "./components/ListOfFavorites";
import { Header } from "./components/Header";

import "./styles/global.css";

function App(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=6"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500); // time visibility
      }
    };

    fetchProducts();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="container">
      <Header />
      <ListOfFavorites data={products} />
      <Autocomplete data={products} />
    </div>
  );
}

export default App;
