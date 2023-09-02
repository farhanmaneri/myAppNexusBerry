import React, { useState } from "react";
import MenuPage from "./pages/MenuPage";
import Header from "../src/components/Header";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import CartViewOffCanvas from "./components/CartViewOffCanvas";
export default function App() {
  const [cartCounter, setCartCounter] = useState(0);

  const increment = () => {
    setCartCounter(cartCounter + 1);
  };

  return (
    <>
      <div className="container-fluid bg-black">
        <Header cartCounter={cartCounter} />

        <MenuPage increment={increment} />
        <Pagination />
        <Footer/>
<CartViewOffCanvas/>
      </div>
    </>
  );
}
