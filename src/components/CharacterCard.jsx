import React from "react";
import "./CharacterCard.css";

function CharacterCard({ name, img, status, gender, species }) {
  return (
    <div className="card mb-3 card-custom">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              <span>Status: {status}</span> <br />
              <span>Gender: {gender}</span> <br />
              <span>Species: {species}</span>
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Hola texto secundario
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
