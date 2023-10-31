import ProductListCard from "../components/ProductListCard";
import { useWishlist } from "../hooks/useWishlist";

function WishList() {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0)
    return (
      <section className="wish-list">
        <div className="product-list">
          <h2>Your wishlist is empty!</h2>
          <p>Looks like you haven{"'"}t added any products yet.</p>
        </div>
      </section>
    );

  return (
    <section className="wishlist-page">
      <div className="wishlist-container">
        {wishlist.map((product) => (
          <ProductListCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default WishList;
