// Packages
import styled, { keyframes } from "styled-components";

// Types
import { ILegendProps } from './types'


const animate = keyframes`

    0% {
        transform: translateX(100px)
    }

    100% {
        transform: translateX(0px);
    }

`

export const Container = styled.div `

    width: 48%;
    height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    display: flex;


    animation: ${animate} .5s;

    @media(max-width: 770px) {
        display: flex;
        width: 100%;
    }

`
export const SideLeft = styled.aside`

    padding: 30px 20px;

    > h2 {
        margin-bottom: 30px;
    }

    @media(max-width: 1345px) {
        padding: 0 15px 5px;
        margin-bottom: 7px;

        > h2 {
            margin-top: 20px;
        }
    }

    @media(max-width) {
        padding: 15px;
        margin-bottom: 7px;
    }

`

export const LegendContainer = styled.ul`

    list-style: none;

    height: 168px;
    padding-right: 15px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 10px;
   }

   ::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors.secondary};
      border-radius: 10px;
   }

   ::-webkit-scrollbar-track {
      background-color: ${props => props.theme.colors.tertiary};
   }

`

export const Legend = styled.li<ILegendProps>`

    display: flex;
    align-items: center;

    margin-bottom: 7px;

    > div {

        background-color: ${props => props.color};

        width: 40px;
        height: 40px;

        border-radius: 5px;

        font-size: 14px;
        line-height: 40px; // Line Height do tamanho da caixa centraliza o elemento no eixo Y
        text-align: center;

    }

    > span {

        margin-left: 5px;

    }

`

export const SideRight = styled.main`

    display: flex;
    flex: 1;
    justify-content: center;
    
    
`
