const Navbar = ({ setVista }) => {
  const total = 25000;

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span
        className="navbar-brand"
        style={{ cursor: "pointer" }}
        onClick={() => setVista("home")}
      >
        🍕 Pizzeria Miracle since 1994
      </span>

      <div className="d-flex gap-2">

        <button
          className="btn btn-outline-light"
          onClick={() => setVista("home")}
        >
          🍕 Home
        </button>

        <button
          className="btn btn-outline-light"
          onClick={() => setVista("login")}
        >
          🔐 Login
        </button>

        <button
          className="btn btn-outline-light"
          onClick={() => setVista("register")}
        >
          🔐 Register
        </button>

        <button className="btn btn-warning">
          🛒 Total: ${total.toLocaleString("es-CL")}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;