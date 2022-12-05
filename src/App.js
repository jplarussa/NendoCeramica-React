import React from "react";
import Banners from "./components/Banners";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/items/" element={<ItemListContainer />} />
        <Route exact path="/items/:id" element={<ItemListContainer />} />
        <Route exact path="/category/:id" element={<ItemListContainer />} />
        <Route exact path="/banners" element={<Banners />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
