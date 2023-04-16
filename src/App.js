import './App.css';
import Navbar from "./Components/NavBar/Navbar";
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import ItemListContainer
  from "./Components/ItemListContainer/ItemListContainer";
import {useState} from "react";
import Contact from "./Components/Contact/contact";
import AboutUs from "./Components/Us/AboutUs";
import ItemDetailContainer
  from "./Components/ItemDetailContainer/ItemDetailContainer";


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
            <Route path="/" element={<ItemListContainer greeting={'Welcome!'} additionalComment={'Welcome aboard! Check our offers and discounts and contact us for any question.'} handleAddToCart={handleAddToCart} />} />
            <Route path="/us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            {/*<Route path="/item/:itemId" element={<ItemDetailContainer />} />*/}
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
