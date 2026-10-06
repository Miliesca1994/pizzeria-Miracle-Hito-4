import { useState } from "react";
import { pizzaCart, pizzas } from "../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // Aumentar cantidad
  const aumentarCantidad = (id) => {
    const nuevoCart = cart.map((pizza) =>
      pizza.id === id
        ? { ...pizza, count: pizza.count + 1 }
        : pizza
    );

    setCart(nuevoCart);
  };

  // Disminuir cantidad
  const disminuirCantidad = (id) => {
    const nuevoCart = cart
      .map((pizza) =>
        pizza.id === id
          ? { ...pizza, count: pizza.count - 1 }
          : pizza
      )
      .filter((pizza) => pizza.count > 0);

    setCart(nuevoCart);
  };

  // Calcular total
  const total = cart.reduce(
    (acumulador, pizza) =>
      acumulador + pizza.price * pizza.count,
    0
  );

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Detalles del pedido:</h3>

      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex align-items-center justify-content-between border-bottom py-3"
        >
          <div className="d-flex align-items-center">
            <img
  src={pizzas.find((item) => item.id === pizza.id)?.img}
  alt={pizza.name}
  style={{
    width: "100px",
    height: "70px",
    objectFit: "cover",
  }}
/>

            <h5 className="ms-3 text-capitalize">
              {pizza.name}
            </h5>
          </div>

          <div className="d-flex align-items-center gap-3">
            <strong>
              ${pizza.price.toLocaleString("es-CL")}
            </strong>

            <button
              className="btn btn-outline-danger"
              onClick={() => disminuirCantidad(pizza.id)}
            >
              -
            </button>

            <span>{pizza.count}</span>

            <button
              className="btn btn-outline-primary"
              onClick={() => aumentarCantidad(pizza.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h3 className="mt-4">
        Total: ${total.toLocaleString("es-CL")}
      </h3>

      <button className="btn btn-dark mt-3">
        Pagar
      </button>
    </div>
  );
};

export default Cart;