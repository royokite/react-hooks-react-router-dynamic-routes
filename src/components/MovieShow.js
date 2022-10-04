import React from "react";
import { useParams } from "react-router-dom"

function MovieShow({ movies }) {
    const { movieId } = useParams()

  return (
    <div>
      <h3>{movies[movieId].title}</h3>
    </div>
  );
}

export default MovieShow;