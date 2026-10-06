import Navbar from "./componentes/Navbar";
import Pizza from "./componentes/Pizza";
import Footer from "./componentes/Footer";

// Los utilizaremos nuevamente en próximos hitos
// import Home from "./componentes/Home";
// import Cart from "./componentes/Cart";
// import Register from "./componentes/Register";
// import Login from "./componentes/Login";

function App() {
  return (
    <>
      <Navbar />

      {/* <Home /> */}
      {/* <Cart /> */}
      {/* <Register /> */}
      {/* <Login /> */}

      <Pizza />

      <Footer />
    </>
  );
}

export default App;