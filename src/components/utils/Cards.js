import Card from 'react-bootstrap/Card';
import Buttons from './Buttons';

function Cards(props) {
  return (
    <Card>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/d/d5/Books_Books.JPG" />
      <Card.Body>
        <Card.Title>{props.text}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Buttons />
      </Card.Body>
    </Card>
  );
}

export default Cards;