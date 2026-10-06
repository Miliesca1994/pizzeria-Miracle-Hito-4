import { useEffect, useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const obtenerPizzas = async () => {
      try {
        const respuesta = await fetch("http://localhost:5000/api/pizzas");
        const data = await respuesta.json();

        setPizzas(data);
      } catch (error) {
        console.error("Error al obtener las pizzas:", error);
      }
    };

    obtenerPizzas();
  }, []);

  return (
    <>
      <Header />

      <div className="container mt-5">
        <div className="row">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;