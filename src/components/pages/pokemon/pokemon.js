import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/theme-dark-light';
import { Toggler } from '../../context/toggler';
import styled from 'styled-components';

const Pokemons = () => {
    const urlPokemon = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

    const [listPokemons, setListPokemons] = useState([]);
    const [loadingUp, setLoadingUp] = useState(true);
    const [loadingPlus, setIsLoadingPlus] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        const promises = [];
        for (let i = 1; i <= 10; i++) {
            promises.push(fetch(urlPokemon(i))
            .then((res) => res.json()));
        }
        const pokemons = await Promise.all(promises);
        setListPokemons(pokemons);
        setLoadingUp(false);
    };
        fetchData();
    }, []);
  
    const fetchData2 = async () => {
        setIsLoadingPlus(true); 
        for (let i = listPokemons.length + 1; i <= listPokemons.length + 10; i++) {
            const res = await fetch(urlPokemon(i));
            const newPokemon = await res.json();
            setListPokemons((prevList) => [...prevList, newPokemon]);
        }
        setIsLoadingPlus(false); 
    };


    const { theme } = useContext(ThemeContext)

    return(
        <Main style={{color: theme.color, backgroundImage: theme.background}}>
            <Header>POKEDEX</Header>
            <Toggler/>
            {loadingUp && !loadingPlus && <LoadingC>Loading...</LoadingC>}
            <PokemonsList>
                {listPokemons.map((pokemon) => {
                    return(
                        <PokemonItens key={pokemon.id}>
                            <LinkPokemon to={`/pokemon/${pokemon.id}`}>
                            <DivPokemon>
                                <ImgPokemon  className="pokemonIcon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="imagem do pokemon"/>
                            </DivPokemon>
                            </LinkPokemon>
                            <NamePokemon>{pokemon.name.toUpperCase()}</NamePokemon>
                        </PokemonItens>
                    );
                })}
            </PokemonsList>
            <Button>
                <Fetch style={{color: theme.buttonColor, backgroundColor: theme.buttonBackground}} onClick={fetchData2}>Carregar mais pokemons</Fetch>
            </Button>
        </Main>
        
    )
}

const Header= styled.h1`
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    font-weight: 700;
    text-align: center;
    font-size: 3rem;
    padding: 30px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
`
const Main = styled.main`
    font-family: 'Ubuntu', sans-serif;
`
const LoadingC = styled.div`
    @media(min-width: 768px) {
        margin: 3rem;
        font-size: 4rem;
    }
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    text-align: center;
    margin: 5vw;
    font-size: 5vw;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`
const PokemonsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const ImgPokemon = styled.img`
  max-width: 100%;
  width: 9em;
`

const DivPokemon = styled.div`
  height: 12.5em;
  width: 12.5em;
  margin: auto;
  padding: 25px; 
  border: 2px solid grey;
  border-radius: 20%;
  background-image: linear-gradient( 180deg, white 0%,#ffffff 5%, gray 80%); 
`
const PokemonItens = styled.li`
  margin: 10px 35px 20px;
  text-align: center;
`
const LinkPokemon = styled(Link)` 
  margin: 120px;
`
const NamePokemon = styled.p`
  font-size: 25px;
  font-weight: 500;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`

const Button = styled.div`
  text-align: center;
`;

const Fetch = styled.button`
  padding: 10px;
  border-radius: 30px;
  font-size: 20px;
  margin: 30px 0;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
  cursor: pointer;
`
export default Pokemons;