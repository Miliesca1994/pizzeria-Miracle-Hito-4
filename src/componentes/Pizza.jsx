import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const obtenerPizza = async () => {
      try {
        const respuesta = await fetch(
          "http://localhost:5000/api/pizzas/p001"
        );

        const data = await respuesta.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
      }
    };

    obtenerPizza();
  }, []);

  if (!pizza) {
    return <p className="text-center mt-5">Cargando pizza...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <img 
  src={pizza.img}
  className="card-img-top"
  alt={pizza.name}
  style={{
    height: "350px",
    objectFit: "cover",
  }}
/>

        <div className="card-body">
          <h2 className="text-capitalize">{pizza.name}</h2>

          <p>{pizza.desc}</p>

          <h5>Ingredientes:</h5>

          <ul>
            {pizza.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h3>
            Precio: ${pizza.price.toLocaleString("es-CL")}
          </h3>

          <button className="btn btn-success mt-3">
            Añadir al carrito 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;