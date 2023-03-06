import React from 'react'

const Genre = (props) => {
   const  { name, description, movieTitle1, movieTitle2 } = props;
  return (
    <div>
        <hr></hr>
        <h2>Genre: {name}</h2>
        <p>{description}</p>
        <p>{movieTitle1}</p>
        <p>{movieTitle2}</p>
    </div>
  )
}

export default Genre
