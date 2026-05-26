import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import './index.css'

const AllRestaurants = ({ restaurantsList }) => (
  <ul className="restaurants-list">
    {restaurantsList.map(restaurant => {
      const {
        id,
        name,
        cuisine,
        imageUrl,
        userRating: { rating, totalReviews, ratingColor },
      } = restaurant

      return (
        <li key={id} testid="restaurant-item" className="restaurant-item">
          <Link to={`/restaurant/${id}`} className="restaurant-link">
            <img
              src={imageUrl}
              alt="restaurant"
              className="restaurant-image"
            />
            <div className="restaurant-info">
              <h3 className="restaurant-name">{name}</h3>
              <p className="restaurant-cuisine">{cuisine}</p>
              <div className="restaurant-rating" style={{ color: `#${ratingColor}` }}>
                <AiFillStar className="star-icon" />
                <span className="rating-value">{rating}</span>
                <span className="rating-reviews">({totalReviews}+)</span>
              </div>
            </div>
          </Link>
        </li>
      )
    })}
  </ul>
)

export default AllRestaurants
