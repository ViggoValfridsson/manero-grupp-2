import { ShoppingBag } from "lucide-react";
import PageIconCircle from "../components/PageIconCircle";

export default function Cart() {
  return (
    <div className="cart-page">
      <PageIconCircle icon={<ShoppingBag />} />
    </div>
  );
}
