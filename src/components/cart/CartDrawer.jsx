import useCart from "../../context/useCart";
import CartItem from "./CartItem";

const CartDrawer = () => {
    const { cartItems, removeFromCart, total } = useCart();

    return (
        <aside className="cart-drawer">
            <h3>Carrito</h3>
            {cartItems.length === 0 ? (
                <p>Tu carrito esta vacio.</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} onRemove={removeFromCart} />
                    ))}
                    <p className="cart-total">Total: ${total.toFixed(2)}</p>
                </>
            )}
        </aside>
    );
};

export default CartDrawer;