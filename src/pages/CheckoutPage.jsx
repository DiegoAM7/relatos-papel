import { useNavigate } from "react-router-dom";
import CheckoutSummary from "../components/cart/CheckoutSummary";
import useCart from "../context/UseCart";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  const handleConfirm = () => {
    alert("Compra confirmada con exito");
    clearCart();
    navigate("/home");
  };

  if (cartItems.length === 0) {
    return <p>No hay productos en el carrito.</p>;
  }

  return <CheckoutSummary onConfirm={handleConfirm} />;
};

export default CheckoutPage;