import React from "react";
import { Card, Button } from "react-bootstrap";
const ItemColor = ({ color }) => {
  const divStyle = {
    backgroundColor: color,
    width: "200px",
    height: "200px",
  };

  return (
    <>
      <Card>
        <Card.Header>{color}</Card.Header>
        <Card.Body className="d-flex justify-content-center flex-column align-items-center">
          <div style={divStyle} className="m-4"></div>
          <div>
            <Button variant="danger">Borrar</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemColor;
