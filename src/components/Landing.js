import React from 'react';
import '../styles/landing.css';
import book_keeper from './book_keeper.png';
// import { useHistory } from 'react-router-dom';


function Landing() {
  // const history = useHistory();

  // const handleButtonClick = () => {
  //   history.push('/Homepage');
  // };
  return (
    <div>
      <img className='landing_img' src={book_keeper} alt="Home" />
      <button className="enter_btn"><bold>ENTER</bold></button>
    </div>
  );
}
export default Landing;
