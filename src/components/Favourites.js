import React from "react";
import Navbar from "./navs/Navbar";
import Footer from "./navs/Footer";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import NoData from './utils/noData';
import '../styles/favourites.css';
import { useNavigate } from "react-router-dom";
import { useFavouriteContext } from "./store/favourites-context";

const Favourite = () => {
  const { favourites, removeFromFavourites } =
  useFavouriteContext();

  const favouritesChecker = (id) => {
    const boolean = favourites.some((isBooks) => isBooks.id === id);
    return boolean;
  };

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Navbar />
      <Container>
      <Row>
        {favourites.length > 0 ? favourites.map((book) => (
          <Col sm={4} className="cardMargin " key={book.id}>
            <Card className="books_card_background">
              <Card.Img variant="top" src={book.image_url} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
              {favouritesChecker(book.id) ? (
                  <Button
                    className="favourites_btn" variant='success'
                    onClick={() => removeFromFavourites(book.id)}
                  >
                    Remove From Favorites
                  </Button>
                ) : (
                  <React.Fragment>
                  </React.Fragment>
                )}
            </Card>
          </Col>
        )) : 
        <React.Fragment>
        <p className="noText"> Nothing is in favorites, add some... </p>
        <NoData />
        <div className="addToFav">
        <button className="addToFav_btn" onClick={() => navigate('/Homepage')}>Add Favorite </button>
        </div>
        </React.Fragment>
        }
      </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Favourite;
