import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import { Oval } from 'react-loader-spinner'
import { AiFillStar } from 'react-icons/ai'
import { BiRupee } from 'react-icons/bi'

import Header from '../Header'
import Footer from '../Footer'
import FoodItems from '../FoodItems'
import SomethingWentWrong from '../SomethingWentWrong'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const RestaurantDetails = () => {
  const { id } = useParams()
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [restaurantDetails, setRestaurantDetails] = useState({})
  const [foodItemsList, setFoodItemsList] = useState([])
  const [cartList, setCartList] = useState(() => {
    const stored = localStorage.getItem('cartData')
    return stored ? JSON.parse(stored) : []
  })

  const getFormattedFoodItems = items =>
    items.map(item => ({
      id: item.id,
      name: item.name,
      cost: item.cost,
      rating: item.rating,
      imageUrl: item.image_url,
    }))

  const fetchRestaurantDetails = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const jwtToken = Cookies.get('jwt_token')
    const response = await fetch(`https://apis.ccbp.in/restaurants-list/${id}`, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    })
    if (response.ok) {
      const data = await response.json()
      setRestaurantDetails({
        id: data.id,
        name: data.name,
        cuisine: data.cuisine,
        imageUrl: data.image_url,
        rating: data.rating,
        reviewsCount: data.reviews_count,
        costForTwo: data.cost_for_two,
        location: data.location,
        opensAt: data.opens_at,
      })
      setFoodItemsList(getFormattedFoodItems(data.food_items))
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    fetchRestaurantDetails()
  }, [id])

  const updateLocalStorage = updatedList => {
    localStorage.setItem('cartData', JSON.stringify(updatedList))
    setCartList(updatedList)
  }

  const addFoodItem = itemDetails => {
    const existingItem = cartList.find(item => item.id === itemDetails.id)
    let updatedList
    if (existingItem) {
      updatedList = cartList.map(item =>
        item.id === itemDetails.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    } else {
      updatedList = [
        ...cartList,
        {
          cost: itemDetails.cost,
          quantity: 1,
          id: itemDetails.id,
          imageUrl: itemDetails.imageUrl,
          name: itemDetails.name,
        },
      ]
    }
    updateLocalStorage(updatedList)
  }

  const removeFoodItem = itemDetails => {
    const existingItem = cartList.find(item => item.id === itemDetails.id)
    let updatedList
    if (existingItem && existingItem.quantity > 1) {
      updatedList = cartList.map(item =>
        item.id === itemDetails.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    } else {
      updatedList = cartList.filter(item => item.id !== itemDetails.id)
    }
    updateLocalStorage(updatedList)
  }

  if (apiStatus === apiStatusConstants.inProgress) {
    return (
      <>
        <Header />
        <div className="loader-container" testid="restaurant-details-loader">
          <Oval color="gold" height={40} width={50} />
        </div>
      </>
    )
  }

  if (apiStatus === apiStatusConstants.failure) {
    return (
      <>
        <Header />
        <SomethingWentWrong />
      </>
    )
  }

  const {
    name,
    cuisine,
    imageUrl,
    rating,
    reviewsCount,
    costForTwo,
    location,
  } = restaurantDetails

  return (
    <div className="restaurant-details-page">
      <Header />
      <div className="restaurant-banner">
        <img src={imageUrl} alt="restaurant" className="restaurant-banner-image" />
        <div className="restaurant-banner-info">
          <h2 className="restaurant-banner-name">{name}</h2>
          <p className="restaurant-banner-cuisine">{cuisine}</p>
          <p className="restaurant-banner-location">{location}</p>
          <div className="restaurant-banner-stats">
            <div className="stat-box">
              <p className="stat-value">
                <AiFillStar className="stat-star" />
                {rating}
              </p>
              <p className="stat-label">{reviewsCount}+ Ratings</p>
            </div>
            <div className="stat-divider" />
            <div className="stat-box">
              <p className="stat-value">
                <BiRupee />
                {costForTwo}
              </p>
              <p className="stat-label">Cost for two</p>
            </div>
          </div>
        </div>
      </div>
      <div className="food-items-container">
        <h3 className="food-items-title">Food Items</h3>
        <ul className="food-items-list">
          {foodItemsList.map(item => (
            <FoodItems
              key={item.id}
              itemDetails={item}
              cartList={cartList}
              addFoodItem={addFoodItem}
              removeFoodItem={removeFoodItem}
            />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default RestaurantDetails
