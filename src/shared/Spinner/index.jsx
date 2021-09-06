import React from 'react'
import { FlowerSpinner } from 'react-epic-spinners';

export const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <FlowerSpinner color="blue" />
        <h4>Cargando...</h4>
      </div>
    </div>
  )
}
