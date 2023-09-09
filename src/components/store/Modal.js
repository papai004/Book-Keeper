import React from 'react';
import { API_URL } from "../API";
import { useEffect } from "react";
import axios from "axios";
import './booksAPI.css';
import { useState } from 'react';

const SearchWithPagination = () => {
  const [isBooks, setIsBooks] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setIsBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items to display per page

  // Filtered and paginated items
  const [filteredItems, setFilteredItems] = useState(isBooks);

  useEffect(() => {
    const filtered = isBooks.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
    setCurrentPage(1); // Reset to the first page when the search term changes
  }, [isBooks,searchTerm]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a book..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {currentItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchWithPagination;
