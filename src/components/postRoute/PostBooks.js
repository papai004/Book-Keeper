import React from 'react';
import Forms from '../utils/Forms';
import Navbar from '../navs/Navbar';
import Footer from '../navs/Footer';
import { MY_COLLECTIONS_URL } from "../API";

const PostBooks = () => {
  
    function addFormHandler(reviewsData) {
        fetch(
          MY_COLLECTIONS_URL,
          {
            method: 'POST',
            body: JSON.stringify(reviewsData),
            headers: { 'Content-Type': 'application/json'}
          }
        )
      }
    return(
        <React.Fragment>
            <Navbar />
            <Forms onAddFormsContent={ addFormHandler }/>
            <Footer />
        </React.Fragment>
    )
}
export default PostBooks;