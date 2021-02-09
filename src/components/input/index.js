import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./input.scss";
import { inputTypes } from "./inputTypes";
import { Icon } from "@iconify/react";
import bxsCheckCircle from "@iconify/icons-bx/bxs-check-circle";
import bxsXCircle from "@iconify/icons-bx/bxs-x-circle";

function Input({
  placeholder,
  inputType,
  value,
  handleOnChange,
  checked,
  isRequired,
  withError,
  useError,
}) {
  return (
    <div className="icon-input">
      <input
        placeholder={placeholder}
        type={inputType}
        value={value}
        checked={checked}
        onChange={(e) => handleOnChange(e.target.value)}
        required={isRequired}
      />
      {useError ? (
        <div className="icons">
          {withError ? (
            <Icon icon={bxsXCircle} className="x" />
          ) : (
            <Icon icon={bxsCheckCircle} className="check" />
          )}
        </div>
      ) : null}
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
  useError: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: "",
  inputType: inputTypes.FILTER,
  isRequired: true,
  withError: false,
  useError: false,
};

export default Input;
