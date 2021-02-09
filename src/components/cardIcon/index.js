import React from "react";
import PropTypes from "prop-types";
import "./CardIcon.scss";

function CardIcon({text, icon }) {
  return (
    <div className="Card">
      <img className="img-svg" src={icon} alt={`${text}-img`} />
      <p className="text">{text}</p>
    </div>
  );
}

CardIcon.propTypes = {};

export default CardIcon;
