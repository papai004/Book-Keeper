import classes from './StyledCard.module.css';

const StyledCard = (props) => {
    return(
        <div className={ classes.card }>{ props.children }</div>
    );
};
export default StyledCard;