import React from "react";
import CharacterCard from "./CharacterCard";
import "./CharacterCardGrid.css";

function CharacterCardGrid({ Personajes, onSelect }) {
  return (
    <div className="grid-container">
      {Personajes.map((p) => (
        <CharacterCard
          name={p.name}
          img={p.image}
          status={p.status}
          gender={p.gender}
          species={p.species}
          key={p.id}
          character={p}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default CharacterCardGrid;
