import React, {useContext} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
  const navigate = useNavigate()
  const auth = useContext(AuthContext)

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    navigate('/')
  }

   

  return (
    
    <nav>
    <div className="nav-wrapper teal darken-1" style={{padding: '0 2rem'}}>
      <a href="/">Item collection</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      
        <li><NavLink to="/profile">Профиль</NavLink></li>
        <li><NavLink to="/">Админка</NavLink></li>
        <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
        
      </ul>
    </div>
  </nav>
  )  
}
