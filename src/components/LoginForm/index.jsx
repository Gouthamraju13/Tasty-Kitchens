import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const token = Cookies.get('jwt_token')
    if (token) {
      navigate('/', {replace: true})
    }
  }, [])

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    navigate('/', {replace: true})
  }

  const onSubmitFailure = errorMessage => {
    setErrorMsg(errorMessage)
  }

  const onSubmit = async e => {
    e.preventDefault()
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  return (
    <div className="login-page">
      <div className="login-image-container">
        <img
          src="https://res.cloudinary.com/dik5nceif/image/upload/v1779692372/Tasty-Kitchens.png"
          alt="website login"
          className="login-image"
        />
      </div>
      <div className="login-form-container">
        <div className="login-logo-container">
          <img
            src="https://res.cloudinary.com/dik5nceif/image/upload/v1779692372/Tasty-Kitchens.png"
            alt="website logo"
            className="login-logo"
          />
          <h1 className="login-brand-name">Tasty Kitchens</h1>
        </div>
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="username">
              USERNAME
            </label>
            <input
              id="username"
              type="text"
              className="form-input"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              className="form-input"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          {errorMsg && <p className="error-msg">*{errorMsg}</p>}
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
