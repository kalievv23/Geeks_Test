import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import styled from "styled-components";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=6")
      .then((response) => response.json())
      .then(async (data) => {
        const results = data.results;
        const pokemonDataList = await Promise.all(
          results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const pokemonData = await response.json();
            return {
              name: pokemonData.name,
              url: pokemonData.sprites.front_default,
            };
          })
        );
        setPokemonList(pokemonDataList);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <GlobalContainer>
          {pokemonList.map((pokemon, index) => (
            <Card key={index} {...pokemon} />
          ))}
        </GlobalContainer>
      )}
    </div>
  );
}

export default PokemonList;

const GlobalContainer = styled.div`
  box-shadow: 0 0 10px 1px #efefef;
  border-radius: 10px;
  padding: 50px;
  width: 50%;
  margin: auto;
  margin-top: 5em;
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px; 
`;
