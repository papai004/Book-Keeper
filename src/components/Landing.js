import React from 'react';
import '../styles/landing.css';
import { Link } from "react-router-dom";
import Landing_Banner from './images/book_keeper.png';


function Landing() {


  return (
    <React.Fragment>
    <div className="home" style={{ backgroundImage: `url(${Landing_Banner})` }}></div>
    <div className="home_btn"><Link className="home_btn" to="/Homepage"><button> ENTER </button></Link></div>
    </React.Fragment>
  );
}
export default Landing;
