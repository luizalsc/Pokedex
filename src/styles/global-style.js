import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62,5%;
    background-color: rgba(33, 44, 27);
  }

  *{
    marign: 0;
    padding: 0;
    list-style: none;
    border: none;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
  }

  .button-default{
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-weight: bold;
    height: 2rem;
    text-align: center;
    box-shadow: rgba(83, 84, 57, 0.65) 0px 0px 0px 0.8px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`