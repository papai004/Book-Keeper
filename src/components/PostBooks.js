import Forms from './utils/Forms';
import Navbar from './navs/Navbar';
import Footer from './navs/Footer';

const PostBooks = () => {
    function addFormHandler(dummyData) {
        fetch(
          'https://react-getting-started-a0b71-default-rtdb.asia-southeast1.firebasedatabase.app/datas.json',
          {
            method: 'POST',
            body: JSON.stringify(dummyData),
            headers: { 'Content-Type': 'application/json'}
          }
        );
      }
    return(
        <div>
            <Navbar />
            <Forms onAddFormsContent={ addFormHandler }/>
            <Footer />
        </div>
    )
}
export default PostBooks;