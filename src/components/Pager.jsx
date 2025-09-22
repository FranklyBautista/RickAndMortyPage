import React from "react";
import "./Pager.css";

function Pager({ onPrev, onNext }) {
  return (
    <div className="PagerButtom">
      <button
        type="button"
        className="btn btn-outline-light"
        onClick={() => onPrev()}
      >
        Previous
      </button>
      <button
        type="button"
        className="btn btn-outline-light"
        onClick={() => onNext()}
      >
        Next
      </button>
    </div>
  );
}

export default Pager;
