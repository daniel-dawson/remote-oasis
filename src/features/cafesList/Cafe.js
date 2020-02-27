import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Cafe({ cafe, showCafe, favoritesById, recommendCafe }) {
  const isRecommended = favoritesById.hasOwnProperty(cafe.id);
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <Link to={`cafes/${cafe.id}`} onClick={() => showCafe(cafe.id)}>
            {cafe.name}
          </Link>
        </Card.Title>
        <Card.Text>
          Avg rating: {cafe.rating}
          <br />
          Location: {cafe.location.address1}, {cafe.location.city},{" "}
          {cafe.location.state}
        </Card.Text>
        {!isRecommended && (
          <Button onClick={e => recommendCafe(e, cafe)} variant="primary">
            <span className="glyphicon glyphicon-heart-empty"></span> Recommend
          </Button>
        )}
      </Card.Body>
      {isRecommended && (
        <Card.Footer>
          <small className="text-muted">
            <span className="glyphicon glyphicon-heart"></span> Recommended
          </small>
        </Card.Footer>
      )}
    </Card>
  );
}

export default Cafe;
