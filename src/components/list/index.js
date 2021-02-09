import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Text from "~/components/text";
import "./list.scss";
import { translationText } from "~/utils/language";
import Card from "~/components/card";

function List({ pokemons, pokemontToFind, language }) {
  const languageText = translationText(language);

  return (
    <Fragment>
      <div className="list">
        {pokemons.map((i, index) => {
          return (
            <div key={index} className="containerCard">
              <Card language={language} uri={i.url} name={i.name} />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

List.propTypes = {};

export default List;
