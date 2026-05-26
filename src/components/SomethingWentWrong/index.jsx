import './index.css'

const SomethingWentWrong = ({ onRetry }) => (
  <div className="error-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
      alt="something went wrong"
      className="error-image"
    />
    <h3 className="error-title">Something Went Wrong</h3>
    <p className="error-subtitle">Please try again later.</p>
    {onRetry && (
      <button type="button" className="retry-btn" onClick={onRetry}>
        Retry
      </button>
    )}
  </div>
)

export default SomethingWentWrong
