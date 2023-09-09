import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cardStyle from "./cards.module.css";

function Cards({ booksData }) {

  const cardMargin = {
    marginBottom: '1rem',
  };


  return (
    <React.Fragment>
      <Row>
        {booksData.map((item, index) => (
            <Col sm={4} style = { cardMargin } key={index}>
            <Card className="cards">
              <Card.Img variant="top" src={ item.image } alt={ item.title}/>             
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
              <Button className={cardStyle.btnStyle} variant="dark" onClick={() =>{
                  window.open(item.reading, '_blank');
                }}>Read</Button>
            </Card>
            </Col>
        ))}
      </Row>
    </React.Fragment>
  );
}

export default Cards;
