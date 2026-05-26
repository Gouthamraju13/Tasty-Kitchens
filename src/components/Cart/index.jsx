import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsPlus } from 'react-icons/bs'
import { HiOutlineMinusSm } from 'react-icons/hi'
import { FaRupeeSign, FaCheckCircle } from 'react-icons/fa'

import Header from '../Header'
import Footer from '../Footer'
import CartEmpty from '../CartEmpty'
import './index.css'

const Cart = () => {
  const [cartList, setCartList] = useState(() => {
    const stored = localStorage.getItem('cartData')
    return stored ? JSON.parse(stored) : []
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  const updateLocalStorage = updatedList => {
    localStorage.setItem('cartData', JSON.stringify(updatedList))
    setCartList(updatedList)
  }

  const onIncrementQuantity = id => {
    const updatedList = cartList.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
    updateLocalStorage(updatedList)
  }

  const onDecrementQuantity = id => {
    const item = cartList.find(i => i.id === id)
    let updatedList
    if (item.quantity > 1) {
      updatedList = cartList.map(i =>
        i.id === id ? { ...i, quantity: i.quantity - 1 } : i
      )
    } else {
      updatedList = cartList.filter(i => i.id !== id)
    }
    updateLocalStorage(updatedList)
  }

  const totalPrice = cartList.reduce(
    (acc, item) => acc + item.cost * item.quantity,
    0
  )

  const onPlaceOrder = () => {
    setOrderPlaced(true)
    localStorage.removeItem('cartData')
    setCartList([])
  }

  if (orderPlaced) {
    return (
      <div className="cart-page">
        <Header />
        <div className="order-success-container">
          <FaCheckCircle className="success-icon" />
          <h2 className="success-title">Payment Successful!</h2>
          <p className="success-subtitle">
            Thank you for ordering Your payment is successfully completed.
          </p>
          <Link to="/">
            <button type="button" className="go-home-btn">
              Go to Home Page
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="cart-page">
      <Header />
      {cartList.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className="cart-content">
          <h2 className="cart-title">My Cart</h2>
          <div className="cart-table-header">
            <span className="col-item">Item</span>
            <span className="col-quantity">Quantity</span>
            <span className="col-price">Price</span>
          </div>
          <ul className="cart-items-list">
            {cartList.map(item => (
              <li key={item.id} testid="cartItem" className="cart-item">
                <div className="cart-item-left">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <h1 className="cart-item-name">{item.name}</h1>
                </div>
                <div className="cart-item-quantity">
                  <button
                    type="button"
                    testid="decrement-quantity"
                    className="qty-btn"
                    onClick={() => onDecrementQuantity(item.id)}
                  >
                    <HiOutlineMinusSm />
                  </button>
                  <span testid="item-quantity" className="qty-count">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    testid="increment-quantity"
                    className="qty-btn"
                    onClick={() => onIncrementQuantity(item.id)}
                  >
                    <BsPlus />
                  </button>
                </div>
                <div className="cart-item-price">
                  <FaRupeeSign className="rupee-icon" />
                  <span>{item.cost * item.quantity}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <div className="order-total">
              <h1 className="order-total-label">Order Total:</h1>
              <div className="order-total-value">
                <FaRupeeSign />
                <span testid="total-price">{totalPrice}</span>
              </div>
            </div>
            <button
              type="button"
              className="place-order-btn"
              onClick={onPlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Cart
