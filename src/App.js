import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Landing from './components/Landing';
import Home from './components/Homepage';
import { Routes, Route } from "react-router-dom";
import PostBooks from './components/PostBooks';
import Favourites from './components/Favourites';
import Collection from './components/Collection';
import BooksDesc from './components/bookDetails/bookDesc';
import PostReviews from './components/PostReviews';



function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/homepage" element={<Home />}></Route>
        <Route path="/postBooks" element={<PostBooks />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/books/:id" element={<BooksDesc />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/postReviews" element={<PostReviews />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
