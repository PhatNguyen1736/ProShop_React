import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeScreen/>} exact/>
            <Route path="/product/:id" element={<ProductScreen/>} exact/>
        </Routes> 
      </BrowserRouter>
  );

}

export default App;
