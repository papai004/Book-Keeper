import Button from 'react-bootstrap/Button';
import ButtonsCss from './Buttons.module.css';

const Buttons = () => {
    return(
        <Button className={ ButtonsCss.btn_right } variant="success">Add to Favourite</Button>
    );
};
export default Buttons;
