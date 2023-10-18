import SearchPageCategoryCard from "../components/SearchPageCategoryCard";
import { apiDomain } from "../helpers/api-domain";
import useFetch from "../hooks/useFetch";

export default function Search() {
  const categories = useFetch(`${apiDomain.https}/api/categories`);
  return (
    <div className="search-page">
      <div>Tags</div>
      <div className="category-cards-container">
        {categories?.data?.map((category) => (
          <SearchPageCategoryCard category={category} />
        ))}
      </div>
    </div>
  );
}
