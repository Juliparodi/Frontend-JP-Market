import cart from './assets/cart.png'
import './cartWidget.css'

const CartWidget = () => {
  return (
      <div className={'harcoded-text'}>
        <img className={'cart-image'} src={cart} alt={"cart-widget"}/>
        0
      </div>
  )
}

export default CartWidget;
