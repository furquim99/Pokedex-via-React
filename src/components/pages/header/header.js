import React from "react";
import styled from "styled-components";

const HeaderC = () => {

    return(
        <HeaderPage> Pokedex via React</HeaderPage>
    )
}

const HeaderPage = styled.h1`
    font-weight: 700;
    text-align: center;
    font-size: 3rem;
    padding: 30px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`

export default HeaderC