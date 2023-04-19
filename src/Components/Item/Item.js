import {Button, Card, Image} from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";
import './item.css'
import {images} from './image'
import {Link} from "react-router-dom";
import ModalItem from "../Modal/ModalItem";
import {useContext, useState} from "react";
import {CartContext} from "../context/CartContext";

const Item = ({ item }) => {

  const { handleAddToCart } = useContext(CartContext); // Get handleAddToCart from CartContext


  const { name, price, img, stock } = item;


  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);


  return (
      <>
        <Card style={{ width: '19rem' }}>
          <Image variant="top" className={'card-image'} src={images[img]} alt="image" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>${price}</Card.Text>
            <Card.Text>Stock disponible: {stock}</Card.Text>
            <Card.Footer>
              <Button onClick={handleShowModal}>Ver Detalle</Button>
              {/*<Link to={`/item/${id}`} className={'Option'}>Ver Detalle</Link>*/}
            </Card.Footer>
            <ItemCount item={item} stock={10} initial={1} />
          </Card.Body>
        </Card>
        <ModalItem item={item} handleAddToCart={handleAddToCart} showModal={showModal} handleCloseModal={handleCloseModal} />

      </>
  );
};

export default Item;


