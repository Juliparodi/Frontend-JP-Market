import {Card, Image} from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";
import './itemDetail.css'
import {images} from './../Item/image'

const Item = ({ item, handleAddToCart }) => {

  const {name, price, img, stock, category } = item;


  return (
      <>
        <Card style={{ width: '19rem' }}>
          <Image variant="top" className={'card-image'} src={images[img]} alt="image" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>${price}</Card.Text>
            <Card.Text>Stock disponible: {stock}</Card.Text>
            <Card.Text>Categoria: {category}</Card.Text>
            <Card.Text>Origen: Importado</Card.Text>
            <ItemCount item={item} stock={10} initial={1} handleAddToCart={handleAddToCart} />
          </Card.Body>
        </Card>

      </>
  );
};

export default Item;
