import React from "react";
import Genre from "./Genre";

const Movie = ({ title, year }) => {
  return (
    <div className="Movie">
      <h1>{title}</h1>
      <h2>{year}</h2>
      <Genre
        name="Crime"
        description="A genre of fiction in which the protagonist is involved in or affected by a series of crimes."
        movieTitle1="The Godfather"
        movieTitle2="The Godfather: Part II"
      />
    </div>
  );
};

export default Movie;
