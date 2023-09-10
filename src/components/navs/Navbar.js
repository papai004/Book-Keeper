import { Link } from 'react-router-dom';
import Nav from './Navbar.module.css';
import book_keeper from '../book_keeper.png';


const Navbar = () => {

  return (

      <div className={Nav.navbar}>
        <div className={Nav.nav_item}><img className={Nav.nav_img} src={book_keeper} alt="Home"/></div>
          <Link className={Nav.nav_item} to="/Homepage">Home</Link>
          <Link className={Nav.nav_item} to="/Collection">Our Collection</Link>
          <Link className={Nav.nav_item} to="/Favourites">Favourites</Link>
          <Link className={Nav.nav_item} to="/login">Publish</Link>


      </div>

  );
};

export default Navbar;