import './App.css';
import Navbar from "./Components/NavBar/Navbar";
import ItemListContainer
  from "./Components/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount/ItemCount";
import CartWidget from "./Components/CartWidget/CartWidget";
import {useState} from "react";

function App() {

  const [quantity1, setQuantity] = useState(0);

  return (
    <div className="App">
      <Navbar quantity = {quantity1}/>
      <ItemListContainer greeting={'Welcome!'} additionalComment={'Please click on the buttons to check'
          + ' our offer and contact us in case of issues!'} />
      <ItemCount stock={10} initial={1} onAdd={(quantity) => setQuantity(quantity)} />
    </div>
  );
}

export default App;
