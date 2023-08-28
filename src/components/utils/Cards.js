import Card from "react-bootstrap/Card";
import Buttons from "./Buttons";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Cards({ booksData }) {
  const btnStyle = {
    marginLeft: "2.5rem",
  };

  return (
    <div>
      {booksData.map((item, index) => (
        <Row>
          <Col xs>
          <Card key={index}>
            <Card.Img variant="top" src={item.image}/>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button style={btnStyle} variant="info">Read</Button>
              <Buttons />
            </Card.Body>
          </Card>
          </Col>
        </Row>
    ))}
    </div>
  );
}

export default Cards;
