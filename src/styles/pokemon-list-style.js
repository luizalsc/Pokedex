import styled from "styled-components"

export const PokemonListSection = styled.section`
    height: 100vh;

ul{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
   x
}

ul li{
    padding: 1rem;
    height: 10rem;
    width: 12rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 1rem;
    margin: 2rem;
}

ul li h1{
    text-transform: uppercase;
    font-family: sans-serif;
    font-size: 1rem;
    border-radius: 0.5rem;
    color:rgb(83, 84, 57);
    text-align: center;
}
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    background-color: #F5F6E4;
    border-radius: 0.3rem;
`
