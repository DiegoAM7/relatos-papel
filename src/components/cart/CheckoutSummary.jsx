import useCart from "../../context/UseCart";

const CheckoutSummary = ({ onConfirm }) => {
    const { cartItems, total } = useCart();

    return (
        <section className="checkout-summary">
            <h2>Resumen de compra</h2>
            {cartItems.map((item) => (
                <p key={item.id}>
                    {item.title} - {item.quantity} x ${item.price.toFixed(2)}
                </p>
            ))}
            <h3>Total: ${total.toFixed(2)}</h3>
            <button type="button" className="btn" onClick={onConfirm}>
                Confirmar compra
            </button>
        </section>
    );
};

export default CheckoutSummary;