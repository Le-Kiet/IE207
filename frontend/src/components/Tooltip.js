import "./Tooltip.css";
function Tooltip(props) {
  return (
    <div className="tooltip-container">
      {props.state && (
        <div className="tooltip">
          Quizlet is open to all ages but requires all users to provide their
          real date of birth to comply with local laws.
        </div>
      )}
    </div>
  );
}

export default Tooltip;
