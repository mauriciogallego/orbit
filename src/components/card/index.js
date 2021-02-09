import React, { memo, useEffect, useState } from "react";
import { get } from "~/Api/index";
import { translationText } from "~/utils/language";
import Text from "~/components/text/index";
import "./card.scss";
import { filterPokemonsProps } from "../../function/filterPokemons";
import clsx from "clsx";

function Card({ uri, name, language }) {
  const languageText = translationText(language);
  const [data, setData] = useState({});
  const [click, setClick] = useState(false);
  const className = clsx({
    card: true,
    clicked: click,
  });
  const fetchData = async () => {
    const response = await get(uri);
    setData(filterPokemonsProps(response));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div onClick={() => setClick(!click)} className={className}>
      <div className="presentation">
        <img src={data.image} alt={name} />
        <Text
          paragraph={`[${name.toUpperCase()}]`}
          orderColors={["bold"]}
          ClassNameContainer="textCard"
          ClassName=""
        />
      </div>
      <div className="containerDescription">
        <Text
          orderColors={["green bold"]}
          ClassName="containerDescriptionTitle"
          paragraph={languageText["description"]}
        />
        <Text
          orderColors={["gray bold"]}
          ClassName=""
          paragraph={`${languageText["height"]}: ${data.height}`}
        />
        <Text
          orderColors={["gray bold"]}
          ClassName=""
          paragraph={`${languageText["weight"]}: ${data.weight}`}
        />
        <Text
          orderColors={["gray bold"]}
          ClassName=""
          paragraph={`${languageText["experience"]}: ${data.base_experience}`}
        />
      </div>
      <div className="containerDescription">
        <Text
          orderColors={["green bold"]}
          ClassName="containerDescriptionTitle"
          paragraph={languageText["abilities"]}
        />
        {data.abilities &&
          data.abilities.map((i, index) => {
            return (
              <Text
                key={index}
                orderColors={["gray bold"]}
                ClassName=""
                paragraph={`[${i.ability.name}]: ${i.slot}`}
              />
            );
          })}
      </div>
    </div>
  );
}

Card.propTypes = {};

export default Card;
