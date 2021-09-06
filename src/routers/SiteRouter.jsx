import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { AuthContext } from '../auth/AuthContext'
import { PrivateRouter } from './PrivateRouter'

import { NavBar } from '../shared/navbar'

import { HomeSceen } from '../components/HomeScreen'
import { PhotosScreen } from '../components/PhotosScreen'
import { PostsScreen } from '../components/PostsScreen'

export const SiteRouter = () => {

  const { user:{ logged } } = useContext( AuthContext );

  return (
    <>
      <NavBar />

      <Switch>
        <PrivateRouter exact isAuth={ logged } path="/posts"  component={  PostsScreen } />
        <PrivateRouter exact isAuth={ logged } path="/photos" component={ PhotosScreen } />
        
        <Route exact path="/" component={ HomeSceen } />

        <Redirect to="/" />
      </Switch>
    </>
  )
}
