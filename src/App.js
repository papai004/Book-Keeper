import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Landing from './components/Landing';
import Home from './components/Homepage';
import { Routes, Route } from "react-router-dom";
import PostBooks from './components/postRoute/PostBooks';
import Contact from './components/ContactUs';
import Favourites from './components/Favourites';
import Collection from './components/Collection';
import BooksDesc from './components/bookDetails/bookDesc';
import PostReviews from './components/postRoute/PostReviews';
import Login from './components/store/login';



function App() {

  const [logIn, setLogIn] = useState(false);

  const loginHandler = () => {
    setLogIn(true);
  }

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/homepage" element={<Home />}></Route>
        <Route path="/postReviews" element={<PostReviews />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/books/:id" element={<BooksDesc />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
        {
          logIn === false ? ''
          : <Route path="/postBooks" element={<PostBooks />}></Route>
        }
        <Route path="/login" element={<Login setData = {loginHandler}/>}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
