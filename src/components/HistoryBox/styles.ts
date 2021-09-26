// packages
import styled from "styled-components";

// types
import { ILegendProps } from './types'

export const Container = styled.div`

    width: 100%;

    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0;
    padding: 30px 20px;

    border-radius: 7px;

`

export const ChartContainer = styled.div`

    height: 260px;

`

export const Header = styled.header`

    width: 100%;

    display: flex;
    justify-content: space-between;

    > h2 {
        margin-bottom: 20px;
        padding-left: 16px;
    }

`
export const LegendContainer = styled.ul`

    list-style: none;

    display: flex;

`
export const Legend = styled.li<ILegendProps>`

    display: flex;
    align-items: center;

    margin-bottom: 20px;
    margin-left: 10px;
    padding-right: 16px;

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