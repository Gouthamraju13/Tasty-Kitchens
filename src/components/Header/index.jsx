import { Link, useNavigate, useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './index.css'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login', { replace: true })
  }

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo-link">
        <img
          src="https://res.cloudinary.com/dik5nceif/image/upload/v1779692372/Tasty-Kitchens.png"
          alt="website logo"
          className="nav-logo"
        />
        <span className="nav-brand">Tasty Kitchens</span>
      </Link>
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active-link' : ''}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className={`nav-link ${location.pathname === '/cart' ? 'active-link' : ''}`}
          >
            <AiOutlineShoppingCart className="cart-icon-desktop" />
            <span className="cart-text">Cart</span>
          </Link>
        </li>
        <li>
          <button type="button" className="logout-btn" onClick={onClickLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Header
