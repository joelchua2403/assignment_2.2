import React from "react";
import Movie from "./Movie";
import Card from "./Card";

const Container = () => {
  return (
    <Card>
      <Movie title="The Godfather" year="1972" />
      <Movie title="The Godfather: Part II" year="1974" />
    </Card>
  );
};

export default Container;
