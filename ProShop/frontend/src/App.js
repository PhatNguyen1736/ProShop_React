import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/product/:id" element={<ProductScreen/>}/>
            <Route path="/cart/:id?" element={<CartScreen/>}/>
        </Routes> 
      </BrowserRouter>
  );

}

export default App;
