import { Card } from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";
import './item.css'
import Button from "react-bootstrap/Button";


const Item = ({ item, handleAddToCart }) => {

  const { name, price, img, stock } = item;

  return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            ${price}
          </Card.Text>
          <Card.Text>
            Stock disponible: {stock}
          </Card.Text>
          <Card.Footer>
            <Button> Ver Detalle </Button>
          </Card.Footer>
          <ItemCount item={item} stock={10} initial={1} handleAddToCart={handleAddToCart} />
        </Card.Body>
      </Card>
  );
};

export default Item;


