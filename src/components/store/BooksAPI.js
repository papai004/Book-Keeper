import { API_URL } from "../API";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Buttons from "../utils/Buttons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BooksAPI() {
  const btnStyle = {
    marginLeft: "2.5rem",
  };
  const cardMargin = {
    marginBottom: "1rem",
  };

  const [isBooks, setIsBooks] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setIsBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  return (
    <Row>
      {isBooks.map((book) => (
        <Col sm={4} style={cardMargin} key={book.id}>
          <Card>
            <Card.Img variant="top" src={book.image_url} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Button
                style={btnStyle}
                variant="info"
                onClick={() => {
                  const uniqueId = book.id;
                  navigate("/books/" + uniqueId);
                }}
              >
                Read
              </Button>
              <Buttons />
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
export default BooksAPI;
