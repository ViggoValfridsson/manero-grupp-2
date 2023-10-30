import { createContext, useState, useContext, useEffect } from "react";
import WishlistItem from "../models/WishlistItem";


const WishlistContext = createContext(null);

const GetInitialState = () => {
  const localWishlist = localStorage.getItem("wishlist");
  return localWishlist ? JSON.parse(localWishlist) : [];
};

export function WishlistContextProvider({ children }) {
  const [wishlist, setWishlist] = useState(GetInitialState);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (incomingProduct, amount = 1, size = "M") => {
    const newWishlistItem = new WishlistItem(incomingProduct, size, amount);

    const sameProductInWishlist = wishlist.find((item) => item.itemId === newWishlistItem.itemId);

    if (sameProductInWishlist) {
      sameProductInWishlist.amount += amount;
      setWishlist([...wishlist]);
    } else {
      setWishlist([...wishlist, newWishlistItem]);
    }

    setToast(`Added ${incomingProduct.name} to wishlist`);
    setTimeout(() => {
      if (toast === null) {
        setToast(null);
      }
    }, 1500);

    return wishlist;
  };

  const removeFromWishlist = (itemId) => {
    setWishlist([...wishlist.filter((x) => x.itemId !== itemId)]);
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      <div className="toasts">{toast && <div className="toast">{toast}</div>}</div>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);
