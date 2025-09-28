import React, { useState } from "react";
import "./Pager.css";

function Pager({ onPrev, onNext, NPages, onPage }) {
  const [activePage, setActivePage] = useState(1);

  return (
    <nav aria-label="..." className="pager">
      <ul className="pagination">
        <li className="page-item">
          <a
            href="#"
            className="page-link"
            onClick={(e) => {
              e.preventDefault();
              onPrev();
              setActivePage(activePage - 1);
            }}
          >
            Previous
          </a>
        </li>
        <ul className="pagination custom-pagination">
          {Array.from({ length: NPages }, (_, i) => {
            return (
              <li
                key={i}
                className="page-item"
                onClick={(e) => {
                  const newPage = i + 1;
                  e.preventDefault();
                  setActivePage(newPage);
                  onPage(newPage);
                }}
              >
                <a
                  className={`page-link ${
                    activePage === i + 1 ? "active" : ""
                  }`}
                  href="#"
                >
                  {i + 1}
                </a>
              </li>
            );
          })}
        </ul>

        <li
          className="page-item"
          onClick={(e) => {
            e.preventDefault();
            onNext();
            setActivePage(activePage + 1);
          }}
        >
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pager;
