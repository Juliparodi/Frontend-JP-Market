import Item from "../Item/Item";
import {Container} from "react-bootstrap";
import './itemList.css'
import {useContext} from "react";
import {CartContext} from "../../context/CartContext";

function ItemList({ items }) {

  return (
      <Container className='item-list'>
        {items.map((item) => (
            <Item key={item.id} item={item} />
        ))}
      </Container>
  );
}

export default ItemList;
