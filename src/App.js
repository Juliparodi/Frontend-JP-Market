import './App.css';
import Navbar from "./Components/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer
  from "./Components/ItemListContainer/ItemListContainer";
import {useState} from "react";
import Contact from "./Components/Contact/contact";
import Us from "./Components/Us/Us";

function App() {

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  return (
      <BrowserRouter>
        <div className="App background-image">
          <Navbar cartItems={cartItems}/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={'Welcome!'} additionalComment={'Please click on the buttons to check our offer and contact us in case of issues!'} handleAddToCart={handleAddToCart} />} />
            <Route path="/us" element={<Us />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
