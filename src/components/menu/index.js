import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Logo from "~/assets/pokeapi.png";
import { connect } from "react-redux";
import { translationText } from "~/utils/language/index";
import { LOGOUT } from "~/utils/constants";
import "./menu.scss";
import { Button } from "~/components/buttons/index";
import useLocation from "wouter/use-location";

function Menu({ language, auth, authRedux }) {
  const languageText = translationText(language);
  const [location, setLocation] = useLocation();
  const [burger, setBurger] = useState(false);
  const ref = useRef();
  const focusMenu = () => setBurger(!burger);
  return (
    <div className="containerMenu">
      <div onClick={focusMenu} className="containerImg">
        <img className="logo" src={Logo} />
      </div>
      <div
        ref={ref}
        className={`containerButton ${burger ? "burger" : "burgerHide"}`}
      >
        <Button
          title={languageText["buttonHome"]}
          ClassName="buttonClasic"
          handleClick={() => {
            setLocation("/");
          }}
        />
        <Button
          handleClick={() => {
            setLocation("/Filter");
          }}
          title={languageText["buttonList"]}
          ClassName="buttonClasic"
        />
        <div className="containerButton3"></div>
      </div>
    </div>
  );
}

Menu.propTypes = {};

const mapDispatchToProp = (dispatch) => {
  return {
    authRedux: () => dispatch({ type: LOGOUT }),
  };
};
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, mapDispatchToProp)(Menu);
