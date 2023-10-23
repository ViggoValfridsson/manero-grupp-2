import { Heart, ShoppingBag, Star } from "lucide-react";
import { apiDomain } from "../helpers/api-domain";
import { Link } from "react-router-dom";

export default function ProductListCard({ product }) {
  return (
    <Link to={`/product/${product._id}`}>
      <div className="product-list-card">
        <div className="product-card-image-wrapper">
          <img src={apiDomain.https + product.imagePaths[0]} alt={product.name} />
        </div>
        <div className="product-card-details">
          <p id="b" className="product-name">
            {product.name}
          </p>
          <p id="c" className="product-price">
            {product.price}
          </p>
          <div id="a" className="product-card-rating">
            <Star color="orange" />
            <Star color="orange" />
            <Star color="orange" />
            <Star color="orange" />
            <Star color="orange" />
            <span className="product-card-reviews">(3)</span>
          </div>
        </div>
        <div className="product-card-icons">
          <button>
            <Heart />
          </button>
          <button>
            <ShoppingBag />
          </button>
        </div>
      </div>
    </Link>
  );
}