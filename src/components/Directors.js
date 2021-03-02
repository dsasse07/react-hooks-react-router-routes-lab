import React from "react";
import { directors } from "../data";

function Directors() {
  const directorComponents = directors.map( director => {
    return (
      <div key={director.name}>
        <h3>{director.name}</h3>
        <p> Movies: </p>
        <ul>
          {director.movies.map(movie=> {
            return <li key={director+movie}>{movie}</li>
          })}
        </ul>
      </div>
    )
  })


  return (
    <div>
      <h1> Directors Page </h1>
      {directorComponents}
    </div>
  );
}

export default Directors;
