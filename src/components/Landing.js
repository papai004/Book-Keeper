import '../styles/landing.css';
import book_keeper from './book_keeper.png';

function Landing() {
  return (
    <div>
      <img className='landing_img' src={book_keeper} alt="Home" />
      <button className="enter_btn"><bold>ENTER</bold></button>
    </div>
  );
}
export default Landing;
