import React, { useEffect } from "react";
import CharacterCard from "./CharacterCard";
import "./FavoritePage.css";

function FavoritesPage({ Favorites, onFavorite }) {
  useEffect(() => {
    console.log(Favorites);
  }, [Favorites]);

  return (
    <div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Favorites list
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body information-container">
          {Favorites.map((p) => (
            <CharacterCard
              name={p.name}
              character={p}
              gender={p.gender}
              img={p.image}
              species={p.species}
              key={p.id}
              status={p.status}
              onSelect={onFavorite}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FavoritesPage;
