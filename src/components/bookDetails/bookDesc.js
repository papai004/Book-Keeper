import React from "react";
import "../../App.js";
import axios from "axios";
import Navbar from "../navs/Navbar";
import Footer from "../navs/Footer";
import { useParams } from "react-router-dom";
import { BOOK_DETAILS_URL } from "../API";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import BackButton from "../utils/backButton";
import StyledCard from "../utils/StyledCard";

const BooksDesc = () => {
  const { id } = useParams();
  const [isBookDetails, setIsBookDetails] = useState([]);

  useEffect(() => {
    axios
      .get(BOOK_DETAILS_URL + "/" + id)
      .then((res) => {
        setIsBookDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <StyledCard>
          <img src={isBookDetails.image_url} alt={isBookDetails.id} />
          <Accordion defaultActiveKey="#">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Title</Accordion.Header>
              <Accordion.Body>{isBookDetails.title}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Author</Accordion.Header>
              <Accordion.Body>{isBookDetails.authors}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Genre</Accordion.Header>
              <Accordion.Body>{isBookDetails.genres}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Rating</Accordion.Header>
              <Accordion.Body>{isBookDetails.rating}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Description</Accordion.Header>
              <Accordion.Body>{isBookDetails.description}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <BackButton />
        </StyledCard>
      </Container>
      <Footer />
    </React.Fragment>
  );
};
export default BooksDesc;
