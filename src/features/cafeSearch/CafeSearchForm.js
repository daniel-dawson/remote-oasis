import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CafeSearchForm({ setCafe, cafeLocation }) {
  const [searchTerm, setSearchTerm] = useState(cafeLocation);

  const handleInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setCafe({ cafeLocation: searchTerm });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="formCafeSearch">
        <Col md={6}>
          <Form.Label>Search by location</Form.Label>
          <Form.Control
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Location"
          />
          <Form.Text className="text-muted">
            locations include cities, zip codes, addresses, etc.
          </Form.Text>
        </Col>
      </Form.Group>
    </Form>
  );
}
