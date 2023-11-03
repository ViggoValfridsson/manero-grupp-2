import { SlidersHorizontal, Check, Square } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { apiDomain } from "../../helpers/api-domain";
import useQuery from "../../hooks/useQuery";
import { useState } from "react";

function FilterBurgerMenu() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const categories = useFetch(`${apiDomain.https}/api/categories`);
  const tags = useFetch(`${apiDomain.https}/api/tags`);
  const query = useQuery();

  const updateQuery = (key, value) => {
    query.set("page", 1);
    if (query.has(key, value)) {
      query.delete(key, value);
    } else {
      query.set(key, value);
    }

    navigate(`?${query.toString()}`);
  };

  return (
    <>
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="filter-burger-button">
        <SlidersHorizontal />
        Filters
      </button>
      <div
        onClick={() => setSidebarOpen(false)}
        className={`${sidebarOpen ? "open" : "closed"} filter-bg`}
      ></div>
      <div className={`${sidebarOpen ? "open" : "closed"} filter-sidebar`}>
        <div className="container-filter-menu">
          <div className="category-container">
            <h2>Categories</h2>
            {categories.data?.map((category) => (
              <button
                key={category.name}
                onClick={() => updateQuery("category", category.name.toLowerCase())}
                aria-checked={query.has("category", category.name.toLowerCase()) ? true : false}
              >
                {category.name}
                <div className="checkbox-container">
                  <Square size={20} />
                  {query.has("category", category.name.toLowerCase()) && <Check size={20} />}
                </div>
              </button>
            ))}
          </div>
          <div className="tag-container">
            <h2>Tags</h2>
            {tags.data?.map((tag) => (
              <button key={tag.name} onClick={() => updateQuery("tag", tag.name.toLowerCase())}>
                {tag.name}
                <div className="checkbox-container">
                  <Square size={20} />
                  {query.has("tag", tag.name.toLowerCase()) && <Check size={18} />}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterBurgerMenu;
