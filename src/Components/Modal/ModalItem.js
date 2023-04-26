import {Button, Image, Modal} from "react-bootstrap";
import {images} from "../Item/image";
import ItemCount from "../ItemCount/ItemCount";
import './modal.css'
import paymentMethods from './paymentMethods.png'


const ModalItem = ({ item, handleAddToCart, showModal, handleCloseModal }) => {


  const { nameWithDetail, price, img, stock } = item;


  return (
      <Modal centered show={showModal} onHide={handleCloseModal}
             backdropClassName={'modal-backdrop'}>
        <div className={'modal-container'}>
          <Modal.Header>
            <Button variant="secondary" onClick={handleCloseModal} className={'modal-botton'}>
              <span className={'x'} aria-hidden="true"> X </span>
            </Button>
            <Modal.Title className={'modal-card-title'}>{nameWithDetail}</Modal.Title>
          </Modal.Header>
          <Modal.Body className={'modal-card-text'}>
            <Image src={images[img]} alt="image"/>
            <p className={'shipping'}>Arrives free tomorrow! </p>
            <p>Price: ${price}</p>
            <p>You can pay with any of this payment methods: </p>
            <Image src={paymentMethods} alt="image" className={'payment-method'}/>
            <p>Stock: {stock}</p>
          </Modal.Body>
          <Modal.Footer>
            <ItemCount item={item} stock={10} initial={0}
                       handleAddToCart={handleAddToCart}/>
          </Modal.Footer>
        </div>
      </Modal>
  );

};

export default ModalItem;
