import './App.css';
import Item from "./Components/Item/item";
import {useState} from "react";

function App() {

  const [isSelected, setSelected] = useState(true);

  return (
    <div className="App">
    <Item isSelected ={isSelected} onSelectedChange = {setSelected} name = 'juli parodi'/>
    </div>
  );
}

export default App;
