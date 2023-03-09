import React from 'react'

const Card = ({children}) => {
  return (
    <div>
    <div className='header'>
    <h1>Movies Showing</h1>
    </div>
    <div className='Card'>
      { children }
    </div>
    </div>
  )
}

export default Card
