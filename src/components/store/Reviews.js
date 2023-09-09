import Container from "react-bootstrap/Container";
import StyledCard from "../utils/StyledCard";
import styles from './Reviews.module.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useRef, useState } from "react";
import { Rate } from 'antd';

const Reviews = (props) => {

    const margin_style = {
      marginTop: "1rem",
      marginBottom: "1rem",
    }
    const [rating, setRating] = useState(0);

    const changeRatingHandler = (value) => {
      setRating(value);
    };

    const nameInputRef = useRef();
    const feedbackInputRef = useRef();

    function submitHandler(event) {
      event.preventDefault();
      
      const enteredName = nameInputRef.current.value;
      const enteredFeedback = feedbackInputRef.current.value;

      const date =  new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear();
  
      const reviewsData = {
        timeStamp: date,
        name: enteredName.charAt(0),
        fullName: enteredName,
        ratings: rating.toFixed(1),
        feedback: enteredFeedback,
      };
      
  
      props.onAddReviewsContent(reviewsData);
    }

  return (
    <Container>
      <StyledCard>
        <div className={ styles.post_review }>
        <h1 className={ styles.heading }><u>Post a Review</u></h1>
        <form onSubmit={submitHandler}>
              <InputGroup>
              <InputGroup.Text>
              Name
            </InputGroup.Text>
            <Form.Control placeholder="Name" required ref = { nameInputRef }/>
          </InputGroup>
          <InputGroup style={margin_style}>
          <InputGroup.Text>
              Rate Us:
          </InputGroup.Text>
          <Rate onChange={ changeRatingHandler } value={rating}/>
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>
              Feedback
            </InputGroup.Text>
            <Form.Control as="textarea" placeholder="Share your thoughts about our site" aria-label="With textarea" required ref={feedbackInputRef}/>
          </InputGroup>

          <Button type="submit" variant="success" className={styles.btn}>
            Submit form
          </Button>
        </form>
        </div>
      </StyledCard>
    </Container>
  );
};
export default Reviews;
