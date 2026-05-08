const OrderHistory = ({ orders }) => {
  return (
    <section className="order-history">
      <h2>Ultimos pedidos</h2>
      {orders.map((order) => (
        <article key={order.id} className="order-item">
          <p>Pedido #{order.id}</p>
          <p>Total: ${order.total.toFixed(2)}</p>
          <p>{order.status}</p>
        </article>
      ))}
    </section>
  );
};

export default OrderHistory;
