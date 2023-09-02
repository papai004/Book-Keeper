import { useEffect, useState } from 'react';
import Cards from "./utils/Cards";
import Container from "react-bootstrap/Container";
import Navbar from './navs/Navbar';
import Footer from './navs/Footer';
import { MY_COLLECTIONS_URL } from "./API";


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
  
    if(isLoading) {
      return (
        <Container>
          <p> Loading... </p>
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