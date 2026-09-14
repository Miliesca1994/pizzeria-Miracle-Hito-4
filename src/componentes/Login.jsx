import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const validarLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setMensaje("Todos los campos son obligatorios.");
      setTipoMensaje("danger");
      return;
    }

    if (password.length < 6) {
      setMensaje("La contraseña debe tener al menos 6 caracteres.");
      setTipoMensaje("danger");
      return;
    }

    setMensaje("Inicio de sesión exitoso.");
    setTipoMensaje("success");

    setEmail("");
    setPassword("");
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Iniciar Sesión
            </h2>

            {mensaje && (
              <div className={`alert alert-${tipoMensaje}`}>
                {mensaje}
              </div>
            )}

            <form onSubmit={validarLogin}>

              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingresa tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Contraseña
                </label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Iniciar Sesión
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;