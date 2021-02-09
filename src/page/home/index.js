import React, { useEffect, useState } from "react";
import { translationText } from "~/utils/language/index";
import Menu from "~/components/menu/index";
import { connect } from "react-redux";
import imageLogo from "~/assets/pokemon-image.jpg";
import "./home.scss";
import Text from "~/components/text/index";

function Filter({ language }) {
  const languageText = translationText(language);
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState(false);
  const [near, setNear] = useState(false);

  return (
    <div className="container">
      <Menu />
      <div className="wrap">
        <div className="containerTitle">
          <Text
            orderColors={["bold"]}
            ClassName="title"
            paragraph={`${languageText["title"]}`}
          />
          <br />
          <br />
          <Text
            orderColors={["blue bold", "green bold"]}
            ClassName="title"
            paragraph={`${languageText["subtitle"]}`}
          />
        </div>
        <img src={imageLogo} alt="image-logo" />
      </div>
    </div>
  );
}

Filter.propTypes = {};

const mapToStateToProps = (state) => state;

export default connect(mapToStateToProps)(Filter);
