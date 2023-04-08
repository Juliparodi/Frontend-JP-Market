import {Card, Image, Modal, Button} from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";
import './item.css'
import {images} from './image'
import {useState} from "react";

const Item = ({ item, handleAddToCart }) => {

  const { name, price, img, stock } = item;

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
      <>
        <Card style={{ width: '18rem' }}>
          <Image className={'card-image'} src={images[img]} alt="image" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>${price}</Card.Text>
            <Card.Text>Stock disponible: {stock}</Card.Text>
            <Card.Footer>
              <Button onClick={handleShowModal}>Ver Detalle</Button>
            </Card.Footer>
            <ItemCount item={item} stock={10} initial={1} handleAddToCart={handleAddToCart} />
          </Card.Body>
        </Card>
        <Modal centered show={showModal} onHide={handleCloseModal} backdropClassName={'modal-backdrop'}>
          <div className={'modal-container'}>
            <Modal.Header>
              <Button variant="secondary" onClick={handleCloseModal}>
                <span aria-hidden="true">&times;</span>
              </Button>
              <Modal.Title className={'modal-card-title'}>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className={'modal-card-text'}>
              <Image src={images[img]} alt="image" />
              <p>Price: ${price}</p>
              <p>Stock: {stock}</p>
            </Modal.Body>
            <Modal.Footer>
              <ItemCount item={item} stock={10} initial={1} handleAddToCart={handleAddToCart} />
            </Modal.Footer>
          </div>
        </Modal>
      </>
  );
};

export default Item;


