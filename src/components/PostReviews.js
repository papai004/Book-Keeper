import React from 'react';
import Reviews from './store/Reviews';
import Navbar from './navs/Navbar';
import { MY_REVIEWS_URL } from "./API";
import { useNavigate } from 'react-router-dom';

const PostReviews = () => {

  const navigate = useNavigate();

    function addReviewHandler(myData) {
        fetch(
            MY_REVIEWS_URL,
          {
            method: 'POST',
            body: JSON.stringify(myData),
            headers: { 'Content-Type': 'application/json'}
          }
        ).then(() => {
          navigate('/Homepage');
        });
      }
    return(
        <React.Fragment>
            <Navbar />
            <Reviews onAddReviewsContent={ addReviewHandler }/>
        </React.Fragment>
    )
}
export default PostReviews;