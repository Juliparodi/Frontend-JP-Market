import {Button, Image, Modal} from "react-bootstrap";
import {images} from "../Item/image";
import ItemCount from "../ItemCount/ItemCount";
import './../ModalItem/modal.css'
import paymentMethods from './../ModalItem/paymentMethods.png'
import ModalItem from "../ModalItem/ModalItem";


const ModalCart = ({ items, showModal, handleCloseModal }) => {


  return (
      <Modal centered show={showModal} onHide={handleCloseModal}
             backdropClassName={'modal-backdrop'}>
        <div className={'modal-container'}>
          {items.map((item) => (
              <div key={item.id}>
              <Modal.Header>
                <Button variant="secondary" onClick={handleCloseModal} className={'modal-botton'}>
                  <span className={'x'} aria-hidden="true"> X </span>
                </Button>
                <Modal.Title className={'modal-card-title'}>{item.nameWithDetail}</Modal.Title>
              </Modal.Header>
            <Modal.Body className={'modal-card-text'}>
            <Image src={images[item.img]} alt="image"/>
            <p className={'shipping'}>Arrives free tomorrow! </p>
            <p>Price: ${item.price}</p>
            <p>You can pay with any of this payment methods: </p>
            <Image src={paymentMethods} alt="image" className={'payment-method'}/>
            <p>Stock: {item.stock}</p>
            </Modal.Body>
              </div>
          )) }
        </div>
      </Modal>
  );

};

export default ModalCart;
