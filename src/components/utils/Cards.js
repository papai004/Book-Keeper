import Card from "react-bootstrap/Card";
import Buttons from "./Buttons";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Cards({ booksData }) {
  const btnStyle = {
    marginLeft: "2.5rem",
  };
  const cardMargin = {
    marginBottom: "1rem",
  };

  return (
      <Row>
        {booksData.map((item, index) => (
            <Col sm={4} style={ cardMargin }>
            <Card key={index}>
              <Card.Img variant="top" src={ item.image }/>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button style={btnStyle} variant="info" onClick={() => window.open(item.reading, '_blank')}>Read</Button>
                <Buttons/>
              </Card.Body>
            </Card>
            </Col>
        ))}
      </Row>
  );
}

export default Cards;
