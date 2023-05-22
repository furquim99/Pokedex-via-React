import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from "react-router-dom";
import { ThemeContext } from '../../context/theme-dark-light'
import { Toggler } from '../../context/toggler'
import  HeaderC  from '../header/header'
import styled from 'styled-components';

const DetailsPokemons = () =>{

    const { id } = useParams();
    const [pokemon, setPokemons] = useState(null);
    const {theme} = useContext(ThemeContext);
    const [powersInfo, setPowersInfo] = useState({})

    useEffect(() => {
        const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const fetchData = async () =>{
            const res = await fetch(urlPokemon);
            const data = await res.json();
            setPokemons(data);
            const powers = await fetch(`https://pokeapi.co/api/v2/ability/${id}/`)
                                .then((res) => res.json())
            const powerData = await powers.effect_entries[1].effect
            setPowersInfo(powerData.replace(/\n/g, " "))
        };
        fetchData();
    }, [id])

    return(
        <div style={{color: theme.color, backgroundImage: theme.background, borderColor: theme.color }}>
            <HeaderC/>
            <Toggler/>
            {pokemon ? (
                <>
                    <Panel style={{color: theme.color, backgroundImage: theme.background, borderColor: theme.color }}>
                        <Container >
                            <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} ></Img>
                            <Name>{pokemon.name.toUpperCase()}</Name>
                        </Container>
                        <Data>
                            <List>
                                <Moves>Moves</Moves>
                                <Itens>
                                    {pokemon.moves.slice(0, 10).map(move => (
                                        <ListItem key={move}>{move.move.name}</ListItem>
                                    ))}
                                </Itens>
                            </List>
                            <List>
                                <Moves>Abilities</Moves>
                                <Itens>
                                    {pokemon.abilities.map((ability, index) => (
                                        <ListItem key={index}>{ability.ability.name}</ListItem>
                                    ))}
                                    <Ability>{JSON.stringify(powersInfo)}</Ability>
                                </Itens>
                            </List>
                            <List>
                                <Moves>Types</Moves>
                                <Itens>
                                    {pokemon.types.map((type, index) => (
                                        <ListItem key={index}>{type.type.name}</ListItem>
                                    ))}
                                </Itens>
                            </List>
                        </Data>
                        <Links style={{color: theme.color, backgroundColor: theme.background, borderColor: theme.color}} to='/'>Pokedex Inicio</Links>
                    </Panel>
                </>
            ) : (
                <Loading>Carregando...</Loading>
            )}
        </div>
    )
}
const Panel = styled.div`
    border: 3px solid black;

    display: flex;
    margin: 5% 10% 0 10%;
    font-family: 'Ubuntu', sans-serif;
    flex-wrap: wrap;
    > * {
        flex-basis: 350px;
    };
    @media(max-width: 1350px){
        flex-direction: column;
    }
    @media(max-width: 750px){
        border-radius: 0;
    }
`

const Loading = styled.div`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    text-align: center;
    margin: 5vw;
    font-size: 5vw;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    color: #ffffff;
    @media(min-width: 768px) {
        margin: 3rem;
        font-size: 4rem;
    }
`;

const Img = styled.img`
    max-width: 100%;
    width: 20rem;
    filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.8));
    @media(max-width: 600px){
        width: 50vw;
    }
`

const Name = styled.h1`
    font-weight: 700;
    margin-bottom: 20px;
    @media(max-width: 450px){
        margin: 0 10%;
        font-size: 1.5em;
    }
`
const Container = styled.div`
    text-align: center;
    margin: 3rem;
    margin-top: 15rem;
    height: 400px;
    border: 5px groove grey;
    border-radius: 20%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background: linear-gradient(180deg, white 0%,#ffffff 5%, gray 80%);
    @media(max-width: 1350px){
        margin: auto;
        margin-top: 2rem;   
    }
`
const Data = styled.div`
    text-align: center;
    margin-left: 10%;
    @media(max-width: 1350px){
        margin: auto;
    }
`

const List = styled.ul`
    > * {
        margin: 2rem 0;
    }
`

const Moves = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`

const Itens = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: grey;
    font-size: 1rem;
    border: 6px groove darkgrey;
    @media(max-width: 1200px){        
        width: 90%;
        margin: 5%;
    }
`

const ListItem = styled.li`
    list-style-type: none;
    display: inline-block;
    margin: 25px 10px;
    font-weight: 500;
    text-align: center;
    @media(max-width: 500px){    
        width: 100px;
    }
`

const Ability = styled.p`
    max-width: 100%;
    width: 500px;
    text-align: center;
    margin: auto;
    font-weight: 500;
    @media(max-width: 600px){
        width: auto;
        max-width: 100%;
    }
`
const Links = styled(Link) `
    display: block;
    background-color: crimson;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    width: 10 em;
    margin: auto;
    margin-bottom: 1em;
    padding: 0.9em;
    font-weight: 300;
    font-size: 25px;
    border: 2px solid black;
    border-radius: 25%;
    flex-basis: 10%;
    &:hover{
        color: green;
        background-color: green;
        text-decoration: none;
        box-shadow: 0 0 10px #000111;
    };
    &:visited {
        text-decoration: none;
        color: green;
    }
    @media(max-width: 1350px){
        display: block;
        margin: auto;
        margin-bottom: 10px;
        text-align: center;
    }
`

export default DetailsPokemons