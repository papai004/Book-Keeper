import React from 'react';
import '../styles/landing.css';
import book_keeper from './book_keeper.png';
import { useNavigate } from 'react-router-dom';


function Landing() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <img className='landing_img' src={ book_keeper } alt="Home" />
      <button className="enter_btn" onClick={() => navigate('Homepage')}><bold>ENTER</bold></button>
    </React.Fragment>
  );
}
export default Landing;
