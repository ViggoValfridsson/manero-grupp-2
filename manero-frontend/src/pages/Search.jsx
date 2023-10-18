import { apiDomain } from "../helpers/api-domain";
import useFetch from "../hooks/useFetch";

export default function Search() {
  const categories = useFetch(`${apiDomain.https}/api/category`);
  console.log(categories?.data);
  return <div>Search</div>;
}
