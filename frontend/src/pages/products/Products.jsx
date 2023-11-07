import ProductGridCard from "../../components/ProductGridCard";
import { apiDomain } from "../../helpers/api-domain";
import useFetch from "../../hooks/useFetch";
import useQuery from "../../hooks/useQuery";
import { useNavigate } from "react-router-dom";
import PaginationButtons from "../../components/PaginationButtons";
import FilterMenu from "../../components/Layout/FilterMenu";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import ThemedDropdown from "../../components/ThemedDropdown";

function Products() {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [orderByValue, setOrderByValue] = useState(null);
  const navigate = useNavigate();
  const query = useQuery();

  const productCount = useFetch(`${apiDomain.https}/api/products/count?${query.toString()}`);
  const displayAmount = 10;
  const pageAmount = Math.ceil(productCount.data / displayAmount);

  const products = useFetch(
    `${apiDomain.https}/api/products?${query.toString()}&amount=${displayAmount}`
  );

  useEffect(() => {
    if (orderByValue) {
      query.set("orderby", orderByValue?.split(" ")?.join("").toLowerCase());
      navigate(`?${query.toString()}`);
    } else {
      query.delete("orderby");
    }
  }, [orderByValue, query, navigate]);

  const updatePageNumber = (pageNumber) => {
    query.set("page", pageNumber);
    navigate(`?${query.toString()}`);
  };

  return (
    <div className="products-page">
      <div className="top-row">
        <button className="filter-button" onClick={() => setMenuExpanded(!menuExpanded)}>
          <SlidersHorizontal />
          <span>Filters</span>
          <ChevronDown style={menuExpanded ? { rotate: "-180deg" } : {}} />
        </button>
        <ThemedDropdown value={orderByValue ?? "Order By"}>
          <button onClick={() => setOrderByValue("Lowest Price")}>Lowest Price</button>
          <button onClick={() => setOrderByValue("Highest Price")}>Highest Price</button>
        </ThemedDropdown>
      </div>
      <FilterMenu menuExpanded={menuExpanded} />
      {products.data?.length == 0 && (
        <section className="no-products-container">
          <h1>Could Not Find Any Products</h1>
          <p>Please try again with other filtering options.</p>
        </section>
      )}
      <section className="product-card-container">
        {products.data?.map((product) => (
          <ProductGridCard key={product.id} product={product} />
        ))}
      </section>
      <PaginationButtons pageAmount={pageAmount} updatePageNumber={updatePageNumber} />
    </div>
  );
}

export default Products;
