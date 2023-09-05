import Reviews from './store/Reviews';
import Navbar from './navs/Navbar';
import { MY_REVIEWS_URL } from "./API";

const PostReviews = () => {
    function addReviewHandler(myData) {
        fetch(
            MY_REVIEWS_URL,
          {
            method: 'POST',
            body: JSON.stringify(myData),
            headers: { 'Content-Type': 'application/json'}
          }
        );
      }
    return(
        <div>
            <Navbar />
            <Reviews onAddReviewsContent={ addReviewHandler }/>
        </div>
    )
}
export default PostReviews;