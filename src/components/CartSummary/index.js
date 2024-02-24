// Write your code here
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Payment from '../Payment'
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const items = cartList.length
      const totalPrice = cartList.reduce(
        (acc, item) => acc + item.quantity + item.price,
        0,
      )
      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span>Rs{' '}
              {totalPrice}
              /-
            </h1>
            <p className="cart-items-count">{items} Items in cart</p>
            <Popup
              modal
              trigger={
                <button className="checkout-btn" type="button">
                  Checkout
                </button>
              }
              position="top left"
            >
              {close => <Payment close={close} />}
            </Popup>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
