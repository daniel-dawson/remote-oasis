import React from "react";

function Cafe({ cafe, showCafe }) {
  return (
    <div>
      <h3>
        <button onClick={() => showCafe(cafe.id)}>{cafe.name}</button>
      </h3>
      <p>Avg rating: {cafe.rating}</p>
      <p>
        Location: {cafe.location.address1}, {cafe.location.city},{" "}
        {cafe.location.state}
      </p>
    </div>
  );
}

export default Cafe;
