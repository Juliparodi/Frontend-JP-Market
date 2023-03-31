import Item from "../Item/Item";
import {Container} from "react-bootstrap";
import './itemList.css'

function ItemList({ items, handleAddToCart }) {
  return (
      <Container className='item-list'>
        {items.map((item) => (
            <Item key={item.id} item={item} handleAddToCart={handleAddToCart} />
        ))}
      </Container>
  );
}

export default ItemList;
