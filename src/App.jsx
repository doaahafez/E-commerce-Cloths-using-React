import { Route, Routes } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Add from "./pages/Add";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import Store from "./pages/Store";
import ProductDetails from "./pages/ProductDetails";
// import { useState } from "react";
function App() {
  // const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout  />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route
            path="/store"
            element={
              <Store  />
            }
          />
          <Route path="/store/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
