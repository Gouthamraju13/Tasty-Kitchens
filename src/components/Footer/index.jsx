import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <footer className="footer">
    <div className="footer-logo-container">
      <img
        src="https://res.cloudinary.com/dik5nceif/image/upload/v1779692372/Tasty-Kitchens.png"
        alt="website-footer-logo"
        className="footer-logo"
      />
      <h1 className="footer-brand">Tasty Kitchens</h1>
    </div>
    <p className="footer-tagline">
      The only thing we are serious about is food. Contact us on:
    </p>
    <div className="footer-icons">
      <FaPinterestSquare
        testid="pintrest-social-icon"
        className="footer-icon"
      />
      <FaInstagram testid="instagram-social-icon" className="footer-icon" />
      <FaTwitter testid="twitter-social-icon" className="footer-icon" />
      <FaFacebookSquare testid="facebook-social-icon" className="footer-icon" />
    </div>
  </footer>
)

export default Footer
