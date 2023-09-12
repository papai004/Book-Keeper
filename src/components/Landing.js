import React, { useState, useEffect} from 'react';
import '../styles/landing.css';
import { Link } from "react-router-dom";
import Landing_Banner from './images/book_keeper.png';
import Landing_Img from './images/landing.jpeg';


function Landing() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

  }, []);


  return (
    <React.Fragment>
      {
        windowWidth > 547 ?
          <React.Fragment>
              <div className="home" style={{ backgroundImage: `url(${Landing_Banner})` }}></div>
              <div className="home_btn"><Link className="home_btn" to="/Homepage"><button> ENTER </button></Link></div>
          </React.Fragment>
      : 
          <React.Fragment>
          <div className="home" style={{ backgroundImage: `url(${Landing_Img})` }}></div>
          <div className="home_btn"><Link className="home_btn" to="/Homepage"><button> ENTER </button></Link></div>
  </React.Fragment>
      }
    </React.Fragment>
  );
}
export default Landing;
