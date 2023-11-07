import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { apiDomain } from "../../helpers/api-domain";
import useQuery from "../../hooks/useQuery";
import ThemedDropdown from "../ThemedDropdown";

function FilterMenu({ menuExpanded }) {
  const navigate = useNavigate();
  const query = useQuery();

  const categories = useFetch(`${apiDomain.https}/api/categories`);
  const tags = useFetch(`${apiDomain.https}/api/tags`);

  const updateQuery = (key, value) => {
    query.set("page", 1);
    if (query.has(key, value)) {
      query.delete(key);
    } else {
      query.set(key, value);
    }

    navigate(`?${query.toString()}`);
  };

  const removeQueryParam = (key) => {
    query.delete(key);
    navigate(`?${query.toString()}`);
  };

  return (
    <>
      <div className={`${menuExpanded ? "open" : "closed"} filter-menu`}>
        <div className="filter-menu-inner">
          <div className="category-container">
            <h2>Category</h2>
            <ThemedDropdown value={query.get("category") ?? "All"}>
              <button onClick={() => removeQueryParam("category")}>All</button>
              {categories.data?.map((category) => (
                <button
                  key={category.name}
                  onClick={() => updateQuery("category", category.name.toLowerCase())}
                >
                  {category.name}
                </button>
              ))}
            </ThemedDropdown>
          </div>
          <div className="tag-container">
            <h2>Tags</h2>
            <div className="buttons">
              {tags.data?.map((tag) => (
                <button
                  key={tag.name}
                  onClick={() => updateQuery("tag", tag.name.toLowerCase())}
                  className={query.has("tag", tag.name.toLowerCase()) ? "active" : ""}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterMenu;
