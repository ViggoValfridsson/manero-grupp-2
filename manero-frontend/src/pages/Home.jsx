import { Link } from "react-router-dom";
import Product from "../components/Product";
import { apiDomain } from "../helpers/api-domain";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const products = useFetch(`${apiDomain.https}/api/products`);
  const tags = useFetch(`${apiDomain.https}/api/tags`);

  console.log(products.data);

  return (
    <>
      <ul className="tags-container">
        {tags?.data?.map((tag) => (
          <li key={tag.name}>
            <Link to={`/products?tagName=${tag.name.toLowerCase()}`}>
              <div className="tag-wrapper">
                <div className="tag-circle"></div>
                <p>{tag.name}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {products.isLoading && <h2>Loading</h2>}
      {products.error && <h2>Error</h2>}
      {products.data?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}
