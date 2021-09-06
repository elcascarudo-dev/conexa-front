import React, { useContext } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'

import { types } from '../../types/type';
import { AuthContext } from '../../auth/AuthContext';

import { LoginForm } from './LoginForm';

import './styles.css';
import { useForm } from '../../hooks/useForms';

// const body = {
//   email: 'elcascarudo.dev@gmail.com',
//   password: '123456'
// }


export const LoginScreen = ({ history }) => {

  const { dispatch } = useContext( AuthContext );
  
  const initialForm = {
    email: '',
    password: '',
  }

  const [ formValues, handleInputChange ] = useForm( initialForm );

  const handleLogin = (e) => {
    e.preventDefault();

    
    axios.post('http://localhost:3000/api/auth/login', formValues)
    .then( ({data}) => {

      const lastPath = localStorage.getItem( 'lastPath' ) || '/';

      dispatch({ 
        type: types.login,
        payload: {
          token: data.token
        } 
      });
      
      history.replace( lastPath );
    })
    .catch( err =>{
      Swal.fire( 'Error', 'Datos incorrectos', 'error' );
    });

  }


  return (
    <>
      <LoginForm handleLogin={handleLogin} handleInputChange={handleInputChange} />
    </>
  )
}
