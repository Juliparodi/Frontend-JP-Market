import './App.css';
import Navbar from "./Components/NavBar/Navbar";
import ItemListContainer
  from "./Components/ItemListContainer/ItemListContainer";
import {useState} from "react";
import ItemList from "./Components/ItemList/ItemList";

function App() {

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  return (
    <div className="App">
      <Navbar cartItems={cartItems}/>
      <ItemListContainer greeting={'Welcome!'} additionalComment={'Please click on the buttons to check'
          + ' our offer and contact us in case of issues!'} />
      <ItemList handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
