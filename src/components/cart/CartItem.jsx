const CartItem = ({ item, onRemoveOne, onDelete }) => {
    return (
        <div className="cart-item">
            <div>
                <h4>{item.title}</h4>
                <p>
                    {item.quantity} x ${item.price.toFixed(2)}
                </p>
            </div>
            <div className="cart-item__actions">
                <button type="button" onClick={() => onRemoveOne(item.id)}>
                    Quitar 1
                </button>
                <button type="button" onClick={() => onDelete(item.id)}>
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default CartItem;