import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import "./text.scss";
function Text({
  paragraph = "",
  ClassName = "",
  orderColors = [],
  ClassNameContainer = "",
}) {
  let count = -1;
  const vectorText = paragraph.split(" ");
  const reg = /\[(.*?)\]/;

  let newJSX = vectorText.map((i, index) => {
    if (reg.test(i)) {
      count += 1;
      return (
        <Fragment>
          <p
            key={index}
            className={`general ${ClassName} ${orderColors[count]}`}
          >
            {i.replace("[", "").replace("]", "")}&nbsp;
          </p>
        </Fragment>
      );
    }
    return (
      <p className={`general ${ClassName}`} key={index}>
        {i}&nbsp;
      </p>
    );
  });
  return <div className={`containerText ${ClassNameContainer}`}>{newJSX}</div>;
}

Text.propTypes = {
  paragraph: PropTypes.string,
  ClassName: PropTypes.string,
  orderColors: PropTypes.array,
};

export default Text;
