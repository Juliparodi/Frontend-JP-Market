import './App.css';
import Navbar from "./Components/NavBar/Navbar";
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import ItemListContainer
  from "./Components/ItemListContainer/ItemListContainer";
import {useContext, useState} from "react";
import Contact from "./Components/Contact/contact";
import AboutUs from "./Components/Us/AboutUs";
import ItemDetailContainer
  from "./Components/ItemDetailContainer/ItemDetailContainer";
import {CartProvider} from "./Components/context/CartContext";


function App() {

  return (
      <BrowserRouter>
        <div className="App background-image">
          <CartProvider>
            <Navbar />
              <Routes>
                <Route path="/" element={<ItemListContainer greeting={'Welcome!'} additionalComment={'Welcome aboard! Check our offers and discounts and contact us for any question.'} />} />
                <Route path="/us" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
            {/*<Route path="/item/:itemId" element={<ItemDetailContainer />} />*/}
             </Routes>
          </CartProvider>
        </div>
      </BrowserRouter>
  );
}

export default App;
