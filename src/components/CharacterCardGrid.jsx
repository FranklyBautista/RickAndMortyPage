import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterCardGrid({ Personajes }) {
  return (
    <div>
      {Personajes.map((p) => (
        <CharacterCard
          name={p.name}
          img={p.image}
          status={p.status}
          gender={p.gender}
          species={p.species}
          key={p.id}
        />
      ))}
    </div>
  );
}

export default CharacterCardGrid;
