import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import {getItemById} from "../../resources/productsMock";
import './itemDetailContainer.css'
import {useParams} from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer({handleAddToCart }) {

  const [item, setItem] = useState(null);

  const {itemId} = useParams();

  console.log(itemId)

  useEffect(() => {
    getItemById(itemId)
    .then(response => setItem(response))
    .catch(error => console.log(error))
  }, [itemId])

  return (
      <Container className='item-detail-container'>
        {item ? <ItemDetail key={item.id} item={item} handleAddToCart={handleAddToCart} /> : <p>Loading...</p>}
      </Container>
  );
}

export default ItemDetailContainer;
