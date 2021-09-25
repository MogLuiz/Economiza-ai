import styled from "styled-components";

export const Container = styled.div `

    width: 48%;
    height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    display: flex;

`
export const SideLeft = styled.aside`

    padding: 30px 20px;

    > h2 {
        margin-bottom: 30px;
    }

`

export const LegendContainer = styled.ul`

    list-style: none;

`

export const Legend = styled.li`



`

export const SideRight = styled.main``
