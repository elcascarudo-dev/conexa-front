import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Rutas
import { SiteRouter } from './SiteRouter'

// Componentes
import { LoginScreen } from '../components/LoginScreen'
import { RegisterScreen } from '../components/RegisterScreen'


export const AppRouter = () => {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/login"  component={ LoginScreen } />
        <Route exact path="/register"  component={ RegisterScreen } />
        
        <Route path="/"       component={ SiteRouter } />
      </Switch>
    </Router>
  )
}
