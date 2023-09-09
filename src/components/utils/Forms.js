import { useState } from "react";
import classes from "./Forms.module.css";
import Container from "react-bootstrap/Container";
import StyledCard from "./StyledCard";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Forms(props) {

  const [isName, setIsName] = useState('');
  const [isImg, setIsImg] = useState('');
  const [isReadingLink, setIsReadingLink] = useState('');
  const [isDesc, setIsDesc] = useState('');

  const bookNameChangeHandler = (event) => {
    setIsName(event.target.value);
  }
  const bookImgChangeHandler = (event) => {
    setIsImg(event.target.value);
  }
  const bookReadingChangeHandler = (event) => {
    setIsReadingLink(event.target.value);
  }
  const bookDescChangeHandler = (event) => {
    setIsDesc(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const booksData = {
      title: isName,
      image: isImg,
      reading: isReadingLink,
      description: isDesc,
    };

    props.onAddFormsContent(booksData);

    setIsName('');
    setIsImg('');
    setIsReadingLink('');
    setIsDesc('');
  }

  return (
    <Container>
      <StyledCard>
        <form className={classes.body} onSubmit={submitHandler}>
          <Form.Label htmlFor="basic-url">
            Book Name
          </Form.Label>
          <Form.Control required
            placeholder="Name of the Book"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={bookNameChangeHandler}
            value={isName}
          />

          <Form.Label htmlFor="basic-url1">
            Image URL
          </Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              https://example.com
            </InputGroup.Text>
            <Form.Control id="basic-url1"
             aria-describedby="basic-addon3"
             required onChange={bookImgChangeHandler}
             value={isImg}
              />
          </InputGroup>

          <Form.Label htmlFor="basic-url2">
            Reading URL
          </Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">
              https://example.com
            </InputGroup.Text>
            <Form.Control id="basic-url2" aria-describedby="basic-addon3"
             required onChange={bookReadingChangeHandler}
             value={isReadingLink}/>
          </InputGroup>

          <InputGroup>
            <InputGroup.Text>
              Description
            </InputGroup.Text>
            <Form.Control as="textarea" aria-label="With textarea"
             onChange={bookDescChangeHandler}
             value={isDesc}/>
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
