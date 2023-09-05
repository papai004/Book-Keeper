import { useEffect, useState } from 'react';
import Cards from "./utils/Cards";
import Container from "react-bootstrap/Container";
import Navbar from './navs/Navbar';
import Footer from './navs/Footer';
import { MY_COLLECTIONS_URL } from "./API";
import Loading from './utils/loading';
import { useNavigate } from 'react-router-dom';
import '../styles/collection.css';


const Collection = () => {

    const card_body = {
        paddingTop: "2rem",
        paddingBottom: "2rem"
    }

    const [isLoading, setIsLoading] = useState(true);
    const [loadedDatas, setLoadedData] = useState([]);
  
    useEffect(() => {
      setIsLoading(true);
      fetch( MY_COLLECTIONS_URL )
      .then(response => {
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

    const navigate = useNavigate();

    if(loadedDatas.length === 0){
      return(
        <Container>
          <p className="no_reviews"> No books yet 😭 pls add some... </p>
          <Loading />
          <div className="review_btn_div">
            <button className="review_btn" onClick={() => navigate('/Forms')}>Add Books😊</button>
          </div>
        </Container>
      )
    }
  
    if(isLoading) {
      return (
        <Container>
          <Loading />
        </Container>
      )
    }

    return(
        <div>
            <Navbar />
            <Container style={ card_body }>
            <Cards booksData = { loadedDatas } />
            </Container>
            <Footer />
        </div>
    )
}
export default Collection;