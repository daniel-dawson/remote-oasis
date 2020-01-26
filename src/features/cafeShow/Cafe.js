import React from "react";

function Cafe({ cafe }) {
  const { name, price, rating } = cafe;
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default Cafe;
