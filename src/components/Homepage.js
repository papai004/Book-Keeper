import Cards from "./utils/Cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from './navs/Navbar';
import Footer from './navs/Footer';
import '../styles/homepage.css';


function Homepage() {
  return (
    <div className="Home">
      <Navbar />

      <Container className="card_body">
        <Row>
          <Col xs>  <Cards id='1' text="New Book 1" />   </Col>
          <Col xs>  <Cards id='2' text="New Book 2" />   </Col>
          <Col xs>  <Cards id='3' text="New Book 3" />   </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Homepage;
