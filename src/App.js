import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./context/cartContext";
import Home from "./components/Home/Home";

function App() {
  return (
    <CartContextProvider>
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes id="content">
          <Route index path="/" element={<Home />}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
    </CartContextProvider>
  );
}

export default App;
