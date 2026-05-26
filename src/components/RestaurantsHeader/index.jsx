import { BsFilterLeft } from 'react-icons/bs'
import './index.css'

const RestaurantsHeader = ({ sortByOptions, activeSortById, onChangeSortBy }) => (
  <div className="restaurants-header">
    <div className="restaurants-title-section">
      <h2 className="restaurants-title">Popular Restaurants</h2>
      <p className="restaurants-subtitle">
        Select Your favourite restaurant special dish and make your day happy...
      </p>
    </div>
    <div className="sort-by-container">
      <BsFilterLeft className="filter-icon" />
      <p className="sort-label">Sort by</p>
      <select
        className="sort-select"
        value={activeSortById}
        onChange={e => onChangeSortBy(e.target.value)}
      >
        {sortByOptions.map(option => (
          <option key={option.id} value={option.value}>
            {option.displayText}
          </option>
        ))}
      </select>
    </div>
  </div>
)

export default RestaurantsHeader
