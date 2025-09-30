import React, { useState } from "react";
import "./CaracterCardModal.css";

function CaracterCardModal({ data, onCloser, onFavorite, isFavorite }) {
  return (
    <div className="card mb-3 modal-card">
      <div className="button-container">
        <button onClick={onCloser} className="button-close">
          X
        </button>
      </div>

      <div className="row g-0 modal-row">
        <div className="col-md-4">
          <img
            src={data.image}
            className="img-fluid rounded-start"
            alt={data.name}
          />
        </div>
        <div className="col-md-8">
          {/* ----------------------------------------- */}
          <div className="card-body card-grid">
            <div className="box-title">
              <h3 className="card-title ">{data.name}</h3>
            </div>

            <div className="box-content">
              <p className="card-text ">
                <span>Status: {data.status}</span> <br />
                <span>Gender: {data.gender}</span> <br />
                <span>Species: {data.species}</span> <br />
                <span>Origin: {data.origin.name}</span> <br />
                <span>Location: {data.location.name}</span>
              </p>
            </div>

            <div
              className="favorite-section"
              onClick={(e) => {
                e.preventDefault();
                onFavorite(data);
              }}
            >
              <a
                className={`material-symbols-outlined ${
                  isFavorite ? "estrellaRellena" : "estrella"
                }`}
                href="#"
              >
                star
              </a>
            </div>
            <div className="btn-group dropend box-caps">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lista de Capitulos
              </button>
              <ul className="dropdown-menu">
                {data.episode.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* ----------------------------------------- */}
        </div>
      </div>
    </div>
  );
}

export default CaracterCardModal;
