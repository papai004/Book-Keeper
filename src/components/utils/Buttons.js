import Button from 'react-bootstrap/Button';
import ButtonsCss from './Buttons.module.css';

const Buttons = (props) => {
    return(
    <div>
        <Button className={ ButtonsCss.btn_left } variant="info">Read</Button>
        <Button className={ ButtonsCss.btn_right } variant="success">Add to Favourite</Button>
    </div>
    );
};
export default Buttons;
