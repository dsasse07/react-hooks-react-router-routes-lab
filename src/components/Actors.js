import React from "react";
import { actors } from "../data";

function Actors() {

  const actorComponents = actors.map( actor => {
    return (
      <div key={actor.name}>
        <h3>{actor.name}</h3>
        <p> Movies: </p>
        <ul>
          {actor.movies.map(movie=> {
            return <li key={movie}>{movie}</li>
          })}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1> Actors Page </h1>
      {actorComponents}
    </div>
  );
}

export default Actors;
