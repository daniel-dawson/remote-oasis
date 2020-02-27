import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Favorite({ favorite }) {
  const attrs = favorite.attributes;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{attrs.name}</Card.Title>
        <Card.Text>
          Avg rating: {attrs.rating}
          <br />
          Location: {attrs.location}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Favorite;
