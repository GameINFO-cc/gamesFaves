import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1 style={{display: 'flex', padding: '10px', paddingTop: '10px'}}>
      GamesFAVE
    </h1>
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link
            to="/home"
            style={{
              textDecoration: 'none',
              fontWeight: 'bold',
              color: 'white',
              border: '2px solid whitesmoke',
              padding: '10px',
              borderRadius: '13px'
            }}
          >
            Home
          </Link>
          <Link
            to="/favorites"
            style={{
              textDecoration: 'none',
              fontWeight: 'bold',
              color: 'white',
              border: '2px solid whitesmoke',
              padding: '10px',
              borderRadius: '13px'
            }}
          >
            Favorites
          </Link>
          <a
            style={{
              textDecoration: 'none',
              fontWeight: 'bold',
              color: 'white',
              border: '2px solid whitesmoke',
              padding: '10px',
              borderRadius: '13px'
            }}
            href="#"
            onClick={handleClick}
          >
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link
            style={{
              textDecoration: 'none',
              fontWeight: 'bold',
              color: 'white',
              border: '2px solid whitesmoke',
              padding: '10px',
              borderRadius: '13px'
            }}
            to="/login"
          >
            Login
          </Link>
          <Link
            style={{
              textDecoration: 'none',
              fontWeight: 'bold',
              color: 'white',
              border: '2px solid whitesmoke',
              padding: '10px',
              borderRadius: '13px'
            }}
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
