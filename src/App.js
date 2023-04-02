import './App.css';
import Navbar from "./Components/NavBar/Navbar";
import ItemListContainer
  from "./Components/ItemListContainer/ItemListContainer";
import {useState} from "react";

function App() {

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  return (
    <div className="App background-image">
      <Navbar cartItems={cartItems}/>
      <ItemListContainer greeting={'Welcome!'} additionalComment={'Please click on the buttons to check'
          + ' our offer and contact us in case of issues!'} handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
