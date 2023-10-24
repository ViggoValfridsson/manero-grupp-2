import ProductGridCard from "../components/ProductGridCard";
import { apiDomain } from "../helpers/api-domain";
import useFetch from "../hooks/useFetch";
import useQuery from "../hooks/useQuery";

function Products() {
  const query = useQuery();
  const products = useFetch(`${apiDomain.https}/api/products?${query.toString()}`);

  return (
    <div className="products-page">
      <div className="filter-container"></div>
      <div className="product-card-container">
        {products.data?.map((product) => (
          <ProductGridCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
