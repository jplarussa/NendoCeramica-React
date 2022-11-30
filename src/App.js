import React from "react";
import Banners from "./components/Banners";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <Banners />
      <Footer />
    </div>
  );
}

export default App;
