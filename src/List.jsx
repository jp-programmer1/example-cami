import React from 'react'

export const List = ({ cellphones = [], onRemove, onRemoveItem }) => {
  return (
    <div>
      <h2>Lista de marcas de celulares</h2>
      {cellphones.length > 0 &&
        <button onClick={onRemove}>Limpiar Lista</button>
      }
      {cellphones.map((c, index) => (
        <div className='item-1' key={index}>
          <p>{c}</p>

          <button 
            className='btn-danger'
            onClick={(e) => {
              e.preventDefault();
              onRemoveItem(index);
            }}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>

  )
}
