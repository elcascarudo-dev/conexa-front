import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { PhotosView } from './PhotosView';
import { Spinner } from '../../shared/Spinner';
import { PhotoPaginator } from './PhotoPaginator';

export const PhotosScreen = () => {


  const [ limit ] = useState(10);
  const [ offset, setOffset ] = useState(0);

  const [ spinner, setSpinner ] = useState(false);
  const [ photos, setPhotos ] = useState([]);
  const [ total, setTotal ] = useState(0);



  useEffect( () => {
    
    axios.get( `http://localhost:3000/api/photos?limit=${limit}&offset=${offset}`)
          .then( ({data}) => {
            setSpinner( data.ok );
            setPhotos( data.data );
            setTotal( data.total );
          })
          
  }, [ limit, offset ] )

  const handlePagination = ( valor ) => {
    
    setSpinner( false );

    // Si es mayor que el numero maximo de objetos o menor que cero no hago nada
    ( valor < total ) && ( valor => 0 ) 
    ? setOffset( valor )
    : setSpinner( true )
     
  }
      
  return (
    <div className="container mt-3 animate__animated animate__fadeIn">
      <h4> Photos </h4>
      <hr />

      <PhotoPaginator 
        handlePagination={handlePagination } 
        offset={offset} 
        limit={limit} 
        total={total} 
      /> 


      <div className="row">
        {
          spinner
            ? photos.map( ( photo ) => (<PhotosView key={ photo.id } photo={ photo } /> ))
            : <Spinner />
        }
      </div>


    </div>
  )
}
