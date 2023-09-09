import React from 'react';
import { API_URL } from "../API";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './booksAPI.css';
import { useFavouriteContext } from './favourites-context';


function BooksAPI({data}) {

  console.log(data);

  const [isBooks, setIsBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setIsBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const selectPageHandler = (selectedPage) => {
    if(selectedPage>=1 
      && selectedPage<= isBooks.length/10
      && selectedPage !== currentPage)

    setCurrentPage(selectedPage);
  }

  const navigate = useNavigate();

  const { favourites, addToFavourites, removeFromFavourites } = useFavouriteContext();
  const favouritesChecker = (id) => {
    const boolean = favourites.some((isBooks) => isBooks.id === id);
    return boolean;
  }
  
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage] = useState(10);
  const [filteredItems, setFilteredItems] = useState(isBooks);

  useEffect(() => {
    const filtered = isBooks.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
    setCurrentPage(1);
  }, [isBooks,searchTerm]);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (

    <React.Fragment>
      <div className="searchBar">
        <input
          className='search_input'
          type="text"
          placeholder="Search for a book..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>

      <Row>
        {currentItems
        .map((book) => (
          <Col sm={4} className="cardMargin "key={book.id}>
            <Card className="books_card_background">
              <Card.Img variant="top" src={book.image_url} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
                <Button
                  className="details_btn"
                  variant="dark"
                  onClick={() => {
                    const uniqueId = book.id;
                    navigate("/books/" + uniqueId);
                  }}
                >
                  Details
                </Button>
                {
                  favouritesChecker(book.id) ? (
                    <Button className="favourites_btn" variant='success'
                    onClick={() => removeFromFavourites(book.id)}>Remove from Favourites</Button>
                  ) : (
                    <Button className="favourites_btn" variant='primary'
                onClick={() => addToFavourites(book)}>Add to Favorite</Button>
                  )
                }
            </Card>
          </Col>
        ))}
      </Row>

      {
        <div className="pagination">
            <span onClick={() => selectPageHandler(currentPage -1 )}
            className={currentPage <= 1 ? "page_disabled" : ""}
            >⏮</span>
          {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
            <span key={index} className={currentPage === index+1 ? "selected_Page" : ""}
            onClick={() => paginate(index + 1)}>
              {index + 1}
            </span>
          ))}
            <span onClick={() => selectPageHandler(currentPage +1 )}
            className={currentPage >= filteredItems.length / itemsPerPage ? "page_disabled" : ""}
            >⏭</span>
        </div>
      }
  </React.Fragment>
  );
}
export default BooksAPI;
