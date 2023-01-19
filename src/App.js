import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Products from "./component/Products";
import { Route, Routes } from "react-router-dom";
import Product from "./component/Product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
      </Routes>      
    </>
  );
}

export default App;
