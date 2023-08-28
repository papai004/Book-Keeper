import { useRef } from "react";
import classes from "./Forms.module.css";
import Container from "react-bootstrap/Container";
import StyledCard from "./StyledCard";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Forms(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const readingInputRef = useRef();
  const descriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredReading = readingInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const dummyData = {
      title: enteredTitle,
      image: enteredImage,
      reading: enteredReading,
      description: enteredDescription,
    };

    props.onAddFormsContent(dummyData);
  }
  return (
    <Container>
      <StyledCard>
        <form className={classes.body} onSubmit={submitHandler}>
          <Form.Label htmlFor="basic-url">
            Book Name
          </Form.Label>
          <Form.Control required ref={ titleInputRef }
            placeholder="Name of the Book"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />

          <Form.Label htmlFor="basic-url1">
            Image URL
          </Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              https://example.com
            </InputGroup.Text>
            <Form.Control id="basic-url1" aria-describedby="basic-addon3" required ref={imageInputRef}/>
          </InputGroup>

          <Form.Label htmlFor="basic-url2">
            Reading URL
          </Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">
              https://example.com
            </InputGroup.Text>
            <Form.Control id="basic-url2" aria-describedby="basic-addon3" required ref={readingInputRef}/>
          </InputGroup>

          <InputGroup>
            <InputGroup.Text>
              Description
            </InputGroup.Text>
            <Form.Control as="textarea" aria-label="With textarea" required ref={descriptionInputRef}/>
          </InputGroup>

          <Button type="submit" variant="success" className={classes.btn}>
            Submit form
          </Button>
        </form>
      </StyledCard>
    </Container>
  );
}

export default Forms;
