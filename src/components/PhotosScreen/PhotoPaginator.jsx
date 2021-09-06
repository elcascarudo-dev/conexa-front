import React from 'react'

export const PhotoPaginator = ( {handlePagination, offset, limit, total} ) => {
  return (
    <div className="d-flex justify-content-center my-4">
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary mx-2" onClick={ () => handlePagination(0)}>Inicio</button>
        <button type="button" className="btn btn-primary mx-2" onClick={ () => handlePagination( offset - limit )}>anterior</button>
        <p className="px-1 m-0 d-flex align-items-center">del { offset + 1 } al { offset + limit } de { total } </p>
        <button type="button" className="btn btn-primary mx-2" onClick={ () => handlePagination( offset + limit)}>siguiente</button>
        <button type="button" className="btn btn-primary mx-2" onClick={ () => handlePagination( total - limit )}>Fin</button>
      </div>
    </div>
  )
}
