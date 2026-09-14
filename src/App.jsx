import { useState } from "react";

import Navbar from "./componentes/Navbar";
import Home from "./componentes/Home";
import Register from "./componentes/Register";
import Login from "./componentes/Login";
import Footer from "./componentes/Footer";

function App() {
  const [vista, setVista] = useState("home");

  return (
    <>
      <Navbar setVista={setVista} />

      {vista === "home" && <Home />}
      {vista === "register" && <Register />}
      {vista === "login" && <Login />}

      <Footer />
    </>
  );
}

export default App;