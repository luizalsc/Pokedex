import { Link } from "react-router-dom"
import styled from "styled-components"

export const Section = styled.section`
    padding: 1rem;
    display: grid;
    grid: "menu menu menu menu"
        "card info info info"
        / 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;

img {
    width: 6rem;
}

.img-box {
    display: flex;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    border-radius: 0.3rem;
}

h1 {
    text-transform: uppercase;
    font-family: sans-serif;
    font-size: 1.6rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
}

h2 {
    text-transform: uppercase;
    font-family: sans-serif;
    line-height: 2.3rem;
    border-bottom: rgb(83, 84, 57) solid 0.1rem;
    margin: 0.5rem 0;
}

h3 {
    font-size: 1rem;
    text-transform: uppercase;
    font-family: sans-serif;
}

.type-text {
    text-transform: uppercase;
}

.card {
    grid-area: card;
    padding: 1rem;
    height: 22rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 1rem;
}

.card ul{
    display: flex;
    justify-content: space-evenly;
    font-size: 1.5rem;
    margin: auto 0;
}

.info {
    grid-area: info;
    padding: 2rem;
    border-radius: 0.5rem;
}

.moves {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-area: column;
}

.moves li {
    display: flex;
    justify-content: center;
    width: 7.5rem;
    height: 4rem;
    background-color: #fff;
    margin: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: rgba(83, 84, 57, 0.65) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

.moves li p {
    text-transform: capitalize;
    text-align: center;
}
`
export const HomePageLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: bold;
    height: 4rem;
    width: 4rem; 
    text-align: center;
    padding-top: 35%;
    transition: color 0.3s ease-in-out;

&:visited {
    color: #000;
}

&:hover {
  color: #fff;
}
`
export const HomePageLinkContainer = styled.div `
    display: flex;
    background-color: #F5F6E4;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    box-shadow: rgba(83, 84, 57, 0.65) 0px 0px 0px 0.8px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    transition: background-color 0.3s ease-in-out;

 &:hover {
    background-color: rgb(83, 84, 57);
    cursor: pointer;
}
 `

export const AbilitiesUl = styled.ul`
    display: flex;
    align-self: flex-start;

li {
    padding: 1rem;
    flex: 1;
 }

`