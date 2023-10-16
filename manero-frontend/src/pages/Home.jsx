import Product from "../components/Product";
import { apiDomain } from "../helpers/api-domain";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const products = useFetch(`${apiDomain.https}/api/products`);

  console.log(products.data);

  return (
    <>
      {products.isLoading && <h2>Loading</h2>}
      {products.error && <h2>Error</h2>}
      {products.data?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}
