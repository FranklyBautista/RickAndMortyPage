import React from "react";
import "./Footer.css";

function Footer({}) {
  return (
    <footer className="footer-container">
      <p>&copy; 2025 Frankly Bautista – Proyecto React</p>
      <p>
        <a href="https://github.com/FranklyBautista" target="_blank">
          GitHub
        </a>{" "}
        |<a href="https://linkedin.com/in/tuusuario">LinkedIn</a>
      </p>
      <small>
        Datos obtenidos de la{" "}
        <a href="https://rickandmortyapi.com/">Rick and Morty API</a>
      </small>
    </footer>
  );
}

export default Footer;
