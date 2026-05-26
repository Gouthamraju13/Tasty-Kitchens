import { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { HiOutlineMinusSm } from 'react-icons/hi'
import { FaStar } from 'react-icons/fa'
import './index.css'

const FoodItems = ({ itemDetails, cartList, addFoodItem, removeFoodItem }) => {
  const { id, name, cost, imageUrl, rating } = itemDetails

  const cartItem = cartList.find(item => item.id === id)
  const itemCount = cartItem ? cartItem.quantity : 0

  const onClickAdd = () => {
    addFoodItem({ ...itemDetails, quantity: 1 })
  }

  const onClickDecrement = () => {
    removeFoodItem(itemDetails)
  }

  const onClickIncrement = () => {
    addFoodItem({ ...itemDetails, quantity: 1 })
  }

  return (
    <li testid="foodItem" className="food-item">
      <img src={imageUrl} alt={name} className="food-image" />
      <div className="food-info">
        <h4 className="food-name">{name}</h4>
        <p className="food-cost">{cost}</p>
        <div className="food-rating-container">
         <FaStar className="star-icon" />
          <p className="food-rating">{rating}</p>
        </div>
        <div className="food-quantity-container">
          {itemCount === 0 ? (
            <button type="button" className="add-btn" onClick={onClickAdd}>
              Add
            </button>
          ) : (
            <div className="quantity-control">
              <button
                type="button"
                testid="decrement-count"
                className="quantity-btn"
                onClick={onClickDecrement}
              >
                <HiOutlineMinusSm />
              </button>
              <span testid="active-count" className="item-count">
                {itemCount}
              </span>
              <button
                type="button"
                testid="increment-count"
                className="quantity-btn"
                onClick={onClickIncrement}
              >
                <BsPlus />
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

export default FoodItems
