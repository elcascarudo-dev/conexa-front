import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/type';

export const NavBar = () => {

  const { user:{ logged }, dispatch } = useContext( AuthContext );
  const history = useHistory();

  const handleLogout = () => {
    dispatch({ type: types.logout });
    history.replace( '/' );
  }
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link" to="/">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link" to="/photos">Fotos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link" to="/posts">Entradas</NavLink>
              </li>
            </ul>
            <div className="d-flex">

              {
                logged
                ? <button className="btn btn-outline-success mx-3" onClick={ handleLogout }>Salir</button>
                : <Link className="btn btn-outline-success" to="/login">Ingresar</Link>
              }
              
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
