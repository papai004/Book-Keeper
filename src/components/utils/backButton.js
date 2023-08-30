import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const BackButtons = () => {
  const btnStyle = {
    marginTop: "2rem",
    marginBottom: "2rem",
  };
  const btnCentre = {
    textAlign: "center",
  };

  const navigate = useNavigate();

  return (
    <div style={btnCentre}>
      <Button
        style={btnStyle}
        variant="dark"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </Button>
    </div>
  );
};
export default BackButtons;
