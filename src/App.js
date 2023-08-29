import 'bootstrap/dist/css/bootstrap.css';
import Landing from './components/Landing';
import Homepage from './components/Homepage.js';
import { Routes, Route } from "react-router-dom";
import PostBooks from './components/PostBooks';
import Favourites from './components/Favourites';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/postBooks" element={<PostBooks />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
    </div>
  );
}

export default App;
