import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'
import { Oval } from 'react-loader-spinner'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Header from '../Header'
import Footer from '../Footer'
import AllRestaurants from '../AllRestaurants'
import RestaurantsHeader from '../RestaurantsHeader'
import SomethingWentWrong from '../SomethingWentWrong'
import { sortByOptions } from '../../App'
import './index.css'

const LIMIT = 9
const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const Home = () => {
  const [offersApiStatus, setOffersApiStatus] = useState(apiStatusConstants.initial)
  const [restaurantsApiStatus, setRestaurantsApiStatus] = useState(apiStatusConstants.initial)
  const [offersList, setOffersList] = useState([])
  const [restaurantsList, setRestaurantsList] = useState([])
  const [activeSortByValue, setActiveSortByValue] = useState(sortByOptions[1].value)
  const [activePage, setActivePage] = useState(1)
  const [totalRestaurantsCount, setTotalRestaurantsCount] = useState(0)

  const getUpdatedData = restaurant => ({
    id: restaurant.id,
    name: restaurant.name,
    cuisine: restaurant.cuisine,
    imageUrl: restaurant.image_url,
    userRating: {
      rating: restaurant.user_rating.rating,
      totalReviews: restaurant.user_rating.total_reviews,
      ratingColor: restaurant.user_rating.rating_color,
      ratingText: restaurant.user_rating.rating_text,
    },
  })

  const fetchOffers = async () => {
    setOffersApiStatus(apiStatusConstants.inProgress)
    const jwtToken = Cookies.get('jwt_token')
    const response = await fetch('https://apis.ccbp.in/restaurants-list/offers', {
      headers: { Authorization: `Bearer ${jwtToken}` },
    })
    if (response.ok) {
      const data = await response.json()
      setOffersList(data.offers)
      setOffersApiStatus(apiStatusConstants.success)
    } else {
      setOffersApiStatus(apiStatusConstants.failure)
    }
  }

  const fetchRestaurants = async () => {
    setRestaurantsApiStatus(apiStatusConstants.inProgress)
    const jwtToken = Cookies.get('jwt_token')
    const offset = (activePage - 1) * LIMIT
    const url = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${LIMIT}&sort_by_rating=${activeSortByValue}`
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    })
    if (response.ok) {
      const data = await response.json()
      setRestaurantsList(data.restaurants.map(getUpdatedData))
      setTotalRestaurantsCount(data.total)
      setRestaurantsApiStatus(apiStatusConstants.success)
    } else {
      setRestaurantsApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    fetchOffers()
  }, [])

  useEffect(() => {
    fetchRestaurants()
  }, [activeSortByValue, activePage])

  const onChangeSortBy = value => {
    setActiveSortByValue(value)
    setActivePage(1)
  }

  const onClickLeftPagination = () => {
    if (activePage > 1) setActivePage(prev => prev - 1)
  }

  const onClickRightPagination = () => {
    const totalPages = Math.ceil(totalRestaurantsCount / LIMIT)
    if (activePage < totalPages) setActivePage(prev => prev + 1)
  }

  const totalPages = Math.ceil(totalRestaurantsCount / LIMIT)

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  const renderOffersSlider = () => {
    if (offersApiStatus === apiStatusConstants.inProgress) {
      return (
        <div className="loader-container" testid="restaurants-offers-loader">
          <Oval color="gold" height={40} width={50} />
        </div>
      )
    }
    if (offersApiStatus === apiStatusConstants.failure) {
      return <SomethingWentWrong />
    }
    return (
      <div className="carousel-container">
        <Slider {...sliderSettings}>
          {offersList.map(offer => (
            <div key={offer.id} className="carousel-slide">
              <img src={offer.image_url} alt="offer" className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>
    )
  }

  const renderRestaurants = () => {
    if (restaurantsApiStatus === apiStatusConstants.inProgress) {
      return (
        <div className="loader-container" testid="restaurants-list-loader">
          <Oval color="gold" height={40} width={50} />
        </div>
      )
    }
    if (restaurantsApiStatus === apiStatusConstants.failure) {
      return <SomethingWentWrong />
    }
    return (
      <>
        <AllRestaurants restaurantsList={restaurantsList} />
        <div className="pagination-container">
          <button
            type="button"
            testid="pagination-left-button"
            className="pagination-btn"
            onClick={onClickLeftPagination}
            disabled={activePage === 1}
          >
            {'<'}
          </button>
          <span testid="active-page-number" className="active-page">
            {activePage}
          </span>
          <span className="page-total"> of {totalPages}</span>
          <button
            type="button"
            testid="pagination-right-button"
            className="pagination-btn"
            onClick={onClickRightPagination}
            disabled={activePage === totalPages}
          >
            {'>'}
          </button>
        </div>
      </>
    )
  }

  return (
    <div className="home-page">
      <Header />
      {renderOffersSlider()}
      <div className="home-content">
        <RestaurantsHeader
          sortByOptions={sortByOptions}
          activeSortById={activeSortByValue}
          onChangeSortBy={onChangeSortBy}
        />
        {renderRestaurants()}
      </div>
      <Footer />
    </div>
  )
}

export default Home
