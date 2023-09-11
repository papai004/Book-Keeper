import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from './navs/Navbar';
import Footer from './navs/Footer';
import '../styles/homepage.css';
import BooksAPI from './store/BooksAPI';
import Reviews from './utils/GetReviews';


function Homepage() {


  return (
    <React.Fragment>
      <Navbar />
      <Container className="card_body">
        <BooksAPI />
        <Reviews />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default Homepage;
