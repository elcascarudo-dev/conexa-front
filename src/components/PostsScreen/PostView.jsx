import React from 'react'

export const PostView = ({post}) => {

  return (
    <div className="card my-3 animate__animated animate__fadeIn">
      <div className="card-body">
        <h5 className="card-title">{ post.title }</h5>
        <p className="card-text">{ post.body }</p>
      </div>
    </div>
  )
}
