import React, { useEffect, useState } from "react";
import { translationText } from "~/utils/language/index";
import Menu from "~/components/menu/index";
import { connect } from "react-redux";
import { get } from "~/Api/index";
import List from "../../components/list";
import Input from "~/components/input/index";
import "./filter.scss";
import Spinner from "~/components/spinner/index";
import Text from "~/components/text/index";

function Filter({ language }) {
  const languageText = translationText(language);
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState(false);
  const [near, setNear] = useState(false);

  const data = async () => {
    const response = await get(
      `https://pokeapi.co/api/v2/pokemon?offset=${pokemons.length}&limit=5`
    );
    setPokemons([...pokemons, ...response.results]);
  };

  useEffect(() => {
    const onChange = async (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting && !near) {
        setNear(true);
        await data();
        setNear(false);
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "10px",
      threshold: 1.0,
    });
    if (pokemons.length !== 0) {
      observer.observe(document.getElementById("loading"));
    }
  });

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="container">
      <Menu />
      <List pokemons={pokemons} language={language} pokemontToFind={pokemon} />
      <div style={{ display: near ? "none" : "block" }} id="loading">
      <Spinner />
      </div>
    </div>
  );
}

Filter.propTypes = {};

const mapToStateToProps = (state) => state;

export default connect(mapToStateToProps)(Filter);
