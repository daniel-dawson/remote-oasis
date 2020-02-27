import React from "react";
import { Redirect } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Cafe({ cafe }) {
  if (cafe === undefined) {
    return <Redirect to="/explore/cafes" />;
  }
  const { name, location, price, rating } = cafe;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Avg rating: {rating}
          <br />
          Price: {price}
          <br />
          Location: {cafe.location.address1}, {location.city},{" "}
          {cafe.location.state}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">some info/button here</small>
      </Card.Footer>
    </Card>
  );
}

export default Cafe;
