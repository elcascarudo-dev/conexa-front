import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { PostView } from './PostView';
import { Spinner } from '../../shared/Spinner';
import { AuthContext } from '../../auth/AuthContext';

export const PostsScreen = () => {

  const { user:{ token } } = useContext( AuthContext );

  const [spinner, setSpinner] = useState(false);
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    
    axios.get( `http://localhost:3000/api/posts?token=${ token }`)
          .then( ({data}) => {
            setPosts( data.data )
            setSpinner( data.ok )
          })

  }, [ token ])


  return (
    <div className="container my-3">
      <h4>Entradas</h4>
      <hr />

      {
        spinner
          ? posts.map( (posts) => <PostView key={ posts.id } post={ posts } /> )
          : <Spinner />
      }
    </div>
  )
}
