const CartItem = ({ item, onRemove }) => {
    return (
        <div className="cart-item">
            <div>
                <h4>{item.title}</h4>
                <p>
                    {item.quantity} x ${item.price.toFixed(2)}
                </p>
            </div>
            <button type="button" onClick={() => onRemove(item.id)}>
                Quitar
            </button>
        </div>
    );
};

export default CartItem;