import { useParams } from "react-router-dom";
import { apiDomain } from "../helpers/api-domain";
import useFetch from "../hooks/useFetch";
import { Minus, Plus } from "lucide-react";
import { useContext, useState } from "react";
import { CartContext } from "../App";
import { handleAddToCart } from "../helpers/add-to-cart";

export default function ProductDetails() {
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState("M");
  const cartState = useContext(CartContext);

  const { id } = useParams();
  const products = useFetch(`${apiDomain.https}/api/products`);
  const product = products.data && products.data[id - 1];
  console.log(product);
  // TODO: Use this when api is updated with GetById()
  // const product = useFetch(`${apiDomain.https}/api/products/${id}`);

  // TODO: Change this
  if (products.isLoading) {
    return <h1>Loading...</h1>;
  }

  // TODO: Change this
  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="product-details-page">
      <div className="image-slider">
        <div className="image-slider-images">
          {product.imagePaths.map((path) => (
            <img key={path} src={apiDomain.https + path} alt="" />
          ))}
        </div>
        {/* <div className="image-slider-buttons">
          {product.imagePaths.map((_, i) => (
            <button key={i}>knapp!</button>
          ))}
        </div> */}
      </div>
      <div className="product-details">
        <div className="product-name">
          <h2>{product.name}</h2>
        </div>
        <div className="product-price-and-amount">
          <span className="product-price">${product.price}</span>
          <div className="product-amount">
            <button onClick={() => amount > 1 && setAmount(amount - 1)}>
              <Minus size={16} />
            </button>
            {amount}
            <button onClick={() => setAmount(amount + 1)}>
              <Plus size={16} />
            </button>
          </div>
        </div>
        <div className="product-size">
          <h3>Size</h3>
          <div>
            {product.availableSizes.map((availableSize) => (
              <button
                key={availableSize}
                className={availableSize == size && "active"}
                onClick={() => setSize(availableSize)}
              >
                {availableSize}
              </button>
            ))}
          </div>
        </div>
        <div className="product-description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
        <button
          onClick={() => handleAddToCart(cartState, product, amount, size)}
          className="button button-black"
        >
          <Plus /> Add to cart
        </button>
      </div>
    </div>
  );
}
