import { Card, Button } from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";
import './item.css'


const Item = ({ item, handleAddToCart }) => {

  const { name, price, img } = item;

  return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            ${price}
          </Card.Text>
          <ItemCount item={item} stock={10} initial={1} handleAddToCart={handleAddToCart} />
        </Card.Body>
      </Card>
  );
};

export default Item;


