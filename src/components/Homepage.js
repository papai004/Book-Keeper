import { useEffect, useState } from 'react';
import Cards from "./utils/Cards";
import Container from "react-bootstrap/Container";
import Navbar from './navs/Navbar';
import Footer from './navs/Footer';
import '../styles/homepage.css';
import BooksAPI from './store/BooksAPI';



function Homepage() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedDatas, setLoadedData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-getting-started-a0b71-default-rtdb.asia-southeast1.firebasedatabase.app/datas.json'
    ).then(response => {
      return response.json();
    }).then(data => {

      const datas = [];
      for (const key in data) {
        const book = {
          id: key,
          ...data[key],
        };
        datas.push(book);
      }

      setIsLoading(false);
      setLoadedData(datas);
    });
  }, []);

  if(isLoading) {
    return (
      <Container>
        <p> Loading... </p>
      </Container>
    )
  }

  return (
    <div className="Home">
      <Navbar />
      <Container className="card_body">
        <Cards booksData = { loadedDatas } />
        <BooksAPI />
      </Container>
      <Footer />
    </div>
  );
}

export default Homepage;
