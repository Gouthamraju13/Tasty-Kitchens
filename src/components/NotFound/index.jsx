import { Link } from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
      alt="not found"
      className="not-found-image"
    />
    <h2 className="not-found-title">Page Not Found</h2>
    <p className="not-found-subtitle">
      We are sorry, the page you requested could not be found.
    </p>
    <Link to="/">
      <button type="button" className="go-home-btn">
        Home Page
      </button>
    </Link>
  </div>
)

export default NotFound
