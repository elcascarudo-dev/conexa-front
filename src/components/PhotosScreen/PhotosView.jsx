import React from 'react'

export const PhotosView = ({ photo }) => {

  return (
    <div className="col-md-4 my-3 animate__animated animate__fadeIn">
      <div className="card shadow">
        <img src={ photo.url } className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">{ photo.title }</h5>
          <p className="card-text">Imagen: { photo.id }</p>
        </div>
      </div>
    </div>
  )
}
