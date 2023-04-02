import ItemList from "../ItemList/ItemList";
import {useEffect, useState} from "react";
import {getItems} from "../../resources/productsMock";
import './itemListContainer.css'

const ItemListContainer = ({greeting, additionalComment, handleAddToCart}) => {

  const [items, setItems] = useState([])

  useEffect(() => {
    getItems()
      .then((response) => setItems(response))
      .catch((error) => console.error(error))
  })

  return (
  <div className='item-container'>
    <h1> {greeting} </h1>
    <h5> {additionalComment}</h5>
    <ItemList items={items} handleAddToCart={handleAddToCart} />
  </div>
  )
}

export default ItemListContainer;
