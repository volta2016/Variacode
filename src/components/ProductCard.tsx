import { Product } from "../types/types";

interface ProductCardProps {
  selectedProduct: Product | null;
  isLoading?: boolean; // isLoading no es requerido porque el skeleton se maneja en Autocomplete
}

export const ProductCard: React.FC<ProductCardProps> = ({
  selectedProduct,
}) => {
  if (!selectedProduct) return null;

  return (
    <div className="product-card">
      <img src={selectedProduct.image} alt={selectedProduct.title} />
      <h2>{selectedProduct.title}</h2>
      <p>
        <b>Price:</b> ${selectedProduct.price}
      </p>
      <p>
        <b>Rating:</b> {selectedProduct.rating.rate} (
        {selectedProduct.rating.count} reviews)
      </p>
    </div>
  );
};
