import React from 'react';
import Nav from './Navbar.module.css';
import book_keeper from '../book_keeper.png';

const Navbar = () => {
  return (
    <div className={Nav.navbar}>
      <div className={Nav.nav_item}><img className={Nav.nav_img} src={book_keeper} alt="Home"/></div>
      <div className={Nav.nav_item}>Home</div>
      <div className={Nav.nav_item}>Books</div>
      <div className={Nav.nav_item}>Categories</div>
      <div className={Nav.nav_item}>Authors</div>
      <div className={Nav.nav_item}>Signin/Signup</div>
    </div>
  );
};

export default Navbar;