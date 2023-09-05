import { API_URL } from "../API";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Buttons from "../utils/Buttons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './booksAPI.css';

function BooksAPI() {

  const [isBooks, setIsBooks] = useState([]);
  const [isPage, setIsPage] = useState(1);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setIsBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const selectPageHandler = (selectedPage) => {
    if(selectedPage>=1 
      && selectedPage<= isBooks.length/10
      && selectedPage !== isPage)

    setIsPage(selectedPage);
  }

  const navigate = useNavigate();

  return (
    <div>
    <Row>
      {isBooks.slice(isPage*10-10, isPage*10).map((book) => (
        <Col sm={4} className="cardMargin "key={book.id}>
          <Card>
            <Card.Img variant="top" src={book.image_url} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Button
                className="btnStyle"
                variant="dark"
                onClick={() => {
                  const uniqueId = book.id;
                  navigate("/books/" + uniqueId);
                }}
              >
                Details
              </Button>
              <Buttons/>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    {
      isBooks.length > 0 && 
      <div className="pagination">
        <span onClick={() => selectPageHandler(isPage -1 )}
        className={isPage <= 1 ? "page_disabled" : ""}
        >⏮</span>
        {[...Array(isBooks.length / 10)].map((_,idx) => {
            return (<span key={idx} className={isPage === idx+1 ? "selected_Page" : ""}
              onClick={() => selectPageHandler(idx+1)}>{ idx+1 }</span>)
          })}
        <span onClick={() => selectPageHandler(isPage + 1)}
        className={isPage >= isBooks.length /10 ? "page_disabled" : ""}
        >⏭</span>
      </div>
    }
  </div>
  );
}
export default BooksAPI;
