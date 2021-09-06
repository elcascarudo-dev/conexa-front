import React from 'react'
import { Link } from 'react-router-dom'

export const LoginForm = ( {handleLogin, handleInputChange} ) => {
  return (
    <div className="body text-center">
      <div className="form-signin">
        <form onSubmit={ handleLogin }>
          
          <h1 className="h3 mb-3 fw-normal">Login</h1>
    
          <div className="form-floating m-2">
            <input onChange={ handleInputChange } name="email" type="email" className="form-control" id="floatingInput" />
            <label for="floatingInput">Email</label>
          </div>
          <div className="form-floating m-2">
            <input onChange={ handleInputChange } name="password" type="password" className="form-control" id="floatingPassword"  />
            <label for="floatingPassword">Contraseña</label>
          </div>
      
          <button 
            className="w-100 btn btn-lg btn-primary" 
            type="submit"
          >
            Ingresar
          </button>
        </form>
        <Link to="/register">¡Si no tenes usuario registrate!</Link>
      </div>
    </div>
  )
}
