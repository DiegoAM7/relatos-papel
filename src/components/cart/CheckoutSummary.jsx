import useCart from "../../components/context/UseCart";

const CheckoutSummary = ({ onConfirm }) => {
    const { cartItems, total, removeFromCart, removeItemFromCart, clearCart } = useCart();

    return (
        <section className="checkout-summary">
            <h2>Resumen de compra</h2>
            {cartItems.map((item) => (
                <div key={item.id} className="checkout-item">
                    <p>
                        {item.title} - {item.quantity} x ${item.price.toFixed(2)}
                    </p>
                    <div className="checkout-item__actions">
                        <button type="button" className="btn btn--ghost" onClick={() => removeFromCart(item.id)}>
                            Quitar 1
                        </button>
                        <button
                            type="button"
                            className="btn btn--ghost"
                            onClick={() => removeItemFromCart(item.id)}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            ))}
            <h3>Total: ${total.toFixed(2)}</h3>
            <div className="checkout-summary__actions">
                <button type="button" className="btn btn--ghost" onClick={clearCart}>
                    Vaciar carrito
                </button>
                <button type="button" className="btn" onClick={onConfirm}>
                    Confirmar compra
                </button>
            </div>
        </section>
    );
};

export default CheckoutSummary;