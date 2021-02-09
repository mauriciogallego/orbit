import React, { Fragment } from "react";
import woloxFooter from "~/assets/pokeapi.png";
import { connect } from "react-redux";
import { CHANGE_LANGUAGE } from "~/utils/constants";
import "./footer.scss";

function Footer({ idioms }) {
  function handleLanguage(value) {
    idioms(value);
  }
  return (
    <div className="containerFooterPrincipal">
      <img className="svg-footer" src={woloxFooter} alt="footer" />
      <div className="changeLanguage">
        <p onClick={() => handleLanguage("spanish")}>Es</p>
        <p>|</p>
        <p onClick={() => handleLanguage("english")}>En</p>
      </div>
    </div>
  );
}

Footer.propTypes = {};

const mapDispatchToProp = (dispatch) => {
  return {
    idioms: (payload) =>
      dispatch({
        type: CHANGE_LANGUAGE,
        payload: {
          language: payload,
        },
      }),
  };
};

const mapToStateToProps = (state) => {
  return state;
};
export default connect(mapToStateToProps, mapDispatchToProp)(Footer);
