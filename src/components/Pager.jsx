import React from "react";
import "./Pager.css";

function Pager({ onPrev, onNext, NPages, Page }) {
  return (
    <div className="PagerButtom">
      <button
        type="button"
        className="btn btn-outline-light"
        onClick={() => onPrev()}
      >
        Previous
      </button>
      <p>
        {Page} - {NPages}
      </p>
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
