import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

function Button({ title, ClassName, handleClick }) {
  return (
    <button onClick={handleClick} className={`button ${ClassName}`}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  ClassName: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
