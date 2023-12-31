import { useParams } from "react-router-dom";
import { apiDomain } from "../../helpers/apiDomain";
import useFetch from "../../hooks/useFetch";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import ImageSlider from "../../components/ImageSlider";

export default function ProductDetails() {
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState("M");
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = useFetch(`${apiDomain.https}/api/products/${id}`);

  if (product.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (product.error) {
    return <h1>Something went wrong</h1>;
  }

  if (!product.data) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="product-details-page">
      <ImageSlider imagePaths={product.data.imagePaths} altText={product.data.name} />
      <div className="product-details">
        <div className="product-name">
          <h2>{product.data.name}</h2>
        </div>
        <div className="product-price-and-amount">
          <span className="product-price">${product.data.price}</span>
          <div className="product-amount">
            <button onClick={() => amount > 1 && setAmount(amount - 1)}>
              <Minus size={16} />
            </button>
            <span>{amount}</span>
            <button onClick={() => setAmount(amount + 1)}>
              <Plus size={16} />
            </button>
          </div>
        </div>
        <div className="product-size">
          <h3>Size</h3>
          <div>
            {product.data.availableSizes.map((availableSize) => (
              <button
                key={availableSize}
                className={availableSize == size ? "active" : ""}
                onClick={() => setSize(availableSize)}
              >
                {availableSize}
              </button>
            ))}
          </div>
        </div>
        <div className="product-description">
          <h3>Description</h3>
          <p>{product.data.description}</p>
        </div>
        <button
          onClick={() => addToCart(product.data, amount, size)}
          className="button button-black"
        >
          <Plus /> Add to cart
        </button>
      </div>
    </div>
  );
}
