import React, { useRef } from "react";
import "./Header.css";

function Header({ Buscarpersonajes, onSearch, onStatusChange }) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    Buscarpersonajes({ name });
    onSearch(name);
  };

  const handleClick = (status) => {
    onStatusChange(status);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-custom">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  Buscarpersonajes("");
                  handleClick("");
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Status
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick("");
                    }}
                  >
                    All
                  </a>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick("alive");
                    }}
                  >
                    Alive
                  </a>
                </li>
                <li></li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick("dead");
                    }}
                  >
                    Dead
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick("unknown");
                    }}
                  >
                    Unknown
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              autoComplete="off"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
