import useCart from "../../components/context/UseCart";
import CartItem from "./CartItem";

const CartDrawer = () => {
    const { cartItems, removeFromCart, removeItemFromCart, clearCart, total } = useCart();

    return (
        <aside className="cart-drawer">
            <h3>Carrito</h3>
            {cartItems.length === 0 ? (
                <p>Tu carrito esta vacio.</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onRemoveOne={removeFromCart}
                            onDelete={removeItemFromCart}
                        />
                    ))}
                    <p className="cart-total">Total: ${total.toFixed(2)}</p>
                    <button type="button" className="btn btn--ghost" onClick={clearCart}>
                        Vaciar carrito
                    </button>
                </>
            )}
        </aside>
    );
};

export default CartDrawer;