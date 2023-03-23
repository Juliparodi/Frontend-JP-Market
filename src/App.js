import './App.css';
import Navbar from "./Components/NavBar/Navbar";
import ItemListContainer
  from "./Components/ItemListContainer/ItemListContainer";

function App() {

  //const [isSelected, setSelected] = useState(true);

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Welcome!'} additionalComment={'Please click on the buttons to check'
          + ' our offer and contact us in case of issues!'} />
      {/*<Item isSelected ={isSelected} onSelectedChange = {setSelected} name = 'juli parodi'/>*/}
    </div>
  );
}

export default App;
