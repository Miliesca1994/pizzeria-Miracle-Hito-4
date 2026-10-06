const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <img
          src={img}
          className="card-img-top"
          alt={name}
        />

        <div className="card-body">
          <h3 className="card-title">{name}</h3>

          <h4 className="text-danger">
            ${price.toLocaleString("es-CL")}
          </h4>

          <p className="card-text">
            <strong>Ingredientes:</strong>
          </p>

          <ul>
           {ingredients?.map((ingredient, index) => (
  <li key={index}>{ingredient}</li>
))}
          </ul>

          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-primary">
              Ver más
            </button>

            <button className="btn btn-success">
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;