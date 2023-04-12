import {Button, Image, Modal} from "react-bootstrap";
import {images} from "../Item/image";
import ItemCount from "../ItemCount/ItemCount";
import './modal.css'


const ModalItem = ({ item, handleAddToCart, showModal, handleCloseModal }) => {


  const { name, price, img, stock } = item;


  return (
      <Modal centered show={showModal} onHide={handleCloseModal}
             backdropClassName={'modal-backdrop'}>
        <div className={'modal-container'}>
          <Modal.Header>
            <Button variant="secondary" onClick={handleCloseModal}>
              <span aria-hidden="true">&times;</span>
            </Button>
            <Modal.Title className={'modal-card-title'}>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className={'modal-card-text'}>
            <Image src={images[img]} alt="image"/>
            <p>Price: ${price}</p>
            <p>Stock: {stock}</p>
          </Modal.Body>
          <Modal.Footer>
            <ItemCount item={item} stock={10} initial={1}
                       handleAddToCart={handleAddToCart}/>
          </Modal.Footer>
        </div>
      </Modal>
  );

};

export default ModalItem;
