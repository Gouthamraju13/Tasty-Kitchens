import { Link } from 'react-router-dom'
import './index.css'

const CartEmpty = () => (
  <div className="cart-empty-container">
    <img
      src="https://res.cloudinary.com/dik5nceif/image/upload/v1779707804/Empty-Cart.png"
      alt="empty cart"
      className="empty-cart-image"
    />
    <h2 className="empty-cart-title">No Order Yet!</h2>
    <p className="empty-cart-subtitle">
      Your cart is empty. Add something from the menu.
    </p>
    <Link to="/">
      <button type="button" className="order-now-btn">
        Order Now
      </button>
    </Link>
  </div>
)

export default CartEmpty
