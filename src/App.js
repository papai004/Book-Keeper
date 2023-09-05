import 'bootstrap/dist/css/bootstrap.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Landing from './components/Landing';
import Homepage from './components/Homepage.js';
import { Routes, Route } from "react-router-dom";
import PostBooks from './components/PostBooks';
import Favourites from './components/Favourites';
import Collection from './components/Collection';
import BooksDesc from './components/bookDetails/bookDesc';
import PostReviews from './components/PostReviews';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/postBooks" element={<PostBooks />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/books/:id" element={<BooksDesc />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/postReviews" element={<PostReviews />}></Route>
      </Routes>
    </div>
  );
}

export default App;
