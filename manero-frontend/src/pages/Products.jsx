import { useState } from "react";
import ProductGridCard from "../components/ProductGridCard";
import { apiDomain } from "../helpers/api-domain";
import useFetch from "../hooks/useFetch";
import useQuery from "../hooks/useQuery";
import { SlidersHorizontal } from "lucide-react";

function Products() {
  const query = useQuery();
  const products = useFetch(`${apiDomain.https}/api/products?${query.toString()}`);
  const [sortBy, setSortBy] = useState("");

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="products-page">
      <div className="filter-container">
        <button>
          <SlidersHorizontal />
          Filters
        </button>
        {/* To Do Add functionality */}
        <select value={sortBy} onChange={handleChange}>
          <option value="" disabled hidden>
            Order By
          </option>
          <option value="lowest">Lowest Price</option>
          <option value="highest">Highest Price</option>
        </select>
      </div>
      <div className="product-card-container">
        {products.data?.map((product) => (
          <ProductGridCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
